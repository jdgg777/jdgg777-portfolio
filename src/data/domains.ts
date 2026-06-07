export interface Domain {
  id: string;
  title: string;
  description: string;
  tech: string[];
  projects: string[];
}

const domains: Domain[] = [
  {
    id: 'databases',
    title: 'Databases',
    description: 'Multi-tenant PostgreSQL with Row-Level Security, Redis caching, MongoDB for document storage. Schema design, query optimization, and data isolation patterns.',
    tech: ['PostgreSQL', 'Redis', 'MongoDB', 'SQL', 'RLS'],
    projects: ['QCC RGPS Platform', 'ESTRATIX V3'],
  },
  {
    id: 'graphql',
    title: 'GraphQL',
    description: 'Schema design with Strawberry + FastAPI, federation patterns, real-time subscriptions, and API layer architecture for multi-service systems.',
    tech: ['Strawberry', 'FastAPI', 'GraphQL', 'Apollo', 'Federation'],
    projects: ['QCC RGPS Platform'],
  },
  {
    id: 'hybrid-graph-rag',
    title: 'Hybrid Graph-RAG',
    description: 'Knowledge graph + vector retrieval + LLM pipeline orchestration. Combining structured graph queries with semantic search for context-rich AI responses.',
    tech: ['Neo4j', 'Pinecone', 'LangChain', 'Embeddings', 'RAG'],
    projects: ['QCC RGPS Platform'],
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent Systems',
    description: 'AI agent frameworks connecting multiple platforms. Memory systems, scheduled execution, tool use, and orchestration patterns for autonomous agents.',
    tech: ['Anthropic SDK', 'Python', 'Docker', 'Redis', 'Ray'],
    projects: ['NanoClaw', 'QCC RGPS Platform'],
  },
  {
    id: 'saas',
    title: 'SaaS Architecture',
    description: 'Multi-tenant isolation with PostgreSQL RLS, subscription billing patterns, API rate limiting, and DDD/hexagonal architecture for scalable platforms.',
    tech: ['FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes', 'Stripe'],
    projects: ['QCC RGPS Platform', 'ESTRATIX V3'],
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce & Logistics',
    description: 'International supply chain systems, payment integration, order management, and inventory optimization. 150+ container movements annually with 96% on-time delivery.',
    tech: ['SAP ERP', 'Python', 'SQL', 'Procurement', 'Demand Planning'],
    projects: ['Career-Ops Pipeline'],
  },
  {
    id: 'payments',
    title: 'Payments',
    description: 'Payment gateway integration, reconciliation systems, multi-currency handling, and procurement cost optimization achieving 12% savings.',
    tech: ['Stripe', 'Reconciliation', 'Multi-currency', 'SAP ERP'],
    projects: ['QCC RGPS Platform'],
  },
  {
    id: 'solutions',
    title: 'Solutions Architecture',
    description: 'End-to-end system design, API design, integration patterns, and cross-functional technical leadership bridging business requirements with implementation.',
    tech: ['System Design', 'API Design', 'DDD', 'Hexagonal', 'Microservices'],
    projects: ['QCC RGPS Platform', 'NanoClaw', 'ESTRATIX V3'],
  },
];

export default domains;
