export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
  domains?: string[];
}

const data: Project[] = [
  {
    title: 'QCC RGPS Platform',
    subtitle: 'Enterprise AI Service Mesh',
    link: 'https://github.com/jdgg777/core',
    image: '/images/projects/qcc-platform.jpg',
    date: '2025-02-20',
    desc: 'Greenfield rebuild of multi-tenant AI service mesh built on DDD/hexagonal architecture. Multi-tenant PostgreSQL with Row-Level Security, GraphQL API layer with Strawberry, and autonomous agent orchestration with Ray.',
    tech: ['FastAPI', 'GraphQL', 'PostgreSQL', 'Redis', 'Ray'],
    domains: ['databases', 'graphql', 'saas', 'solutions'],
    featured: true,
  },
  {
    title: 'NanoClaw',
    subtitle: 'Multi-Platform AI Agent Framework',
    link: 'https://github.com/jdgg777/nanoclaw',
    image: '/images/projects/nanoclaw.jpg',
    date: '2025-01-15',
    desc: 'Lightweight multi-platform AI agent framework connecting WhatsApp, Telegram, Slack, Discord, and Gmail. Features memory systems, scheduled job execution, and runs on Anthropic Agents SDK.',
    tech: ['Python', 'Anthropic SDK', 'Docker', 'Multi-platform APIs'],
    domains: ['multi-agent', 'solutions'],
    featured: true,
  },
  {
    title: 'Career-Ops Pipeline',
    subtitle: 'Automated Job Search Engine',
    link: 'https://github.com/jdgg777/core',
    image: '/images/projects/career-ops.jpg',
    date: '2026-04-10',
    desc: 'AI-powered career operations pipeline: multi-platform job ingestion (5 sources), semantic JD-CV matching with Resume-Matcher, automated cover letter generation, ATS validation, and continuous CV refinement loop across 4 career tracks.',
    tech: ['Python', 'JobSpy', 'RenderCV', 'FastAPI', 'Docker'],
    domains: ['solutions', 'ecommerce'],
  },
  {
    title: 'ESTRATIX V3',
    subtitle: 'Business Intelligence Platform',
    link: 'https://github.com/jdgg777/estratix_v3',
    image: '/images/projects/estratix.jpg',
    date: '2024-11-15',
    desc: 'Enterprise business intelligence and project management platform. Multi-tenant architecture with real-time dashboards and automated reporting pipelines.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    domains: ['databases', 'saas', 'solutions'],
  },
  {
    title: 'Personal Portfolio',
    subtitle: 'This Website',
    link: 'https://github.com/jdgg777/jdgg777-portfolio',
    image: '/images/projects/portfolio.jpg',
    date: '2026-04-10',
    desc: 'Modern portfolio built with Next.js 16, React 19, and TypeScript. Features dark/light theming, responsive design, and static export for GitHub Pages deployment.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    domains: ['solutions'],
  },
];

export default data;
