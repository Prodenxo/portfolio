'use client'

import { motion } from 'framer-motion'

const blobs = [
  {
    className: 'left-[-8rem] top-0 h-96 w-96 bg-cyan-500/20',
    animate: { x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] },
    duration: 18
  },
  {
    className: 'right-0 top-40 h-[28rem] w-[28rem] bg-violet-600/20',
    animate: { x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.05, 1] },
    duration: 22
  },
  {
    className: 'bottom-0 left-1/3 h-80 w-80 bg-blue-500/10',
    animate: { x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.1, 1] },
    duration: 20
  }
]

export default function AnimatedBackground () {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((blob) => (
        <motion.div
          key={blob.className}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
        animate={{ opacity: [0.14, 0.22, 0.14] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
