export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'NanoClaw',
    subtitle: 'Multi-platform AI Agent Framework',
    link: 'https://github.com/jdgg777/nanoclaw',
    image: '/images/projects/nanoclaw.jpg',
    date: '2025-01-15',
    desc: 'A lightweight alternative to OpenClaw that runs in containers for security. Connects to WhatsApp, Telegram, Slack, Discord, Gmail and other messaging apps. Features memory, scheduled jobs, and runs directly on Anthropic\'s Agents SDK.',
    tech: ['Python', 'Anthropic SDK', 'Docker', 'Multi-platform APIs'],
    featured: true,
  },
  {
    title: 'QCC RGPS Platform',
    subtitle: 'Enterprise AI Service Mesh',
    link: 'https://github.com/jdgg777/core',
    image: '/images/projects/qcc-platform.jpg',
    date: '2025-02-20',
    desc: 'Greenfield rebuild of multi-tenant AI service mesh built on DDD/hexagonal architecture. Portfolio management, project coordination, and autonomous agent orchestration layers.',
    tech: ['FastAPI', 'GraphQL', 'PostgreSQL', 'Redis', 'Ray'],
    featured: true,
  },
  {
    title: 'Personal Portfolio',
    subtitle: 'This Website',
    link: 'https://github.com/jdgg777/jdgg777-portfolio',
    image: '/images/projects/portfolio.jpg',
    date: '2026-04-10',
    desc: 'Modern personal portfolio built with Next.js 16, React 19, and TypeScript. Features dark/light theming, responsive design, and static export for GitHub Pages deployment.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'ESTRATIX V3',
    subtitle: 'Business Intelligence Platform',
    link: 'https://github.com/jdgg777/estratix_v3',
    image: '/images/projects/estratix.jpg',
    date: '2024-11-15',
    desc: 'Enterprise business intelligence and project management platform. Multi-tenant architecture with real-time dashboards and automated reporting pipelines.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
];

export default data;
