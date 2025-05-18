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
            <div key={community.id} className="p-6 rounded-lg hover:bg-muted/50 transition-all duration-300">
              {/* Use direct relative paths for static export compatibility */}
              <img
                src={community.logoPath.replace(/^\//, "./") || "./placeholder.svg"}
                alt={`${community.name} logo`}
                className="h-28 w-28 md:h-36 md:w-36 object-contain transition-transform duration-300 hover:scale-110"
                title={community.name}
                onError={(e) => {
                  // Fallback to a data URI if image fails to load
                  e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='50' fontFamily='Arial' fontSize='14' textAnchor='middle' dominantBaseline='middle' fill='%23333'%3E${encodeURIComponent(community.name)}%3C/text%3E%3C/svg%3E`
                  console.error(`Failed to load image: ${community.logoPath} for ${community.name}`)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
