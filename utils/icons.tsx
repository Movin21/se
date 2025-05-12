import Image from "next/image"
import iconsData from "@/content/icons-data.json"
import * as LucideIcons from "lucide-react"
import * as SiIcons from "react-icons/si"
import * as BsIcons from "react-icons/bs"

interface IconProps {
  name: string
  className?: string
  size?: number
  color?: string
}

/**
 * Icon Component
 *
 * Renders an icon from various icon libraries based on the name prefix
 */
export function Icon({ name, className, size, color }: IconProps) {
  // Determine which library to use based on prefix
  let IconComponent

  if (name.startsWith("Si")) {
    IconComponent = SiIcons[name]
  } else if (name.startsWith("Bs")) {
    IconComponent = BsIcons[name]
  } else {
    // Default to Lucide icons
    IconComponent = LucideIcons[name]
  }

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent className={className} size={size} color={color} />
}

/**
 * Get the icon name for a partner
 */
export function getPartnerIcon(partnerName: string): string | null {
  const partner = iconsData.partners.companies.find((company) => company.name === partnerName)
  return partner && partner.type !== "image" ? partner.icon : null
}

/**
 * Get the logo path for a partner
 */
export function getPartnerLogo(partnerName: string): string | null {
  const partner = iconsData.partners.companies.find((company) => company.name === partnerName)
  return partner && partner.type === "image" ? partner.logoImage : null
}

/**
 * Get the display name for a partner
 */
export function getPartnerDisplayName(partnerName: string): string {
  const partner = iconsData.partners.companies.find((company) => company.name === partnerName)
  return partner ? partner.displayName : partnerName
}

/**
 * Get social icon data
 */
export function getSocialIcon(socialName: string) {
  return iconsData.footer.social[socialName.toLowerCase()]
}

/**
 * Get theme icon name
 */
export function getThemeIcon(theme: "light" | "dark", iconName: string) {
  return iconsData.themeToggle[theme][iconName]
}

/**
 * Get UI icon name
 */
export function getUIIcon(iconName: string) {
  return iconsData.ui[iconName]
}

/**
 * SvgIcon Component
 *
 * Renders SVG paths for custom icons
 */
export function SvgIcon({ paths, className }: { paths: string[]; className?: string }) {
  return (
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
      className={className}
      aria-hidden="true"
    >
      {paths.map((path, index) => {
        // Parse the path string to determine the element type and attributes
        if (path.startsWith("path")) {
          const dMatch = path.match(/d='([^']*)'/)
          return dMatch ? <path key={index} d={dMatch[1]} /> : null
        } else if (path.startsWith("rect")) {
          const matches = {
            width: path.match(/width='([^']*)'/)?.at(1),
            height: path.match(/height='([^']*)'/)?.at(1),
            x: path.match(/x='([^']*)'/)?.at(1),
            y: path.match(/y='([^']*)'/)?.at(1),
            rx: path.match(/rx='([^']*)'/)?.at(1),
            ry: path.match(/ry='([^']*)'/)?.at(1),
          }
          return (
            <rect
              key={index}
              width={matches.width}
              height={matches.height}
              x={matches.x}
              y={matches.y}
              rx={matches.rx}
              ry={matches.ry}
            />
          )
        } else if (path.startsWith("line")) {
          const matches = {
            x1: path.match(/x1='([^']*)'/)?.at(1),
            x2: path.match(/x2='([^']*)'/)?.at(1),
            y1: path.match(/y1='([^']*)'/)?.at(1),
            y2: path.match(/y2='([^']*)'/)?.at(1),
          }
          return <line key={index} x1={matches.x1} x2={matches.x2} y1={matches.y1} y2={matches.y2} />
        } else if (path.startsWith("circle")) {
          const matches = {
            cx: path.match(/cx='([^']*)'/)?.at(1),
            cy: path.match(/cy='([^']*)'/)?.at(1),
            r: path.match(/r='([^']*)'/)?.at(1),
          }
          return <circle key={index} cx={matches.cx} cy={matches.cy} r={matches.r} />
        }
        return null
      })}
    </svg>
  )
}

/**
 * PartnerLogo Component
 *
 * Displays a partner logo
 */
export function PartnerLogo({ name, className }: { name: string; className?: string }) {
  const logoPath = getPartnerLogo(name)
  const displayName = getPartnerDisplayName(name)

  if (!logoPath) return null

  return (
    <div className={`relative ${className}`}>
      <Image
        src={logoPath || "/placeholder.svg"}
        alt={`${displayName} logo`}
        width={40}
        height={40}
        className="object-contain"
        unoptimized
      />
    </div>
  )
}

/**
 * Get all partners
 */
export function getAllPartners(): any[] {
  return iconsData.partners.companies
}

export default iconsData
