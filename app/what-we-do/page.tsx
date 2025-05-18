"use client"

import { useEffect } from "react"
import Footer from "@/components/footer"
import CSRProjectCard from "@/components/csr-project-card"
import whatWeDoData from "@/data/what-we-do.json"

export default function WhatWeDoPage() {
  // Add scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="w-full py-10 md:py-16"
        style={{ backgroundColor: "rgba(30, 58, 138, 0.05)" }} // Inline primary/5 background
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-3 text-center">
            <div>
              <h1
                className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl"
                style={{ color: "hsl(231, 48%, 28%)" }} // Inline primary color
              >
                What We Do
              </h1>
              <p
                className="mx-auto mt-2 max-w-[700px] text-base md:text-lg"
                style={{ color: "hsl(215.4, 16.3%, 46.9%)" }} // Inline muted-foreground color
              >
                Fostering innovation, building skills, and creating tomorrow's tech leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="w-full py-6 md:py-10 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row mb-4">
            <div>
              <h2
                className="text-2xl font-bold tracking-tighter md:text-3xl"
                style={{ color: "hsl(231, 48%, 28%)" }} // Inline primary color
              >
                Upcoming Events
              </h2>
              <p
                className="mt-1 text-sm"
                style={{ color: "hsl(215.4, 16.3%, 46.9%)" }} // Inline muted-foreground color
              >
                Join us at our upcoming events and activities
              </p>
            </div>
          </div>

          {/* Instagram-style posts layout */}
          <div className="mt-4">
            {/* Mobile: Horizontal scroll */}
            <div className="md:hidden flex gap-2 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory touch-pan-x">
              {whatWeDoData.upcomingEvents.map((event) => (
                <a
                  key={event.id}
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[calc(100vw-4rem)] max-w-[320px] flex-none snap-center"
                >
                  <div
                    className="overflow-hidden rounded-lg shadow-sm"
                    style={{ border: "1px solid hsl(214.3, 31.8%, 91.4%)" }} // Inline border color
                  >
                    <div
                      className="aspect-[3/4] w-full overflow-hidden"
                      style={{ backgroundColor: "hsl(210, 40%, 96.1%)" }}
                    >
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.src = `/placeholder.svg?height=600&width=600&query=${encodeURIComponent(event.title)}`
                        }}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {whatWeDoData.upcomingEvents.map((event) => (
                <a key={event.id} href={event.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div
                    className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    style={{ border: "1px solid hsl(214.3, 31.8%, 91.4%)" }} // Inline border color
                  >
                    <div
                      className="aspect-[3/4] w-full overflow-hidden"
                      style={{ backgroundColor: "hsl(210, 40%, 96.1%)" }}
                    >
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.src = `/placeholder.svg?height=600&width=600&query=${encodeURIComponent(event.title)}`
                        }}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSR Projects Section */}
      <section id="csr-projects" className="w-full py-12 md:py-24" style={{ backgroundColor: "hsl(210, 40%, 96.1%)" }}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row mb-4">
            <div>
              <h2
                className="text-2xl font-bold tracking-tighter md:text-3xl"
                style={{ color: "hsl(231, 48%, 28%)" }} // Inline primary color
              >
                Corporate Social Responsibility
              </h2>
              <p
                className="mt-1 text-sm"
                style={{ color: "hsl(215.4, 16.3%, 46.9%)" }} // Inline muted-foreground color
              >
                Making a positive impact in our community through technology and innovation
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {whatWeDoData.csrProjects.map((project, index) => (
              <CSRProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
