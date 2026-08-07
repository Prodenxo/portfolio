'use client'

import { motion, type Variants } from 'framer-motion'
import { stack } from '@/data/profile'
import { cn } from '@/lib/utils'

type StackAccent = {
  border: string
  bg: string
  text: string
  glow: string
  hoverBg: string
}

const accentByTech: Record<string, StackAccent> = {
  Python: {
    border: 'border-emerald-400/30',
    bg: 'bg-emerald-400/10',
    text: 'text-emerald-200',
    glow: 'shadow-[0_0_24px_rgba(52,211,153,0.35)]',
    hoverBg: 'hover:bg-emerald-400/20'
  },
  n8n: {
    border: 'border-orange-400/30',
    bg: 'bg-orange-400/10',
    text: 'text-orange-200',
    glow: 'shadow-[0_0_24px_rgba(251,146,60,0.35)]',
    hoverBg: 'hover:bg-orange-400/20'
  },
  TypeScript: {
    border: 'border-blue-400/30',
    bg: 'bg-blue-400/10',
    text: 'text-blue-200',
    glow: 'shadow-[0_0_24px_rgba(96,165,250,0.35)]',
    hoverBg: 'hover:bg-blue-400/20'
  },
  JavaScript: {
    border: 'border-yellow-400/30',
    bg: 'bg-yellow-400/10',
    text: 'text-yellow-200',
    glow: 'shadow-[0_0_24px_rgba(250,204,21,0.3)]',
    hoverBg: 'hover:bg-yellow-400/20'
  },
  React: {
    border: 'border-cyan-400/30',
    bg: 'bg-cyan-400/10',
    text: 'text-cyan-200',
    glow: 'shadow-[0_0_24px_rgba(34,211,238,0.35)]',
    hoverBg: 'hover:bg-cyan-400/20'
  },
  'Next.js': {
    border: 'border-zinc-300/30',
    bg: 'bg-white/10',
    text: 'text-zinc-100',
    glow: 'shadow-[0_0_24px_rgba(255,255,255,0.2)]',
    hoverBg: 'hover:bg-white/15'
  },
  'React Native': {
    border: 'border-sky-400/30',
    bg: 'bg-sky-400/10',
    text: 'text-sky-200',
    glow: 'shadow-[0_0_24px_rgba(56,189,248,0.35)]',
    hoverBg: 'hover:bg-sky-400/20'
  },
  'Node.js': {
    border: 'border-lime-400/30',
    bg: 'bg-lime-400/10',
    text: 'text-lime-200',
    glow: 'shadow-[0_0_24px_rgba(163,230,53,0.3)]',
    hoverBg: 'hover:bg-lime-400/20'
  },
  Express: {
    border: 'border-stone-300/30',
    bg: 'bg-stone-400/10',
    text: 'text-stone-200',
    glow: 'shadow-[0_0_24px_rgba(168,162,158,0.25)]',
    hoverBg: 'hover:bg-stone-400/20'
  },
  PostgreSQL: {
    border: 'border-indigo-400/30',
    bg: 'bg-indigo-400/10',
    text: 'text-indigo-200',
    glow: 'shadow-[0_0_24px_rgba(129,140,248,0.35)]',
    hoverBg: 'hover:bg-indigo-400/20'
  },
  MySQL: {
    border: 'border-amber-400/30',
    bg: 'bg-amber-400/10',
    text: 'text-amber-200',
    glow: 'shadow-[0_0_24px_rgba(251,191,36,0.3)]',
    hoverBg: 'hover:bg-amber-400/20'
  },
  Redis: {
    border: 'border-red-400/30',
    bg: 'bg-red-400/10',
    text: 'text-red-200',
    glow: 'shadow-[0_0_24px_rgba(248,113,113,0.35)]',
    hoverBg: 'hover:bg-red-400/20'
  },
  Docker: {
    border: 'border-violet-400/30',
    bg: 'bg-violet-400/10',
    text: 'text-violet-200',
    glow: 'shadow-[0_0_24px_rgba(167,139,250,0.35)]',
    hoverBg: 'hover:bg-violet-400/20'
  },
  Git: {
    border: 'border-rose-400/30',
    bg: 'bg-rose-400/10',
    text: 'text-rose-200',
    glow: 'shadow-[0_0_24px_rgba(251,113,133,0.3)]',
    hoverBg: 'hover:bg-rose-400/20'
  }
}

const defaultAccent: StackAccent = {
  border: 'border-white/15',
  bg: 'bg-white/5',
  text: 'text-zinc-300',
  glow: 'shadow-[0_0_20px_rgba(255,255,255,0.12)]',
  hoverBg: 'hover:bg-white/10'
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 }
  }
}

const pill: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 320, damping: 22 }
  }
}

export default function StackPills () {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      className="flex flex-wrap gap-2.5"
    >
      {stack.map((tech) => {
        const accent = accentByTech[tech] ?? defaultAccent

        return (
          <motion.span
            key={tech}
            variants={pill}
            whileHover={{
              y: -6,
              scale: 1.06,
              rotate: -1.5,
              transition: { type: 'spring', stiffness: 400, damping: 18 }
            }}
            whileTap={{ scale: 0.96 }}
            className={cn(
              'group relative cursor-default overflow-hidden rounded-full border px-3.5 py-2 text-sm font-medium transition-colors duration-300',
              accent.border,
              accent.bg,
              accent.text,
              accent.hoverBg,
              'hover:border-white/30'
            )}
          >
            <motion.span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
              initial={false}
              whileHover={{ translateX: '220%' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            />
            <span className="relative z-10">{tech}</span>
            <motion.span
              className={cn(
                'pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                accent.glow
              )}
              aria-hidden
            />
          </motion.span>
        )
      })}
    </motion.div>
  )
}
