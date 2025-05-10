"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronDown } from "lucide-react"
import BlogPostCarousel from "@/components/blog-post-carousel"
import RibbonLogos from "@/components/podcast-section"
import { motion } from "framer-motion"
import { FloatingLogo } from "@/components/floating-logo"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    // Process embeds when script loads
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Background Text Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <WatermarkWrapper />
        </div>

        {/* Content */}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="flex flex-col justify-center items-center lg:items-start space-y-6 order-2 lg:order-1 mt-8 lg:mt-0">
              <div className="space-y-4 text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  SLIIT Software Engineering Student Community
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-base md:text-lg">
                  A vibrant community of software engineering students dedicated to fostering innovation, collaboration,
                  and excellence in the field of software engineering at SLIIT.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.instagram.com/sliit.sesc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/sesc-sliit/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/sliitsesc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="mailto:sliitsecommunity@gmail.com"
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
              <FloatingLogo />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary/50" />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Our Vision & Mission
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Guiding principles that drive our community forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="p-2 rounded-full bg-primary/10">
                    <div className="rounded-full p-4 bg-primary text-primary-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading software engineering student community that empowers students to become
                    innovative, ethical, and industry-ready professionals who contribute to the advancement of
                    technology and society.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-secondary/20">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="p-2 rounded-full bg-secondary/10">
                    <div className="rounded-full p-4 bg-secondary text-secondary-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                        <path d="M12 13v8" />
                        <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To foster a collaborative learning environment that enhances technical skills, promotes knowledge
                    sharing, encourages research and innovation, and builds a strong network of software engineering
                    professionals through workshops, hackathons, industry partnerships, and community projects.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Visit Partners Section */}
      <section id="partners">
        <RibbonLogos />
      </section>

      {/* What We Do Section (formerly Blog Section) */}
      <section id="what-we-do" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">What We Do</h2>
            <p className="max-w-[600px] text-muted-foreground text-sm md:text-base mb-6">
              We organize workshops, hackathons, tech talks, and community projects to help students develop their
              skills and build a strong network in the software engineering field.
            </p>
          </div>
          <div className="touch-pan-x overflow-x-auto">
            <BlogPostCarousel />
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline">
              View All Activities <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 md:py-16 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image src="/images/logo.png" alt="SLIIT SEC Logo" width={120} height={60} priority unoptimized />
              </div>
              <p className="text-sm text-muted-foreground">
                Welcome to SLIIT Software Engineering Student Community. We're a group of passionate students dedicated
                to the growth of software engineering knowledge and skills.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Useful Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#what-we-do" className="text-muted-foreground hover:text-primary">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Community</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Slack
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Become a Member
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-medium">Subscribe</h4>
              <p className="text-sm text-muted-foreground">Don't miss out on our latest news, events, and updates.</p>
              <form className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} SLIIT Software Engineering Student Community. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Terms
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="Software Engineering" />
      <Watermark text="Innovation" reverse={true} />
      <Watermark text="Collaboration" />
      <Watermark text="Excellence" reverse={true} />
      <Watermark text="Technology" />
      <Watermark text="Community" reverse={true} />
    </>
  )
}

const Watermark = ({ reverse, text }) => (
  <div className="flex select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-primary/5 dark:text-primary/10">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-primary/5 dark:text-primary/10">
        {text}
      </span>
    </TranslateWrapper>
  </div>
)

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 75, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="flex"
    >
      {children}
    </motion.div>
  )
}
