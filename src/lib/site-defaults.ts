// All the CommandLab copy in one place (same role as Liams Cafe's site-defaults.ts).
// Services and captions come from the CommandLab intro video.

export const siteDefaults = {
  branding: {
    siteTitle: 'CommandLab',
    tagline: 'Hardware to Software',
    kicker: 'Tech Solutions',
  },
  hero: {
    line1: 'we solve',
    line1Bold: 'problems',
    cycle: ['hardware', 'software', 'solutions'],
    subtitle:
      'Tech solutions for your business, from the devices on your counter to the software in the cloud.',
  },
  about: {
    title: 'About CommandLab',
    body: 'CommandLab is a tech solutions start-up that works across the whole stack. We design and build the devices, the systems and the software a business runs on, and we keep them running after launch.',
    chain: ['Hardware', 'Firmware', 'Systems', 'Software', 'AI'],
  },
  origins: {
    title: 'Where we started',
    body: 'CommandLab was founded by former Mapúa University students in the Philippines who share a passion for prototyping and embedded systems. The team began as PROTOCRAST, a group of Mapuans who were also officers of Mapúa-ICpEP.SE, and today it designs and builds hardware and software solutions, alongside side projects of its own.',
    people: [
      {
        name: 'Mc Liam Mateo',
        role: 'Pioneer and Former President',
        note: 'Mc Liam finished a Bachelor of Science in Computer Engineering, specializing in Embedded Systems, at Mapua University, where he was President of Mapúa-ICpEP.SE and sat on its Board of Directors, and played football for Mapua in the NCAA. He later worked as an Associate Software Engineer at Innodata and as a Mid-Level Mobile Developer at Zensap Technology, and is now the owner of CommandLab. He is also a football coach and owner of Bagani Academy, a private football academy, and of Villagers Football Club, a community club.',
        linkedin: 'https://www.linkedin.com/in/mc-liam-mateo-9b1776200/',
        github: 'https://github.com/mcliamateo',
        photo: '/about/mc-liam-mateo.png',
      },
      {
        name: 'Lanz Clinton Valdez',
        role: 'Former Batch Representative',
        note: 'Holds a Bachelor of Science in Computer Engineering, specializing in Embedded Systems. Full-stack web developer who builds maintainable, data-driven web systems with clean TypeScript. Currently building business-critical internal software across frontend, backend, database design, reporting and background processing.',
        linkedin: 'https://www.linkedin.com/in/lanzclintonv/',
        github: 'https://github.com/lanzclintonv',
        photo: '/about/lanz-clinton-valdez.png',
      },
    ],
    memoriam: 'In memory of Alejandro Jerez',
  },
  contact: {
    facebook: 'https://www.facebook.com/profile.php?id=61596603877658',
    facebookHandle: 'CommandLab',
    // Messenger opens a chat with the Facebook page (m.me + the page id).
    messenger: 'https://m.me/61596603877658',
    // Fill these in. Empty values show a placeholder on the page.
    email: '',
    phone: '',
  },
  introVideo: '/media/commandlab-intro.mp4',
} as const

export type ServiceIcon = 'business' | 'fullstack' | 'embedded' | 'it' | 'ai'

export type Service = { slug: string; title: string; caption: string; icon: ServiceIcon }

export const services: Service[] = [
  { slug: 'business-solutions', title: 'Business Solutions', caption: 'Practical solutions for how your business runs.', icon: 'business' },
  { slug: 'full-stack-development', title: 'Full-Stack Development', caption: 'Front end, back end and everything between.', icon: 'fullstack' },
  { slug: 'embedded-systems', title: 'Embedded Systems', caption: 'Firmware and devices that run on their own.', icon: 'embedded' },
  { slug: 'it-solutions', title: 'IT Solutions', caption: 'Support and systems that keep you running.', icon: 'it' },
  { slug: 'ai-engineering', title: 'AI Engineering', caption: 'Intelligent systems, designed and built.', icon: 'ai' },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)

export type Project = {
  name: string
  kind: string
  description: string
  logo: string
  /** Logos with their own background fill the tile; the rest sit on a light tile. */
  tile: 'light' | 'full'
  url?: string
}

// Projects CommandLab has built. Logos are copied from each project's own folder.
export const projects: Project[] = [
  {
    name: "Liam's Cafe",
    kind: 'Cafe system',
    description: 'Member stickers and rewards, POS, barista queue, inventory and staff tools for a coffee shop.',
    logo: '/projects/liams-cafe.png',
    tile: 'light',
    url: 'https://liams-cafe-indol.vercel.app',
  },
  {
    name: 'Lazy Hoops',
    kind: 'Sports booking',
    description: 'A basketball open play app for everyone who likes basketball.',
    logo: '/projects/lazy-hoops.png',
    tile: 'light',
    url: 'https://lazyhoops.vercel.app',
  },
  {
    name: 'Bagani Academy',
    kind: 'Sports booking',
    description: 'Book football open plays and training sessions with Bagani Academy.',
    logo: '/projects/bagani-academy.png',
    tile: 'light',
    url: 'https://baganiacademy.vercel.app',
  },
  {
    name: 'FV1 HOA',
    kind: 'Community portal',
    description: 'Dues and community tools for the Home Owners Association of Felicidad Village 1.',
    logo: '/projects/fv1hoa.svg',
    tile: 'light',
  },
  {
    name: 'Pasahi',
    kind: 'Online gift shop',
    description: 'Gifts from Filipino makers with a handwritten note, delivered anywhere in the Philippines.',
    logo: '/projects/pasahi.svg',
    tile: 'light',
    url: 'https://pasahi-ph.vercel.app',
  },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const
