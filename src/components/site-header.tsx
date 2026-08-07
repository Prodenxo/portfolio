'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  FolderKanban,
  Mail,
  Terminal
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const navItems = [
  { id: 'projetos', label: 'Projetos', icon: FolderKanban },
  { id: 'experiencia', label: 'Experiência', icon: Briefcase },
  { id: 'contato', label: 'Contato', icon: Mail }
]

export default function SiteHeader () {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      if (window.scrollY < 180) setActive('')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActive(visible.target.id)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.55]
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
        <div
          className={cn(
            'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition duration-300 md:px-5',
            scrolled
              ? 'border-white/15 bg-[#050816]/80 shadow-[0_8px_32px_rgb(0,0,0,0.35)] backdrop-blur-xl'
              : 'border-white/10 bg-white/[0.04] backdrop-blur-md'
          )}
        >
          <a
            href="#topo"
            className="group flex min-w-0 items-center gap-2.5 text-sm font-medium text-zinc-200"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
              <Terminal className="h-4 w-4 text-cyan-300" />
            </span>
            <span className="hidden truncate sm:inline">{profile.name}</span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = active === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    'relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition duration-300',
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/25 via-violet-500/25 to-cyan-500/25 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={cn('relative h-4 w-4', isActive ? 'text-cyan-300' : '')} />
                  <span className="relative">{item.label}</span>
                </a>
              )
            })}
          </nav>

          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_24px_rgba(16,185,129,0.25)] transition hover:scale-[1.02] md:inline-flex"
          >
            Falar comigo
          </a>
        </div>
      </header>

      <nav className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-[#050816]/90 p-1.5 shadow-[0_12px_40px_rgb(0,0,0,0.45)] backdrop-blur-xl md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'relative flex flex-col items-center gap-1 rounded-full px-4 py-2 text-[11px] font-medium transition',
                isActive ? 'text-white' : 'text-zinc-400'
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active-mobile"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-violet-500/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className={cn('relative h-4 w-4', isActive ? 'text-cyan-300' : '')} />
              <span className="relative">{item.label}</span>
            </a>
          )
        })}
      </nav>
    </>
  )
}
