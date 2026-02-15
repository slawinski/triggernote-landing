import config from "./payload.config";
import { getPayload } from "payload";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const copy = {
  hero: {
    tagline: "TriggerNote - System Active",
  },
  about: {
    tagline: "SYSTEM_MANIFESTO",
    heading: "OUR MISSION",
    content:
      "In the field, reliability is everything. TriggerNote provides a robust digital ledger for your arsenal, operating entirely offline to ensure your data remains your own. Built by operators for operators, our system prioritizes absolute privacy and rapid retrieval of inventory data.",
  },
  features: {
    tagline: "TriggerNote Features",
    cards: [
      {
        link: "/features/speed",
        label: "RAPID INDEXING",
        caption:
          "Instant access to your entire arsenal. Optimized for quick retrieval and status checks in the field.",
      },
      {
        link: "/features/security",
        label: "ENCRYPTED STORAGE",
        caption:
          "AES-256 encryption ensures your inventory data remains private and secure. Offline-first architecture.",
      },
      {
        link: "/features/support",
        label: "MAINTENANCE LOGS",
        caption:
          "Detailed tracking of cleaning, repairs, and modifications. Never miss a maintenance interval again.",
      },
    ],
  },
  application: {
    tagline: "Get TriggerNote",
    downloads: [
      { link: "https://apps.apple.com" },
      { link: "https://play.google.com" },
    ],
  },
  testimonials: {
    tagline: "SIGNAL: DECODED",
    heading: "USER LOGS",
    testimonials: [
      {
        author: "John D.",
        role: "Competitive Shooter",
        content:
          "Finally, a reliable way to track my ammo counts and firearm maintenance schedules. The offline-first approach is exactly what I was looking for.",
      },
      {
        author: "Sarah M.",
        role: "Range Instructor",
        content:
          "The privacy and security of my inventory data are paramount. TriggerNote gives me peace of mind by keeping everything local and encrypted.",
      },
      {
        author: "Michael R.",
        role: "Collector",
        content:
          "Organizing a large collection used to be a nightmare. Now my inventory is perfectly indexed and searchable. Highly recommended.",
      },
    ],
  },
  faq: {
    tagline: "SUPPORT_MODULE",
    heading: "FAQ",
    faqs: [
      {
        question: "IS MY DATA SECURE FROM THIRD PARTIES?",
        answer:
          "AFFIRMATIVE. All data is stored locally on your device. No external servers by default. No unauthorized cloud transmission. Your inventory remains private.",
      },
      {
        question: "DOES IT REQUIRE A PERMANENT INTERNET CONNECTION?",
        answer:
          "NEGATIVE. It operates as a standalone module. It functions entirely offline, perfect for use in remote areas or secure facilities.",
      },
      {
        question: "HOW DO I EXPORT MY MANIFEST?",
        answer:
          "Standard CSV and JSON export protocols are available. You can backup your data manually to any compatible storage device.",
      },
      {
        question: "IS THERE A SUBSCRIPTION FEE?",
        answer:
          "NEGATIVE. One-time acquisition. No recurring payments required for core inventory management functionality.",
      },
    ],
  },
  header: {
    cta: {
      label: "Initialize",
      link: "/signup",
    },
  },
  footer: {
    subscription: {
      heading: "Subscribe to TriggerNote updates.",
    },
    copyright: "© 2026 TriggerNote. All rights reserved.",
  },
  cookieConsent: {
    title: "Data Privacy Protocol",
    content:
      'TriggerNote uses cookies for optimal performance. By clicking "Accept All", you consent to our data processing terms.',
    acceptButtonLabel: "Accept All",
    settingsButtonLabel: "Preferences",
  },
};

async function seed() {
  const payload = await getPayload({ config });

  // 1. Upload Media
  const publicDir = path.resolve(dirname, "../public");
  const rootDir = path.resolve(dirname, "..");

  async function uploadIfNotExists(
    relativePath: string,
    alt: string,
    baseDir: string = publicDir
  ) {
    const filePath = path.join(baseDir, relativePath);
    const fileName = path.basename(filePath);

    // Check if exists
    const existing = await payload.find({
      collection: "media",
      where: {
        filename: { equals: fileName },
      },
    });

    if (existing.docs.length > 0) {
      return existing.docs[0];
    }

    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return null;
    }

    const fileBuffer = fs.readFileSync(filePath);
    const extension = path.extname(fileName).toLowerCase();
    const mimetype = extension === ".svg" ? "image/svg+xml" : "image/png";

    return await payload.create({
      collection: "media",
      data: {
        alt,
      },
      file: {
        data: fileBuffer,
        name: fileName,
        mimetype: mimetype,
        size: fileBuffer.length,
      },
    });
  }

  const logo = await uploadIfNotExists(
    "logo.svg",
    "TriggerNote Logo",
    path.join(rootDir, "media")
  );
  const twitterIcon = await uploadIfNotExists(
    "twitter-white.svg",
    "Twitter",
    path.join(rootDir, "media")
  );
  const linkedinIcon = await uploadIfNotExists(
    "linkedin-white.svg",
    "LinkedIn",
    path.join(rootDir, "media")
  );
  const facebookIcon = await uploadIfNotExists(
    "fb-white.svg",
    "Facebook",
    path.join(rootDir, "media")
  );
  const appStoreIcon = await uploadIfNotExists(
    "app-store-black.png",
    "App Store",
    path.join(rootDir, "media")
  );
  const googlePlayIcon = await uploadIfNotExists(
    "google-play-black.png",
    "Google Play",
    path.join(rootDir, "media")
  );
  const phoneImage = await uploadIfNotExists(
    "phone.png",
    "Phone Interface",
    path.join(rootDir, "media")
  );

  // 2. Update Footer Global
  if (logo) {
    const socials = [];
    if (twitterIcon)
      socials.push({
        platform: "Twitter",
        icon: twitterIcon.id,
        link: "https://twitter.com",
      });
    if (linkedinIcon)
      socials.push({
        platform: "LinkedIn",
        icon: linkedinIcon.id,
        link: "https://linkedin.com",
      });
    if (facebookIcon)
      socials.push({
        platform: "Facebook",
        icon: facebookIcon.id,
        link: "https://facebook.com",
      });

    await payload.updateGlobal({
      slug: "footer",
      data: {
        logo: logo.id,
        subscription: copy.footer.subscription,
        socials: socials,
        copyright: copy.footer.copyright,
      },
    });
    console.log("Updated Footer Global");
  }

  // 3. Update Cookie Consent Global
  await payload.updateGlobal({
    slug: "cookie-consent",
    data: copy.cookieConsent,
  });
  console.log("Updated Cookie Consent Global");

  // 4. Update Index Page
  const pages = await payload.find({
    collection: "pages",
    where: {
      slug: { equals: "index" },
    },
  });

  if (pages.docs.length > 0) {
    const indexPage = pages.docs[0];
    const layout = indexPage.layout.map((block) => {
      if (block.blockType === "hero") {
        return { ...block, tagline: copy.hero.tagline };
      }
      if (block.blockType === "header") {
        return { ...block, cta: copy.header.cta };
      }
      if (block.blockType === "about") {
        return { ...block, ...copy.about };
      }
      if (block.blockType === "features") {
        const newCards = block.cards.map((card, i) => {
          const copyCard = copy.features.cards[i % copy.features.cards.length];
          return {
            ...card,
            label: copyCard.label,
            caption: copyCard.caption,
            link: copyCard.link,
          };
        });
        return { ...block, tagline: copy.features.tagline, cards: newCards };
      }
      if (block.blockType === "application") {
        const downloads = [
          {
            "store-links": {
              image: appStoreIcon?.id,
              link: copy.application.downloads[0].link,
            },
          },
          {
            "store-links": {
              image: googlePlayIcon?.id,
              link: copy.application.downloads[1].link,
            },
          },
        ];
        return {
          ...block,
          tagline: copy.application.tagline,
          image: phoneImage?.id,
          downloads,
        };
      }
      if (block.blockType === "testimonials") {
        return { ...block, ...copy.testimonials };
      }
      if (block.blockType === "faq") {
        return { ...block, ...copy.faq };
      }
      return block;
    });

    // Check if testimonials and faq exist, if not add them
    if (!layout.find((b) => b.blockType === "testimonials")) {
      layout.push({
        blockType: "testimonials",
        ...copy.testimonials,
      });
    }
    if (!layout.find((b) => b.blockType === "faq")) {
      layout.push({
        blockType: "faq",
        ...copy.faq,
      });
    }

    await payload.update({
      collection: "pages",
      id: indexPage.id,
      data: {
        layout,
      },
    });
    console.log("Updated Index Page with new copy");
  } else {
    console.log("Index page not found, skipping page update.");
  }

  process.exit(0);
}

seed();
