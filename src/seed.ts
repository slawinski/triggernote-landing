import config from './payload.config'
import { getPayload } from 'payload'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const copy = {
  hero: {
    tagline: 'The Future of Finance',
  },
  features: {
    tagline: 'Why Choose Us',
    cards: [
        { link: '/features/speed' },
        { link: '/features/security' },
        { link: '/features/support' }
    ]
  },
  application: {
    tagline: 'Download Now',
  },
  header: {
    cta: {
      label: 'Get Started',
      link: '/signup',
    },
  },
  footer: {
    subscription: {
      heading: 'Subscribe to get tips and tactics to grow the way you want.',
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
    copyright: '© 2026 Nightsable. All rights reserved.',
  },
  cookieConsent: {
    title: 'We value your privacy',
    content: 'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
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

  const logo = await uploadIfNotExists('nightsable-assets/logos/logo.svg', 'Nightsable Logo')
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
        return block
    })

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
