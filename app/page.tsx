"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import IndustryPartners from "@/components/industry-partners"
import HeroLogo from "@/components/hero-logo"
import SocialLinks from "@/components/social-links"
import { WatermarkWrapper } from "@/components/watermark"
import Footer from "@/components/footer"
import BoardMembers from "@/components/board-members"
import BlogCard from "@/components/blog-card"
import CollaboratedCommunities from "@/components/collaborated-communities"
import Gallery from "@/components/gallery/Gallery"
import whatWeDoData from "@/data/what-we-do.json"

// Add this component before the Home component
const CSRProjectContent = ({ project }: { project: any }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  // Truncate text for collapsed view
  const truncatedDescription =
    project.longDescription.length > 100 ? `${project.longDescription.substring(0, 100)}...` : project.longDescription

  return (
    <div>
      <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">In partnership with {project.partner}</p>

      <p className="mt-4">{project.description}</p>
      <div className="mt-4 space-y-4">
        <p>{isExpanded ? project.longDescription : truncatedDescription}</p>

        {project.longDescription.length > 100 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-primary/80 text-sm font-medium flex items-center"
          >
            {isExpanded ? "Read Less" : "Read More"}
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
              className={`ml-1 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        )}

        {isExpanded && (
          <div>
            <h4 className="font-medium">Impact:</h4>
            <ul className="mt-2 space-y-1 pl-5 text-sm list-disc">
              {project.impact.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

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

      {/* Board Members Section */}
      <BoardMembers initialYear="2024-2025" />

      {/* Industry Visit Partners Section */}
      <section id="partners">
        <IndustryPartners />
      </section>

      {/* Collaborated Communities Section */}
      <CollaboratedCommunities />

      {/* What We Do Section - Combined */}
      <section id="what-we-do" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">What We Do</h2>
          </div>

          {/* Upcoming Events Subsection */}
          <div className="mb-16">
            <div className="flex flex-col justify-between gap-2 md:flex-row mb-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tighter md:text-3xl text-primary">Upcoming Events</h3>
                <p className="mt-1 text-muted-foreground">Join us at our upcoming events and activities</p>
              </div>
            </div>

            {/* Instagram-style posts layout */}
            <div className="mt-6">
              {/* Mobile: Horizontal scroll */}
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory touch-pan-x overscroll-x-contain overscroll-y-none -mx-4 px-4">
                {whatWeDoData.upcomingEvents.map((event) => (
                  <a
                    key={event.id}
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[calc(100vw-4rem)] max-w-[320px] flex-none snap-center"
                  >
                    <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                      <div className="aspect-[3/4] w-full overflow-hidden bg-muted touch-none">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=600&width=600&query=${encodeURIComponent(
                              event.title,
                            )}`
                          }}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Desktop: Grid layout */}
              <div className="hidden md:grid grid-cols-3 gap-6 touch-none">
                {whatWeDoData.upcomingEvents.map((event) => (
                  <a key={event.id} href={event.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=600&width=600&query=${encodeURIComponent(
                              event.title,
                            )}`
                          }}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CSR Projects Subsection */}
          <div>
            <div className="flex flex-col justify-between gap-2 md:flex-row mb-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tighter md:text-3xl text-primary">
                  Corporate Social Responsibility
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Making a positive impact in our community through technology and innovation
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-8">
              {whatWeDoData.csrProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-full overflow-hidden rounded-xl border border-border bg-background shadow-sm mb-8"
                >
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    {/* Image section */}
                    <div className="md:w-2/5">
                      <div className="relative aspect-[3/4] w-full overflow-hidden touch-none">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="h-full w-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=600&width=600&query=${encodeURIComponent(
                              project.title,
                            )}`
                          }}
                        />
                        <div className="absolute bottom-2 right-2">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="flex flex-col justify-between p-4 md:w-3/5 md:p-6">
                      <CSRProjectContent project={project} />

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
                            Visit Project
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
                              className="ml-1 h-3 w-3"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Blog Card Section */}
      <section className="w-full py-12 md:py-24 bg-muted relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <BlogCard className="shadow-xl hover:shadow-2xl transition-all duration-300" />
        </div>
        {/* Add subtle background pattern */}
        <div
          className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,transparent,rgba(0,0,0,0.6),transparent)] pointer-events-none"
          aria-hidden="true"
        ></div>
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
          To cultivate an inclusive community — open to software-engineering students of all backgrounds and skill
          levels — where hands-on experience, mentorship, and ethical grounding prepare graduates to become innovative,
          industry-ready professionals who drive technological progress and deliver meaningful benefits to society.
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
          Provide a collaborative learning environment that sharpens technical skills, fuels knowledge sharing, and
          sparks research and innovation through monthly workshops, annual hackathons, ongoing community projects, and
          strategic industry partnerships, thereby building a diverse, well-connected network of future
          software-engineering professionals.
        </p>
      </div>
    </CardContent>
  </Card>
)
