export interface Experience {
  company: string
  role: string
  period: string
  location: string
  workMode: 'Remote' | 'Hybrid' | 'On-site'
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'Mutua Madrileña',
    role: 'Lead Product Designer',
    period: 'Oct 2022 — Present',
    location: 'Madrid, Spain',
    workMode: 'Hybrid',
    highlights: [
      'Led the design of several products and features within MutuaMás, Mutua Madrileña’s app, improving the experience of insurance customers and expanding the range of available services, working on this app from 2022 to present',
      'Led the design of a conversational insurance quote journey launched in 2022, increasing the number of quotes by 15% compared with the previous journey',
      'Led the design and ongoing evolution of MutuaCity, an app for Mutua Inmobiliaria’s 12,000 clients that encourages the use of its offices and facilities, launched in June 2024',
      'Designed the integration of mobility services from Voltio, Centauro and Cabify, as well as car leasing solutions, ensuring a consistent experience throughout the app',
      'Work closely with business and engineering teams to turn complex requirements into clear and feasible product experiences, from user flows and prototypes to polished interfaces',
      'Design and validate improvements to MutuaMás through user testing, incorporating findings into product decisions',
    ],
  },
  {
    company: 'CEU San Pablo University',
    role: 'Interface Design Lecturer',
    period: 'Sep 2021 — Jun 2024',
    location: 'Madrid, Spain',
    workMode: 'On-site',
    highlights: [
      'Taught interface design to web development students for 3 years',
    ],
  },
  {
    company: 'Sesh (formerly Colkie)',
    role: 'Head of UX/UI Design',
    period: 'Jun 2021 — Oct 2022',
    location: 'Madrid, Spain',
    workMode: 'Remote',
    highlights: [
      'Designed Colkie from the ground up: a social networking app created to connect music fans with artists',
      'Led the end-to-end product design process, from the company’s foundation through to launch, contributing to product concept, user experience and interface design',
      'Recruited fans and conducted remote usability tests to validate design proposals before launching new features, incorporating findings into product decisions',
    ],
  },
  {
    company: 'Optiva Media - an EPAM company',
    role: 'Head of UX/UI Design',
    period: 'Sep 2019 — Jun 2021',
    location: 'Madrid, Spain',
    workMode: 'Hybrid',
    highlights: [
      'Led the UX/UI design practice at a consultancy specialising in digital products for the telecommunications industry',
      'Managed a team of three designers, coordinating one designer directly and two designers working on Orange projects',
      'Led the design of mobile and TV applications for Orange TV, UEFA Euro 2020, ShortsTV, Euskaltel, Guigo and Avatel',
    ],
  },
  {
    company: 'Mutua Madrileña',
    role: 'UX/UI Designer',
    period: 'May 2018 — Sep 2019',
    location: 'Madrid, Spain',
    workMode: 'On-site',
    highlights: [
      'Designed user interfaces for insurance digital products in collaboration with product and engineering teams',
    ],
  },
  {
    company: 'Xatapp Investments',
    role: 'UX/UI Intern',
    period: 'Jun 2017 — Dec 2017',
    location: 'Madrid, Spain',
    workMode: 'On-site',
    highlights: ['Supported UX/UI design tasks during internship'],
  },
]
