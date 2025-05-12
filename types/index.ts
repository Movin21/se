import type React from "react"
// Common types used throughout the application

export interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  ariaLabel: string
}

export interface NavLink {
  href: string
  label: string
  isExternal?: boolean
}

export interface Partner {
  id: string
  name: string
  displayName: string
  logoPath: string
}

export interface WatermarkProps {
  text: string
  reverse?: boolean
}

export interface TranslateWrapperProps {
  children: React.ReactNode
  reverse?: boolean
  duration?: number
}
