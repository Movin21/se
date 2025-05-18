import type { ReactNode } from "react"

export default function WhatWeDoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="what-we-do-layout">
      {/* This wrapper ensures styles are properly applied to the What We Do page */}
      {children}
    </div>
  )
}
