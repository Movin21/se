"use client"

import { motion } from "framer-motion"
import { getPartnerLogo, getPartnerDisplayName, getAllPartners } from "@/utils/icons"
import type { TranslateWrapperProps } from "@/types"

/**
 * IndustryPartners Component
 *
 * Displays a section showcasing industry partners with animated logo ribbons
 */
const IndustryPartners = () => {
  return (
    <section className="w-full py-8 md:py-16 lg:py-20 bg-primary/5 overflow-hidden">
      <div className="container px-4 md:px-6 mb-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Industry Partners
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            We collaborate with leading tech companies to provide our students with valuable industry exposure and
            networking opportunities
          </p>
        </div>
      </div>

      <div className="flex translate-y-[20%] rotate-[3deg] scale-110 overflow-hidden border-y border-primary/20 bg-muted/50">
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
      </div>
      <div className="flex -translate-y-[20%] -rotate-[3deg] scale-110 overflow-hidden border-y border-primary/20 bg-muted/50">
        <TranslateWrapper reverse={true}>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper reverse={true}>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper reverse={true}>
          <LogoItems />
        </TranslateWrapper>
      </div>

      <div className="container px-4 md:px-6 mt-16">
        <div className="flex justify-center">
          <a
            href="mailto:sliitsecommunity@gmail.com"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  )
}

const TranslateWrapper = ({ children, reverse = false, duration = 50 }: TranslateWrapperProps) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  )
}

interface LogoItemProps {
  name: string
}

const LogoItem = ({ name }: LogoItemProps) => {
  const logoPath = getPartnerLogo(name)
  const displayName = getPartnerDisplayName(name)

  return (
    <div className="flex items-center justify-center gap-4 px-4 py-4 text-foreground transition-colors md:py-6">
      {logoPath && (
        <div className="relative h-12 w-32 flex items-center justify-center">
          {/* Use img tag instead of Next.js Image component for static export */}
          <img
            src={logoPath || "/placeholder.svg"}
            alt={`${displayName} logo`}
            className="h-full w-full object-contain"
          />
        </div>
      )}
    </div>
  )
}

const LogoItems = () => (
  <>
    {getAllPartners().map((company) => (
      <LogoItem key={company.name} name={company.name} />
    ))}
  </>
)

export default IndustryPartners
