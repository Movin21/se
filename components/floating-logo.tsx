"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export const FloatingLogo = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-20deg) rotateX(10deg)",
      }}
      className="rounded-[24px] bg-transparent"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-80 w-80 rounded-[24px] bg-transparent"
      >
        <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-transparent">
          <Image
            src="/images/logo.png"
            width={300}
            height={300}
            alt="SLIIT Software Engineering Student Community Logo"
            className="object-contain"
            priority
            unoptimized
          />

          <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl" />
        </div>
      </motion.div>
    </div>
  )
}
