"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import type { NavLink } from "@/types"
import useSmoothScroll from "@/hooks/use-smooth-scroll"

/**
 * Navbar Component
 *
 * The main navigation bar for the website with responsive mobile menu
 * and smooth scrolling to sections
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll(80) // 80px offset for the navbar height

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks: NavLink[] = [
    { href: "/#hero", label: "Home" },
    { href: "/#vision-mission", label: "Vision & Mission" },
    { href: "/#board", label: "Board Members" },
    { href: "/#partners", label: "Partners" },
    { href: "/#communities", label: "Communities" },
    { href: "/#gallery", label: "Gallery" },
    {
      href: "https://blog.sliitsesc.org/",
      label: "Blog",
      isExternal: true,
    },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    if (!isExternal) {
      scrollToSection(e, href)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2" onClick={(e) => handleLinkClick(e, "/#hero")}>
            <Image src="/images/logo.png" alt="SLIIT SEC Logo" width={100} height={50} priority unoptimized />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary relative group"
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div id="mobile-menu" className="container md:hidden">
          <nav className="flex flex-col space-y-3 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
