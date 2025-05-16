"use client"
import { getAllCommunities } from "@/utils/communities"

/**
 * CollaboratedCommunities Component
 *
 * Displays a section showcasing collaborated communities with their logos
 */
export default function CollaboratedCommunities() {
  const communities = getAllCommunities()

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
            <a
              key={community.id}
              href={community.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg hover:bg-muted/50 transition-all duration-300"
            >
              <div className="relative h-28 w-28 md:h-36 md:w-36 transition-transform duration-300 group-hover:scale-110">
                {/* Use img tag instead of Next.js Image component for static export */}
                <img
                  src={community.logoPath || "/placeholder.svg"}
                  alt={`${community.name} logo`}
                  className="w-full h-full object-contain"
                  title={community.name}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
