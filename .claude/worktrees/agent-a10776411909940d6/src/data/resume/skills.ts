export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // Management & Operations
  {
    title: 'Project Management',
    competency: 5,
    category: ['Management'],
  },
  {
    title: 'Process Optimization',
    competency: 5,
    category: ['Management'],
  },
  {
    title: 'Supply Chain Management',
    competency: 5,
    category: ['Management', 'Operations'],
  },
  {
    title: 'Negotiations',
    competency: 5,
    category: ['Management'],
  },
  {
    title: 'Inventory Management',
    competency: 4,
    category: ['Operations'],
  },
  {
    title: 'Business Process Modeling',
    competency: 4,
    category: ['Management'],
  },
  // Technical
  {
    title: 'Python',
    competency: 4,
    category: ['Technical'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Technical', 'Data'],
  },
  {
    title: 'XML',
    competency: 4,
    category: ['Technical'],
  },
  {
    title: 'Data Analysis',
    competency: 5,
    category: ['Data'],
  },
  {
    title: 'Process Automation',
    competency: 5,
    category: ['Technical', 'Management'],
  },
  {
    title: 'Dashboard Development',
    competency: 4,
    category: ['Data', 'Technical'],
  },
  {
    title: 'SAP ERP',
    competency: 4,
    category: ['Operations', 'Technical'],
  },
  {
    title: 'API Integration',
    competency: 3,
    category: ['Technical'],
  },
  {
    title: 'Web Development',
    competency: 3,
    category: ['Technical'],
  },
  // Tools
  {
    title: 'Microsoft Excel (Advanced)',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Microsoft Project',
    competency: 4,
    category: ['Tools', 'Management'],
  },
  {
    title: 'Google Ads',
    competency: 3,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' },
  { color: 'var(--color-skill-2)', textColor: 'dark' },
  { color: 'var(--color-skill-3)', textColor: 'light' },
  { color: 'var(--color-skill-4)', textColor: 'light' },
  { color: 'var(--color-skill-5)', textColor: 'dark' },
  { color: 'var(--color-skill-6)', textColor: 'dark' },
];

const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
];

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
