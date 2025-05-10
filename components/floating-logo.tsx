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
      className="bg-transparent"
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
        className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px] bg-transparent"
      >
        <div className="relative z-0 grid h-full w-full place-content-center bg-transparent">
          <Image
            src="/images/logo.png"
            width={300}
            height={300}
            alt="SLIIT Software Engineering Student Community Logo"
            className="object-contain transform rotate-y-[-20deg] rotate-x-[10deg] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
            priority
            unoptimized
            style={{
              filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2))",
            }}
          />

          <div className="absolute -bottom-72 left-[50%] h-96 w-96 md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] -translate-x-[50%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        </div>
      </motion.div>
    </div>
  )
}
