'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { FaDownload, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa'

const stats = [
  { icon: FaCode, label: 'Projects Completed', value: '50+' },
  { icon: FaLaptopCode, label: 'Technologies Mastered', value: '20+' },
  { icon: FaServer, label: 'Years Experience', value: '3+' },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Raihan-Jami-Khan-Resume.pdf'
    link.click()
  }

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
  }

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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Hello! I'm <span className="gradient-text">Raihan Jami Khan</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  A passionate <strong className="text-accent">Full Stack Developer</strong> with expertise in the MERN stack. 
                  I specialize in building scalable, responsive, and user-friendly web applications that deliver exceptional user experiences.
                </p>
                
                <p>
                  Proficient in <strong className="text-accent">React.js, Next.js, Node.js, Express.js, and MongoDB</strong>, 
                  with a strong foundation in modern JavaScript, TypeScript, and cloud technologies. 
                  I'm passionate about clean code, performance optimization, and staying up-to-date with the latest industry trends.
                </p>
                
                <p>
                  Currently pursuing my <strong className="text-accent">Bachelor's degree in Computer Science and Engineering</strong> 
                  from Daffodil International University, Bangladesh, while continuously expanding my skill set through 
                  hands-on projects and professional development.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center glass rounded-lg p-4"
                >
                  <stat.icon className="text-3xl text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <FaDownload />
                <span>Get Resume</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToSkills}
                className="btn-outline"
              >
                My Skills
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto lg:mx-0 w-96 h-96">
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-accent to-primary-500 rounded-full opacity-20 blur-xl"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border-2 border-accent/20 rounded-full"
              />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-accent/30 shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="About Raihan Jami Khan"
                  fill
                  className="object-cover object-center"
                  quality={90}
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <FaCode className="text-2xl text-accent" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <FaLaptopCode className="text-2xl text-primary-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}