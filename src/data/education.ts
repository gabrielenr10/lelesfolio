export interface Education {
  school: string
  degree: string
  period: string
  notes?: string
}

export const education: Education[] = [
  {
    school: 'CEI',
    degree: 'AI for Design and Creators Intensive Course',
    period: 'Sep 2026',
    notes: 'Online',
  },
  {
    school: 'Mr Marcel',
    degree: 'Design Systems — Skills & Tools',
    period: 'Feb — Jun 2026',
    notes: 'Online',
  },
  {
    school: 'Universidad CEU San Pablo, Madrid',
    degree: 'Master’s in 3D, VFX and Digital Compositing',
    period: 'Sep 2018 — Jun 2019',
  },
  {
    school: 'U-tad, Las Rozas, Madrid',
    degree: 'Bachelor’s in Visual Design of Digital Content',
    period: 'Sep 2014 — Jun 2018',
  },
  {
    school: 'University of Cambridge, Madrid',
    degree: 'Cambridge First Certificate',
    period: 'Jun 2012',
  },
]
