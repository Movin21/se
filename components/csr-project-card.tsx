import { ExternalLink } from "lucide-react"

interface CSRProject {
  id: string
  title: string
  partner: string
  status: string
  description: string
  longDescription: string
  image: string
  link: string
  impact: string[]
}

interface CSRProjectCardProps {
  project: CSRProject
  index: number
}

export default function CSRProjectCard({ project, index }: CSRProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <div
      className="w-full overflow-hidden rounded-xl shadow-sm mb-8"
      style={{
        opacity: 1,
        backgroundColor: "white",
        border: "1px solid hsl(214.3, 31.8%, 91.4%)",
      }}
    >
      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-4 md:gap-6`}>
        {/* Image section */}
        <div className="md:w-2/5">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-contain"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.src = `/placeholder.svg?height=600&width=600&query=${encodeURIComponent(project.title)}`
              }}
            />
            <div className="absolute bottom-2 right-2">
              <span
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{
                  backgroundColor: "hsl(231, 48%, 28%)",
                  color: "white",
                }}
              >
                {project.status}
              </span>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-col justify-between p-4 md:w-3/5 md:p-6">
          <div>
            <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
            <p className="mt-1 text-sm" style={{ color: "hsl(215.4, 16.3%, 46.9%)" }}>
              In partnership with {project.partner}
            </p>

            <p className="mt-4">{project.description}</p>
            <div className="mt-4 space-y-4">
              <p>{project.longDescription}</p>

              <div>
                <h4 className="font-medium">Impact:</h4>
                <ul className="mt-2 space-y-1 pl-5 text-sm list-disc">
                  {project.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button
                className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium shadow-sm"
                style={{
                  backgroundColor: "hsl(231, 48%, 28%)",
                  color: "white",
                }}
              >
                Visit Project
                <ExternalLink className="h-3 w-3 ml-1" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
