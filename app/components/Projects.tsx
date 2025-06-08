'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    name: 'Nimble Wear',
    category: 'E-commerce',
    description: 'A modern e-commerce platform with advanced features including secure payments, user accounts, product filtering, comparison, and order tracking.',
    fullDescription: 'Nimble Wear is a comprehensive e-commerce solution built with Next.js and modern web technologies. Features include secure Stripe payments, personalized user accounts, smooth navigation, advanced filtering, product comparison, order tracking, and wishlist functionality. The platform is optimized for performance and provides an exceptional shopping experience.',
    image: 'https://res.cloudinary.com/dpphpbkkz/image/upload/v1739050865/nimble_wear_qzzztk.png',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    liveUrl: 'https://nimble-wear.vercel.app',
    githubUrl: 'https://github.com/Rjk-Jami/Nimble-Clothing-Next.js',
    featured: true,
  },
  {
    id: 2,
    name: 'Go Lego',
    category: 'E-commerce',
    description: 'A LEGO set online shop with user authentication, toy management, and private routes for secure access.',
    fullDescription: 'Go Lego is a specialized e-commerce platform for LEGO enthusiasts. Users can browse, purchase, and sell LEGO sets. The platform features user authentication, private routes, toy management system, and responsive design. Built with React and modern web technologies for optimal user experience.',
    image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg',
    technologies: ['React.js', 'React Router', 'Express.js', 'MongoDB', 'Firebase Auth', 'Tailwind CSS'],
    liveUrl: 'https://go-logo-cc190.web.app/',
    githubUrl: 'https://github.com/Rjk-Jami/go-lego-client',
    featured: false,
  },
  {
    id: 3,
    name: 'Tasnia TWS',
    category: 'Education',
    description: 'A yoga and meditation school platform with student management, instructor promotion, and course enrollment features.',
    fullDescription: 'Tasnia Yoga and Meditation School is a comprehensive educational platform promoting physical, mental, and spiritual well-being. Features include student registration, instructor management, course enrollment, admin dashboard, and responsive design. Built with React and modern web technologies.',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
    technologies: ['React.js', 'React Router', 'Express.js', 'MongoDB', 'Tailwind CSS', 'DaisyUI'],
    liveUrl: 'https://tasnia-yms.web.app/',
    githubUrl: 'https://github.com/Rjk-Jami/tasnia-TWS-client',
    featured: false,
  },
  {
    id: 4,
    name: 'EatsExtra',
    category: 'Food & Recipe',
    description: 'A recipe platform showcasing chef profiles and popular recipes with user authentication and favorites system.',
    fullDescription: 'EatsExtra is a culinary platform that connects food enthusiasts with professional chefs and their signature recipes. Users can explore chef profiles, discover new recipes, save favorites, and access detailed cooking instructions. The platform features responsive design and secure user authentication.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Tailwind CSS'],
    liveUrl: 'https://eats-extra-rjk.web.app',
    githubUrl: 'https://github.com/Rjk-Jami/eats-extra-client',
    featured: false,
  },
]

const categories = ['All', 'E-commerce', 'Education', 'Food & Recipe']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-white shadow-lg'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass rounded-2xl overflow-hidden group cursor-pointer ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent" />
                  
                  {/* Project Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent/90 text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-accent transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="text-xl" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-accent transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="text-xl" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-accent text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-accent hover:text-white transition-colors duration-300"
                    >
                      <FaEye />
                      <span>View Details</span>
                    </motion.button>
                    
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-accent transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-accent transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaCode />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject)
                  if (!project) return null
                  
                  return (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white text-2xl"
                        >
                          ×
                        </button>
                      </div>
                      
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                          quality={90}
                        />
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {project.fullDescription}
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary flex items-center space-x-2"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-outline flex items-center space-x-2"
                        >
                          <FaGithub />
                          <span>Source Code</span>
                        </motion.a>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}