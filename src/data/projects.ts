/**
 * Sample project data for the portfolio
 */

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  icon: string
  status: 'active' | 'completed' | 'in-progress'
  link?: string
  image?: string
}

export const projectsData: Project[] = [
  {
    id: 'tradingai',
    title: 'FinanceMasterAgent',
    description: 'AI-powered chat-first trading and finance assistant with market insights and recommendations.',
    tags: ['AI', 'Finance', 'Python', 'React'],
    icon: 'TrendingUp',
    status: 'in-progress',
    link: '#tradingai',
  },
  {
    id: 'community-wallet',
    title: 'Community Wallet',
    description: 'Shared financial infrastructure for communities with peer-to-peer transactions and treasury management.',
    tags: ['Finance', 'Web3', 'React', 'Community'],
    icon: 'Wallet',
    status: 'in-progress',
    link: '#wallet',
  },
  {
    id: 'smart-agents',
    title: 'Agentic Decisions Lab',
    description: 'Platform for building and testing autonomous AI agents with sophisticated decision-making frameworks.',
    tags: ['AI', 'Agents', 'Python', 'LLM'],
    icon: 'Brain',
    status: 'active',
    link: '#agents',
  },
  {
    id: 'lattice-os',
    title: 'Lattice Journey',
    description: 'Portfolio website with interconnected lattice design showcasing projects and accomplishments.',
    tags: ['Portfolio', 'React', 'Design', 'Web'],
    icon: 'Grid',
    status: 'completed',
    link: '#lattice',
  },
  {
    id: 'ml-pipeline',
    title: 'ML Data Pipeline',
    description: 'Scalable machine learning pipeline for processing and training large datasets efficiently.',
    tags: ['ML', 'Python', 'Data', 'Infrastructure'],
    icon: 'Database',
    status: 'completed',
    link: '#ml',
  },
  {
    id: 'realtime-api',
    title: 'Real-time API Gateway',
    description: 'High-performance API gateway with WebSocket support for real-time data streaming.',
    tags: ['Backend', 'Node.js', 'WebSocket', 'API'],
    icon: 'Zap',
    status: 'active',
    link: '#gateway',
  },
]

export const categories = [
  { id: 'all', label: 'All Projects', count: projectsData.length },
  { id: 'ai', label: 'AI & Agents', count: projectsData.filter(p => p.tags.includes('AI')).length },
  { id: 'web', label: 'Web & Frontend', count: projectsData.filter(p => p.tags.includes('React')).length },
  { id: 'backend', label: 'Backend', count: projectsData.filter(p => p.tags.includes('Python') || p.tags.includes('Backend')).length },
  { id: 'finance', label: 'Finance', count: projectsData.filter(p => p.tags.includes('Finance')).length },
]
