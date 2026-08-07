'use client'

import { motion, type Variants } from 'framer-motion'
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles
} from 'lucide-react'
import AnimatedBackground from '@/components/animated-background'
import ProfilePhotos from '@/components/profile-photos'
import SectionReveal from '@/components/section-reveal'
import StackPills from '@/components/stack-pills'
import {
  education,
  experience,
  highlights,
  profile,
  projects
} from '@/data/profile'
import { cn } from '@/lib/utils'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 }
}

const staggerList = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
}

const staggerItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' as const, stiffness: 280, damping: 24 }
  }
}

function GlassCard ({
  className,
  children,
  hover = false,
  id
}: {
  className?: string
  children: React.ReactNode
  hover?: boolean
  id?: string
}) {
  const Component = hover ? motion.div : 'div'

  return (
    <Component
      id={id}
      {...(hover
        ? {
            whileHover: {
              y: -4,
              scale: 1.01,
              transition: { type: 'spring', stiffness: 400, damping: 22 }
            }
          }
        : {})}
      className={cn(
        'rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.25)] backdrop-blur-xl transition-colors duration-300',
        hover && 'hover:border-white/20 hover:bg-white/[0.07]',
        className
      )}
    >
      {children}
    </Component>
  )
}

export default function PortfolioPage () {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div id="topo" className="relative min-h-screen overflow-x-hidden bg-[#050816] text-zinc-100">
      <AnimatedBackground />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-4 md:pb-20">
        <section>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="relative overflow-hidden">
              <motion.div
                className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div className="order-1 space-y-0 md:col-start-1 md:row-start-1">
                  {profile.available && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"
                    >
                      <motion.span
                        className="h-2 w-2 rounded-full bg-emerald-400"
                        animate={{ scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      Disponível para oportunidades
                    </motion.div>
                  )}
                  <motion.p
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300"
                  >
                    Portfolio
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl"
                  >
                    <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                      {profile.name}
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-4 text-xl text-violet-300 md:text-2xl"
                  >
                    {profile.role}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="order-2 flex shrink-0 justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:justify-end md:self-center"
                >
                  <ProfilePhotos />
                </motion.div>

                <div className="order-3 md:col-start-1 md:row-start-2">
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="max-w-2xl text-base leading-7 text-zinc-400 md:text-lg"
                  >
                    {profile.tagline}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-400"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {profile.location}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="mt-8 flex flex-wrap gap-3"
                  >
                {[
                  {
                    href: profile.github,
                    label: 'GitHub',
                    icon: Code2,
                    external: true,
                    className: 'bg-white text-zinc-900 hover:scale-[1.04] hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)]'
                  },
                  {
                    href: profile.linkedin,
                    label: 'LinkedIn',
                    icon: Link2,
                    external: true,
                    className: 'border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:scale-[1.04]'
                  },
                  {
                    href: `mailto:${profile.email}`,
                    label: 'Email',
                    icon: Mail,
                    external: false,
                    className: 'border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:scale-[1.04]'
                  },
                  {
                    href: `https://wa.me/${profile.whatsapp}`,
                    label: 'WhatsApp',
                    icon: MessageCircle,
                    external: true,
                    className: 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/20 hover:scale-[1.04]'
                  }
                ].map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.06, duration: 0.4 }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className={cn(
                        'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition duration-300',
                        link.className
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </motion.a>
                  )
                })}
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              >
                <GlassCard hover>
                  <motion.p
                    className="text-3xl font-semibold text-white"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {item.value}
                  </motion.p>
                  <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
                </GlassCard>
              </motion.div>
            ))}
        </section>

        <SectionReveal className="mt-8">
          <GlassCard>
            <div className="mb-5 flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="h-5 w-5 text-violet-400" />
              </motion.div>
              <h2 className="text-lg font-medium text-white">Stack</h2>
            </div>
            <StackPills />
          </GlassCard>
        </SectionReveal>

        <SectionReveal className="mt-16" delay={0.05}>
          <div id="projetos" className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Portfolio</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Projetos em destaque</h2>
            </div>
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 4 }}
              className="hidden items-center gap-2 text-sm text-zinc-400 transition hover:text-white md:inline-flex"
            >
              Ver todos no GitHub
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group block"
              >
                <GlassCard className="h-full group-hover:border-cyan-400/30 group-hover:bg-white/[0.07] group-hover:shadow-[0_12px_40px_rgba(34,211,238,0.12)]">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium text-white transition group-hover:text-cyan-100">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                    <motion.div
                      className="shrink-0 text-zinc-500 group-hover:text-cyan-300"
                      whileHover={{ rotate: 45, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="rounded-md bg-violet-500/10 px-2.5 py-1 text-xs text-violet-200 transition hover:bg-violet-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.a>
            ))}
          </div>

          {otherProjects.length > 0 && (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-white">{project.name}</h3>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
                </motion.a>
              ))}
            </div>
          )}
        </SectionReveal>

        <SectionReveal className="mt-16 grid gap-6 lg:grid-cols-2" delay={0.05}>
          <GlassCard>
            <div className="mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-cyan-400" />
              <h2 className="text-lg font-medium text-white">Experiência</h2>
            </div>
            <motion.div
              id="experiencia"
              variants={staggerList}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="space-y-6"
            >
              {experience.map((item) => (
                <motion.div
                  key={`${item.role}-${item.period}`}
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  className="border-l border-white/10 pl-4 transition hover:border-cyan-400/40"
                >
                  <p className="text-sm text-violet-300">{item.period}</p>
                  <h3 className="mt-1 font-medium text-white">{item.role}</h3>
                  <p className="text-sm text-zinc-400">
                    {item.company} · {item.type}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </GlassCard>

          <GlassCard>
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-violet-400" />
              <h2 className="text-lg font-medium text-white">Formação</h2>
            </div>
            <motion.div
              variants={staggerList}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="space-y-6"
            >
              {education.map((item) => (
                <motion.div
                  key={item.school}
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  className="transition"
                >
                  <p className="text-sm text-cyan-300">{item.period}</p>
                  <h3 className="mt-1 font-medium text-white">{item.degree}</h3>
                  <p className="text-sm text-zinc-400">{item.school}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-zinc-400"
            >
              Desenvolvedor Full Stack na CF Contabilidade. Foco em produtos reais em produção,
              automação Python, apps web/mobile, APIs e infraestrutura Docker.
            </motion.div>
          </GlassCard>
        </SectionReveal>

        <SectionReveal className="mt-16" delay={0.08}>
          <GlassCard id="contato" className="relative overflow-hidden text-center">
            <motion.div
              className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="pointer-events-none absolute -right-16 bottom-0 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl"
              animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Contato</p>
            <motion.h2
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="mt-3 text-3xl font-semibold text-white"
            >
              Vamos construir algo juntos?
            </motion.h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Aberto a oportunidades, freelas e conversas sobre desenvolvimento, automação e produto.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative mt-8 flex flex-wrap justify-center gap-3"
            >
              {[
                {
                  href: `https://wa.me/${profile.whatsapp}`,
                  label: `WhatsApp ${profile.whatsappDisplay}`,
                  icon: MessageCircle,
                  className: 'bg-emerald-500 hover:bg-emerald-400 hover:shadow-[0_8px_28px_rgba(16,185,129,0.35)]'
                },
                {
                  href: `mailto:${profile.email}`,
                  label: profile.email,
                  icon: Mail,
                  className: 'bg-violet-500 hover:bg-violet-400 hover:shadow-[0_8px_28px_rgba(139,92,246,0.35)]'
                },
                {
                  href: profile.linkedin,
                  label: 'LinkedIn',
                  icon: Link2,
                  className: 'border border-white/15 hover:bg-white/10'
                }
              ].map((btn) => {
                const Icon = btn.icon
                return (
                  <motion.a
                    key={btn.label}
                    href={btn.href}
                    target={btn.label.includes('@') ? undefined : '_blank'}
                    rel={btn.label.includes('@') ? undefined : 'noreferrer'}
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition duration-300',
                      btn.className
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {btn.label}
                  </motion.a>
                )
              })}
            </motion.div>
          </GlassCard>
        </SectionReveal>
      </main>
    </div>
  )
}
