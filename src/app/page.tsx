'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003459] text-[#D4F1F4]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Safal Noushad</h1>
        <h2 className="text-3xl mb-6 opacity-80">Software Engineer</h2>
        <p className="text-xl mb-8 opacity-70 max-w-md mx-auto">
          Crafting elegant solutions to complex problems
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <a
            href="/about"
            className="inline-block bg-[#D4F1F4] text-[#003459] px-6 py-3 rounded-full text-lg font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D4F1F4] focus:ring-opacity-50"
          >
            Explore My Work
          </a>
        </motion.div>
      </motion.div>
      {mounted && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 text-[#D4F1F4]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-current"
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}