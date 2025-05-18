"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import CSRProjectCard from "@/components/csr-project-card"
import whatWeDoData from "@/data/what-we-do.json"

export default function WhatWeDoPage() {
  // Add state to track if the component is mounted
  const [isMounted, setIsMounted] = useState(false)

  // Add scroll to top when page loads and set mounted state
  useEffect(() => {
    window.scrollTo(0, 0)
    setIsMounted(true)

    // Ensure styles are applied after hydration
    const timer = setTimeout(() => {
      if (document.body.classList.contains("hydrated")) return
      document.body.classList.add("hydrated")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Don't render content until client-side hydration is complete
  if (!isMounted) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-10 md:py-16 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-3 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-primary">What We Do</h1>
              <p className="mx-auto mt-2 max-w-[700px] text-base md:text-lg text-muted-foreground">
                Fostering innovation, building skills, and creating tomorrow's tech leaders
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="w-full py-6 md:py-10 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row mb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-primary">Upcoming Events</h2>
              <p className="mt-1 text-sm text-muted-foreground">Join us at our upcoming events and activities</p>
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
                  <div className="overflow-hidden rounded-lg border border-border shadow-sm">
                    <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
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
                  <div className="overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
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
      <section id="csr-projects" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row mb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-primary">
                Corporate Social Responsibility
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
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
