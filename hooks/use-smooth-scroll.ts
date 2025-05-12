"use client"

import type React from "react"

import { useCallback, useEffect } from "react"

/**
 * Custom hook for smooth scrolling to sections when clicking anchor links
 *
 * @param offset - Optional offset from the top of the section (useful for fixed headers)
 */
export function useSmoothScroll(offset = 0) {
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Only process hash links that point to sections on the same page
      if (href.startsWith("#") || (href.startsWith("/") && href.includes("#"))) {
        e.preventDefault()

        // Extract the hash part
        const hash = href.includes("#") ? href.substring(href.indexOf("#")) : href
        const targetId = hash.replace("#", "")

        // Find the target element
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Get the position of the target element
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          // Scroll to the target element with smooth behavior
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })

          // Update the URL without causing a page reload
          window.history.pushState(null, "", hash)
        }
      }
    },
    [offset],
  )

  // Add smooth scrolling behavior to the document
  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return { scrollToSection }
}

export default useSmoothScroll
