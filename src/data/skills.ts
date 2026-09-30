export interface SkillItem {
  name: string
  detail?: string
}

export interface SkillGroup {
  area: 'Product Design' | 'Leadership & Collaboration' | 'Tools & AI' | 'Languages'
  items: SkillItem[]
}

export const skills: SkillGroup[] = [
  {
    area: 'Product Design',
    items: [
      { name: 'UX/UI Design' },
      { name: 'Digital Product Design' },
      { name: 'Visual Design' },
      { name: 'Design Systems' },
      { name: 'User Flows & Prototypes' },
      { name: 'User Testing & Validation' },
    ],
  },
  {
    area: 'Leadership & Collaboration',
    items: [
      { name: 'Design Leadership' },
      { name: 'Cross-functional Collaboration' },
      { name: 'Stakeholder Management' },
      { name: 'Teaching & Mentoring' },
    ],
  },
  {
    area: 'Tools & AI',
    items: [
      { name: 'Figma' },
      { name: 'Adobe Suite' },
      { name: 'Atlassian' },
      { name: 'Claude' },
      { name: 'AI-assisted Design' },
    ],
  },
  {
    area: 'Languages',
    items: [
      { name: 'Spanish', detail: 'Native' },
      { name: 'English', detail: 'C1' },
    ],
  },
]
