'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-dark-300 to-dark-200"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-accent to-primary-500 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">RJ</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold gradient-text">Raihan Jami Khan</h2>
          <p className="text-gray-400">Full Stack Developer</p>
          
          <div className="flex justify-center">
            <div className="spinner"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}