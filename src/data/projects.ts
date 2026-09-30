export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  id: string
  title: string
  description: string
  role: string
  startDate: string
  endDate?: string
  images: [ProjectImage, ProjectImage]
  websiteUrl?: string
}

// Replace these sample projects with your own work. Images can live in public/.
// Dates use YYYY-MM. Omit endDate for ongoing work; sample roles/dates are placeholders.
// Add websiteUrl: 'https://your-project.com' to show the optional website button.
export const projects: Project[] = [
  {
    id: 'sample-project-one',
    title: 'Your project title',
    role: 'UX Designer (sample role)',
    startDate: '2025-01',
    endDate: '2025-06',
    description:
      'Use this space to introduce your project, the problem you explored, and how your design helped improve the experience. Replace the two previews below with your showcase images.',
    images: [
      {
        src: '/projects/showcase-overview.svg',
        alt: 'Placeholder for the first project showcase: desktop interface overview',
      },
      {
        src: '/projects/showcase-detail.svg',
        alt: 'Placeholder for the second project showcase: mobile interface detail',
      },
    ],
    websiteUrl: 'https://google.com',
  },
  {
    id: 'sample-project-two',
    title: 'Another project title',
    role: 'Product Designer (sample role)',
    startDate: '2026-01',
    description:
      'Share another piece of your work here. Describe your role, the design challenge, and the outcome to give visitors a little context before they explore your visuals.',
    images: [
      {
        src: '/projects/showcase-overview.svg',
        alt: 'Placeholder for the first showcase of another project: desktop interface overview',
      },
      {
        src: '/projects/showcase-detail.svg',
        alt: 'Placeholder for the second showcase of another project: mobile interface detail',
      },
    ],
  },
]
