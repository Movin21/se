"use client"

import { motion } from "framer-motion"
import {
  SiMeta,
  SiGoogle,
  SiAmazon,
  SiLinkedin,
  SiOracle,
  SiCisco,
  SiIntel,
  SiSamsung,
  SiAdobe,
  SiNvidia,
  SiApple,
  SiDell,
  SiHp,
  SiLenovo,
  SiRedhat,
  SiCanonical,
  SiSiemens,
  SiSony,
  SiToshiba,
  SiSap,
} from "react-icons/si"

const RibbonLogos = () => {
  return (
    <section className="w-full py-8 md:py-16 lg:py-20 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mb-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Industry Visit Partners
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            We collaborate with leading tech companies to provide our students with valuable industry exposure and
            networking opportunities
          </p>
        </div>
      </div>

      <div className="flex translate-y-[20%] rotate-[3deg] scale-110 overflow-hidden border-y border-primary/20 bg-muted/50">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex -translate-y-[20%] -rotate-[3deg] scale-110 overflow-hidden border-y border-primary/20 bg-muted/50">
        <TranslateWrapper reverse={true}>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse={true}>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse={true}>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>

      <div className="container px-4 md:px-6 mt-16">
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  )
}

const TranslateWrapper = ({ children, reverse = false }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  )
}

const LogoItem = ({ Icon, name }) => {
  return (
    <div className="flex items-center justify-center gap-4 px-4 py-4 text-foreground transition-colors hover:bg-background md:py-6">
      <Icon className="text-3xl md:text-4xl" />
      <span className="whitespace-nowrap text-lg font-semibold md:text-xl">{name}</span>
    </div>
  )
}

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiMeta} name="Meta" />
    <LogoItem Icon={SiGoogle} name="Google" />
    <LogoItem Icon={SiAmazon} name="Amazon" />
    <LogoItem Icon={SiLinkedin} name="LinkedIn" />
    <LogoItem Icon={SiOracle} name="Oracle" />
    <LogoItem Icon={SiCisco} name="Cisco" />
    <LogoItem Icon={SiIntel} name="Intel" />
    <LogoItem Icon={SiSamsung} name="Samsung" />
    <LogoItem Icon={SiAdobe} name="Adobe" />
    <LogoItem Icon={SiNvidia} name="NVIDIA" />
  </>
)

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiApple} name="Apple" />
    <LogoItem Icon={SiDell} name="Dell" />
    <LogoItem Icon={SiHp} name="HP" />
    <LogoItem Icon={SiLenovo} name="Lenovo" />
    <LogoItem Icon={SiRedhat} name="Red Hat" />
    <LogoItem Icon={SiCanonical} name="Canonical" />
    <LogoItem Icon={SiSiemens} name="Siemens" />
    <LogoItem Icon={SiSony} name="Sony" />
    <LogoItem Icon={SiToshiba} name="Toshiba" />
    <LogoItem Icon={SiSap} name="SAP" />
  </>
)

export default RibbonLogos
