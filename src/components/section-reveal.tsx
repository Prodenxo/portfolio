'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function SectionReveal ({
  children,
  delay = 0,
  className,
  ...props
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
