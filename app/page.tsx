"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import IndustryPartners from "@/components/industry-partners"
import HeroLogo from "@/components/hero-logo"
import SocialLinks from "@/components/social-links"
import { WatermarkWrapper } from "@/components/watermark"
import Footer from "@/components/footer"

/**
 * Home Page Component
 *
 * The main landing page of the website
 */
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
              <SocialLinks variant="with-background" />
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
              <HeroLogo />
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
            <VisionCard />
            <MissionCard />
          </div>
        </div>
      </section>

      {/* Industry Visit Partners Section */}
      <section id="partners">
        <IndustryPartners />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

/**
 * VisionCard Component
 *
 * Displays the vision statement in a card
 */
const VisionCard = () => (
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
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold">Our Vision</h3>
        <p className="text-muted-foreground">
          To be the leading software engineering student community that empowers students to become innovative, ethical,
          and industry-ready professionals who contribute to the advancement of technology and society.
        </p>
      </div>
    </CardContent>
  </Card>
)

/**
 * MissionCard Component
 *
 * Displays the mission statement in a card
 */
const MissionCard = () => (
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
              aria-hidden="true"
            >
              <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
              <path d="M12 13v8" />
              <path d="M5 13v6a2 2 0 0 0 2 2h8" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold">Our Mission</h3>
        <p className="text-muted-foreground">
          To foster a collaborative learning environment that enhances technical skills, promotes knowledge sharing,
          encourages research and innovation, and builds a strong network of software engineering professionals through
          workshops, hackathons, industry partnerships, and community projects.
        </p>
      </div>
    </CardContent>
  </Card>
)
