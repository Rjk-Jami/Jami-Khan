'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, FaNodeJs, FaFigma, FaStripe, FaGitAlt, FaHtml5, FaCss3Alt, FaBootstrap, FaPython 
} from 'react-icons/fa'
import { 
  SiNextdotjs, SiExpress, SiMongodb, SiMongoose, SiMysql, SiFirebase, 
  SiJavascript, SiTypescript, SiTailwindcss, SiRedux, SiVercel, SiNetlify,
  SiMaterialui, SiVscode, SiPostman, SiDocker
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend Development',
    color: 'from-blue-500 to-purple-600',
    skills: [
      { name: 'React.js', icon: FaReact, level: 95 },
      { name: 'Next.js', icon: SiNextdotjs, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'HTML5', icon: FaHtml5, level: 98 },
      { name: 'CSS3', icon: FaCss3Alt, level: 95 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 },
      { name: 'Bootstrap', icon: FaBootstrap, level: 88 },
      { name: 'Material UI', icon: SiMaterialui, level: 85 },
      { name: 'Redux', icon: SiRedux, level: 88 },
    ]
  },
  {
    title: 'Backend Development',
    color: 'from-green-500 to-teal-600',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 90 },
      { name: 'Express.js', icon: SiExpress, level: 88 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'Mongoose', icon: SiMongoose, level: 85 },
      { name: 'MySQL', icon: SiMysql, level: 75 },
      { name: 'Firebase', icon: SiFirebase, level: 80 },
      { name: 'Stripe', icon: FaStripe, level: 78 },
    ]
  },
  {
    title: 'Tools & Technologies',
    color: 'from-orange-500 to-red-600',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 90 },
      { name: 'VS Code', icon: SiVscode, level: 95 },
      { name: 'Figma', icon: FaFigma, level: 80 },
      { name: 'Vercel', icon: SiVercel, level: 88 },
      { name: 'Netlify', icon: SiNetlify, level: 85 },
      { name: 'Postman', icon: SiPostman, level: 85 },
      { name: 'Docker', icon: SiDocker, level: 70 },
      { name: 'Python', icon: FaPython, level: 75 },
    ]
  }
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="glass rounded-xl p-6 text-center group cursor-pointer card-hover"
                  >
                    <div className="relative mb-4">
                      <skill.icon className="text-4xl mx-auto text-gray-400 group-hover:text-accent transition-colors duration-300" />
                      
                      {/* Skill level indicator */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                            }}
                            className="h-full bg-gradient-to-r from-accent to-primary-500 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </h4>
                    
                    <div className="text-xs text-gray-500 mt-1">
                      {skill.level}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              What I Bring to the Table
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-accent text-lg font-semibold">Frontend Excellence</div>
                <p className="text-gray-400 text-sm">
                  Creating responsive, interactive, and accessible user interfaces with modern frameworks
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-accent text-lg font-semibold">Backend Proficiency</div>
                <p className="text-gray-400 text-sm">
                  Building scalable APIs, databases, and server-side applications with security in mind
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-accent text-lg font-semibold">Full Stack Integration</div>
                <p className="text-gray-400 text-sm">
                  Seamlessly connecting frontend and backend to deliver complete web solutions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}