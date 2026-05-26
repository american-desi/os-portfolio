import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Grid3x3, TrendingUp, Wallet, Brain } from 'lucide-react'
import { projectsData, categories } from './data/projects'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-8 h-8" />,
    Wallet: <Wallet className="w-8 h-8" />,
    Brain: <Brain className="w-8 h-8" />,
    Grid: <Grid3x3 className="w-8 h-8" />,
    Database: <TrendingUp className="w-8 h-8" />,
    Zap: <TrendingUp className="w-8 h-8" />,
  }

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => {
        if (selectedCategory === 'ai') return p.tags.includes('AI')
        if (selectedCategory === 'web') return p.tags.includes('React')
        if (selectedCategory === 'backend') return p.tags.includes('Python') || p.tags.includes('Backend')
        if (selectedCategory === 'finance') return p.tags.includes('Finance')
        return true
      })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Grid3x3 className="text-blue-400" size={28} />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Lattice Journey
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4 space-y-2"
            >
              <a href="#projects" className="block py-2 hover:text-blue-400 transition">Projects</a>
              <a href="#about" className="block py-2 hover:text-blue-400 transition">About</a>
              <a href="#contact" className="block py-2 hover:text-blue-400 transition">Contact</a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Lattice Journey
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Building interconnected systems through AI, finance, and community-driven solutions
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
          >
            Explore Projects
          </motion.a>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === cat.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat.label} <span className="ml-2 text-sm opacity-75">({cat.count})</span>
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/50 transition group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-cyan-400 transition">
                  {iconMap[project.icon] || <Grid3x3 className="w-8 h-8" />}
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold ${
                    project.status === 'active' ? 'text-green-400' :
                    project.status === 'in-progress' ? 'text-yellow-400' :
                    'text-blue-400'
                  }`}>
                    {project.status.replace('-', ' ')}
                  </span>
                  {project.link && (
                    <a href={project.link} className="text-blue-400 hover:text-cyan-400 transition">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Welcome to Lattice Journey. This portfolio showcases interconnected projects spanning AI agents,
            financial technology, community infrastructure, and innovative web solutions. Each project represents
            a node in a larger lattice of technological advancement, creating a network of capabilities that solve
            real-world problems. From autonomous decision-making systems to community-driven financial platforms,
            these initiatives demonstrate the power of building systems that are greater than the sum of their parts.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Lattice Journey</h3>
              <p className="text-gray-400 text-sm">Building interconnected systems for the future.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition block">Projects</a>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition block">About</a>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition block">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Lattice Journey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
