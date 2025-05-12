"use client"

import Image from "next/image"

/**
 * HeroLogo Component
 *
 * Displays the SLIIT Software Engineering Student Community logo
 * in the hero section with responsive sizing and a subtle shadow effect.
 */
export const HeroLogo = () => {
  return (
    <div className="relative">
      <div className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px]">
        <div className="relative z-0 grid h-full w-full place-content-center">
          <Image
            src="/images/logo.png"
            width={300}
            height={300}
            alt="SLIIT Software Engineering Student Community Logo"
            className="object-contain md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
            priority
            unoptimized
            style={{
              filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2))",
            }}
          />

          {/* Background glow effect */}
          <div
            className="absolute -bottom-72 left-[50%] h-96 w-96 md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] -translate-x-[50%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroLogo
