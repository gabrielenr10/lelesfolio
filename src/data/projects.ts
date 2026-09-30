import type { ImageMetadata } from 'astro'
import colkie01 from '../assets/Colkie/colkie-01.png'
import colkie02 from '../assets/Colkie/colkie-02.png'
import eurocopa01 from '../assets/Eurocopa_2021/eurocopa-01.png'
import eurocopa02 from '../assets/Eurocopa_2021/eurocopa-02.png'
import mutuacity01 from '../assets/MutuaCity/mutuacity-01.png'
import mutuacity02 from '../assets/MutuaCity/mutuacity-02.png'
import mutuamas01 from '../assets/MutuaMas/mutuamas-01.png'
import mutuamas02 from '../assets/MutuaMas/mutuamas-02.png'
import pradoCover from '../assets/PRADO/portada.png'
import prado01 from '../assets/PRADO/prado-01.png'
import xstream01 from '../assets/XStream/xstream-01.png'
import xstream02 from '../assets/XStream/xstream-02.png'

export interface ProjectImage {
  src: ImageMetadata
  alt: string
}

export interface Project {
  id: string
  title: string
  description: string
  role: string
  date?: string
  images: [ProjectImage, ProjectImage]
  websiteUrl?: string
}

// Projects are ordered newest first, with ongoing work first. Dates are display text.
// Add websiteUrl: 'https://your-project.com' to show the optional website button.
export const projects: Project[] = [
  {
    id: 'prado',
    title: 'PRADO · A shared language for Mutua Madrileña’s products',
    role: 'Lead Product Designer · Design system leadership and coordination with engineering.',
    description:
      'PRADO is Mutua Madrileña’s design system, created to establish a shared and consistent language across its digital products. I have led its creation from the ground up and worked closely with the engineering team to implement its foundations, components and patterns. The system is still being rolled out and developed, with new elements added as the needs of the products and teams evolve.',
    images: [
      {
        src: pradoCover,
        alt: 'PRADO — project cover',
      },
      {
        src: prado01,
        alt: 'PRADO — showcase 1',
      },
    ],
    date: '2024 - Present',
  },
  {
    id: 'mutuacity',
    title: 'MutuaCity · Services and community around the workplace',
    role: 'Lead Product Designer · Design leadership, product development and continuous user validation since 2022.',
    description:
      'MutuaCity is an app for Mutua Inmobiliaria’s clients, created to address their needs and encourage greater use of the workplace. It brings together building services, mobility options, a digital card and features such as padel court bookings. I have led its design since its launch in 2022 and conduct ongoing user testing, applying the findings to improve the experience and shape new services and features.',
    images: [
      {
        src: mutuacity01,
        alt: 'MutuaCity — showcase 1',
      },
      {
        src: mutuacity02,
        alt: 'MutuaCity — showcase 2',
      },
    ],
    date: 'June 2024',
    websiteUrl:
      'https://www.expansion.com/tecnologia/companias/2024/06/20/66732adce5fdea2a6b8b459a.html',
  },
  {
    id: 'mutuamas',
    title: 'MutuaMás · Insurance and mobility in one experience',
    role: 'Lead Product Designer · Product design leadership and supervision of 2+ people teams.',
    description:
      'Since 2022, I have led the design of multiple products within MutuaMás, Mutua Madrileña’s app for insurance services and mobility solutions. I have worked as Lead Designer on projects including the integration of Voltio and Taxi/Cabify, coordinating teams of one or two designers on each initiative. My work covers experience definition, user flows, prototypes and interface design, as well as overseeing the design process to integrate services from different companies into a coherent and easy-to-use app experience.',
    images: [
      {
        src: mutuamas01,
        alt: 'MutuaMás — showcase 1',
      },
      {
        src: mutuamas02,
        alt: 'MutuaMás — showcase 2',
      },
    ],
    date: 'May 2024',
    websiteUrl:
      'https://www.abc.es/deportes/tenis/mutua-madrilena-lanza-super-app-mutuamas-20240505140900-nt.html?ref=https%3A%2F%2Fwww.abc.es%2Fdeportes%2Ftenis%2Fmutua-madrilena-lanza-super-app-mutuamas-20240505140900-nt.html',
  },
  {
    id: 'colkie',
    title: 'Colkie · A community connecting fans and artists',
    role: 'Head of UX/UI Design · End-to-end product design and user testing.',
    description:
      'I designed a social app from the ground up to bring fans closer to their favourite artists and bring communities, conversations and music content together in one place. I led the design process from the company’s foundation through to the app’s launch, defining both the user experience and interface. To validate new features before release, I recruited fans and conducted remote usability tests, using the findings to guide design decisions.',
    images: [
      {
        src: colkie01,
        alt: 'Colkie — showcase 1',
      },
      {
        src: colkie02,
        alt: 'Colkie — showcase 2',
      },
    ],
    date: 'June 2022',
  },
  {
    id: 'eurocopa-2021',
    title: 'UEFA Euro 2020 · A TV experience that evolved with the tournament',
    role: 'UX/UI Designer · Sole designer responsible for the complete TV application.',
    description:
      'I designed an end-to-end application for digital terrestrial television dedicated to UEFA Euro 2020, which was held in 2021. The product featured multiple sections and evolved as the competition progressed, adapting its content and user journeys to the group stage, knockout rounds and final. I completed the entire UX and UI process ent-to-end, from information architecture and content organisation to the visual design of the TV screens.',
    images: [
      {
        src: eurocopa01,
        alt: 'UEFA Euro 2020 — showcase 1',
      },
      {
        src: eurocopa02,
        alt: 'UEFA Euro 2020 — showcase 2',
      },
    ],
    date: 'June 2021',
  },
  {
    id: 'xstream',
    title: 'XStream · A TV platform adapted for multiple brands',
    role: 'Lead UX/UI Designer · End-to-end product design and adaptation for more than five brands.',
    description:
      'XStream was Optiva Media’s white-label TV platform, used by companies such as Avatel and Euskaltel on their customers’ set-top boxes. I designed the complete UX/UI experience for the TV application and led its adaptation for more than five brands, retaining a shared product structure while tailoring the experience to each operator’s identity and requirements.',
    images: [
      {
        src: xstream01,
        alt: 'XStream — showcase 1',
      },
      {
        src: xstream02,
        alt: 'XStream — showcase 2',
      },
    ],
    date: '2020',
  },
]
