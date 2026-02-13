import config from './payload.config'
import { getPayload } from 'payload'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const copy = {
  hero: {
    tagline: 'TriggerNote - System Active',
  },
  features: {
    tagline: 'TriggerNote Features',
    cards: [
        { link: '/features/speed' },
        { link: '/features/security' },
        { link: '/features/support' }
    ]
  },
  application: {
    tagline: 'Get TriggerNote',
  },
  testimonials: {
    tagline: 'SIGNAL_INTERCEPTS',
    heading: 'SURVIVOR LOGS',
    testimonials: [
      {
        author: 'Vault Dweller 101',
        role: 'Wasteland Survivor',
        content: 'Found this holotape in a stash. Finally, I can track my 10mm ammo and stimpaks without exposing my location to the Enclave. Best inventory tool in the wasteland.',
        signal: 'STRONG',
      },
      {
        author: 'Railroad Agent',
        role: 'Underground Network',
        content: "No cloud sync means the Institute can't spy on our weapons cache. This is the only secure way to manage inventory. Ad Victoriam... wait, wrong faction.",
        signal: 'ENCRYPTED',
      },
      {
        author: 'Gunner Commander',
        role: 'Mercenary Leader',
        content: "Organizing a platoon's worth of laser rifles used to be a nightmare. Now my squad is efficient. Worth every cap.",
        signal: 'INTERCEPTED',
      },
    ],
  },
  faq: {
    tagline: 'HELP_MODULE',
    heading: "OVERSEER'S MANUAL",
    faqs: [
      {
        question: 'IS MY DATA SECURE FROM THE ENCLAVE?',
        answer: 'AFFIRMATIVE. All data is stored locally on your device. No external servers. No cloud transmission. Your inventory remains classified.',
      },
      {
        question: 'DOES IT REQUIRE A PIP-BOY CONNECTION?',
        answer: 'NEGATIVE. It operates as a standalone module. However, it functions offline, perfect for deep bunker operations where signal is zero.',
      },
      {
        question: 'HOW DO I EXPORT MY MANIFEST?',
        answer: 'Standard CSV export protocol is available. You can backup your data manually to any compatible holotape or drive.',
      },
      {
        question: 'IS THERE A SUBSCRIPTION FEE?',
        answer: 'NEGATIVE. One-time acquisition. No recurring cap payments required for core functionality.',
      },
    ],
  },
  header: {
    cta: {
      label: 'Initialize',
      link: '/signup',
    },
  },
  footer: {
    subscription: {
      heading: 'Subscribe to TriggerNote updates.',
    },
    navGroups: [
      {
        label: 'Product',
        links: [
          { label: 'Features', link: '/features' },
          { label: 'Pricing', link: '/pricing' },
          { label: 'Changelog', link: '/changelog' },
          { label: 'Docs', link: '/docs' },
        ],
      },
      {
        label: 'Company',
        links: [
          { label: 'About Us', link: '/about' },
          { label: 'Careers', link: '/careers' },
          { label: 'Blog', link: '/blog' },
          { label: 'Contact', link: '/contact' },
        ],
      },
    ],
    copyright: '© 2026 TriggerNote. All rights reserved.',
  },
  cookieConsent: {
    title: 'Data Privacy Protocol',
    content: 'TriggerNote uses cookies for optimal performance. By clicking "Accept All", you consent to our data processing terms.',
    acceptButtonLabel: 'Accept All',
    settingsButtonLabel: 'Preferences',
  },
}

async function seed() {
  const payload = await getPayload({ config })

  // 1. Upload Media
  const publicDir = path.resolve(dirname, '../public')
  
  async function uploadIfNotExists(relativePath: string, alt: string) {
    const filePath = path.join(publicDir, relativePath)
    const fileName = path.basename(filePath)
    
    // Check if exists
    const existing = await payload.find({
      collection: 'media',
      where: {
        filename: { equals: fileName },
      },
    })

    if (existing.docs.length > 0) {
      return existing.docs[0]
    }

    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`)
        return null;
    }

    const fileBuffer = fs.readFileSync(filePath)
    
    return await payload.create({
      collection: 'media',
      data: {
        alt,
      },
      file: {
        data: fileBuffer,
        name: fileName,
        mimetype: 'image/svg+xml', // Assuming SVGs for now based on list
        size: fileBuffer.length,
      },
    })
  }

  const logo = await uploadIfNotExists('nightsable-assets/logos/logo.svg', 'TriggerNote Logo')
  const twitterIcon = await uploadIfNotExists('nightsable-assets/images/footers/twitter-white.svg', 'Twitter')
  const linkedinIcon = await uploadIfNotExists('nightsable-assets/images/footers/linkedin-white.svg', 'LinkedIn')
  const facebookIcon = await uploadIfNotExists('nightsable-assets/images/footers/fb-white.svg', 'Facebook')

  // 2. Update Footer Global
  if (logo) {
      const socials = []
      if (twitterIcon) socials.push({ platform: 'Twitter', icon: twitterIcon.id, link: 'https://twitter.com' })
      if (linkedinIcon) socials.push({ platform: 'LinkedIn', icon: linkedinIcon.id, link: 'https://linkedin.com' })
      if (facebookIcon) socials.push({ platform: 'Facebook', icon: facebookIcon.id, link: 'https://facebook.com' })

      await payload.updateGlobal({
        slug: 'footer',
        data: {
          logo: logo.id,
          subscription: copy.footer.subscription,
          navGroups: copy.footer.navGroups,
          socials: socials,
          copyright: copy.footer.copyright,
        },
      })
      console.log('Updated Footer Global')
  }

  // 3. Update Cookie Consent Global
  await payload.updateGlobal({
    slug: 'cookie-consent',
    data: copy.cookieConsent,
  })
  console.log('Updated Cookie Consent Global')

  // 4. Update Index Page
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'index' },
    },
  })

  if (pages.docs.length > 0) {
    const indexPage = pages.docs[0]
    const layout = indexPage.layout.map((block) => {
        if (block.blockType === 'hero') {
            return { ...block, tagline: copy.hero.tagline }
        }
        if (block.blockType === 'header') {
            return { ...block, cta: copy.header.cta }
        }
        if (block.blockType === 'features') {
            const newCards = block.cards.map((card, i) => ({
                ...card,
                link: copy.features.cards[i % copy.features.cards.length].link
            }))
            return { ...block, tagline: copy.features.tagline, cards: newCards }
        }
        if (block.blockType === 'application') {
            return { ...block, tagline: copy.application.tagline }
        }
        if (block.blockType === 'testimonials') {
            return { ...block, ...copy.testimonials }
        }
        if (block.blockType === 'faq') {
            return { ...block, ...copy.faq }
        }
        return block
    })

    // Check if testimonials and faq exist, if not add them
    if (!layout.find(b => b.blockType === 'testimonials')) {
        layout.push({
            blockType: 'testimonials',
            ...copy.testimonials,
        })
    }
    if (!layout.find(b => b.blockType === 'faq')) {
        layout.push({
            blockType: 'faq',
            ...copy.faq,
        })
    }

    await payload.update({
        collection: 'pages',
        id: indexPage.id,
        data: {
            layout,
        }
    })
    console.log('Updated Index Page with new copy')
  } else {
      console.log('Index page not found, skipping page update.')
  }

  process.exit(0)
}

seed()
