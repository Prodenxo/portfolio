'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { profile } from '@/data/profile'

interface ProfilePhotoProps {
  src: string
  alt: string
  objectPosition?: string
  priority?: boolean
  delay?: number
}

function ProfilePhoto ({
  src,
  alt,
  objectPosition = 'center 20%',
  priority = false,
  delay = 0
}: ProfilePhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 shadow-[0_12px_32px_rgb(0,0,0,0.4)]"
    >
      <Image
        src={src}
        alt={alt}
        width={210}
        height={280}
        priority={priority}
        className="block h-[190px] w-[142px] object-cover transition duration-500 group-hover:scale-[1.04] sm:h-[220px] sm:w-[165px] md:h-[260px] md:w-[195px] lg:h-[300px] lg:w-[225px]"
        style={{ objectPosition }}
      />
    </motion.div>
  )
}

export default function ProfilePhotos () {
  return (
    <div className="flex shrink-0 items-center justify-center gap-3 sm:gap-4">
      <ProfilePhoto
        src={profile.photos.portrait}
        alt={`${profile.name} — retrato profissional`}
        objectPosition="center 18%"
        priority
        delay={0.1}
      />
      <ProfilePhoto
        src={profile.photos.event}
        alt={`${profile.name} — evento de tecnologia`}
        objectPosition="center 22%"
        delay={0.18}
      />
    </div>
  )
}
