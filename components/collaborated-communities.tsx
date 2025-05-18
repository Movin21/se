"use client"
import { useState, useEffect } from "react"
import { getAllCommunities } from "@/utils/communities"

/**
 * CollaboratedCommunities Component
 *
 * Displays a section showcasing collaborated communities with their logos
 */
export default function CollaboratedCommunities() {
  const communities = getAllCommunities()
  const [baseUrl, setBaseUrl] = useState("")

  // Get the base URL for assets when component mounts
  useEffect(() => {
    // For deployed environments, use the relative path
    // This helps with various deployment configurations
    setBaseUrl(window.location.pathname.endsWith("/") ? "." : "..")
  }, [])

  return (
    <section id="communities" className="w-full py-12 md:py-24 bg-background border-t border-b border-border/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Collaborated Communities
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            We work closely with these communities to foster knowledge sharing and collaboration
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {communities.map((community) => (
            <div key={community.id} className="p-6 rounded-lg hover:bg-muted/50 transition-all duration-300">
              <img
                src={`${baseUrl}${community.logoPath}` || "/placeholder.svg"}
                alt={`${community.name} logo`}
                className="h-28 w-28 md:h-36 md:w-36 object-contain transition-transform duration-300 hover:scale-110"
                title={community.name}
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.src = `${baseUrl}/placeholder.svg?text=${encodeURIComponent(community.name)}`
                  console.log(`Failed to load image for ${community.name}, using placeholder instead`)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
