"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SocialLinks from "@/components/social-links"
import type { NavLink } from "@/types"
import useSmoothScroll from "@/hooks/use-smooth-scroll"

/**
 * Footer Component
 *
 * The main footer for the website with navigation links, social links, and subscription form
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { scrollToSection } = useSmoothScroll(0)

  const usefulLinks: NavLink[] = [
    { href: "/#hero", label: "Home" },
    { href: "/#vision-mission", label: "Vision & Mission" },
    { href: "/#board", label: "Board Members" },
    { href: "/#partners", label: "Partners" },
    { href: "https://blog.sliitsesc.org/", label: "Blog", isExternal: true },
    { href: "mailto:sliitsecommunity@gmail.com", label: "Contact" },
  ]

  const communityLinks: NavLink[] = [
    { href: "https://github.com/sliitsesc", label: "GitHub", isExternal: true },
    { href: "https://www.instagram.com/sliit.sesc/", label: "Instagram", isExternal: true },
    { href: "https://www.linkedin.com/company/sesc-sliit/posts/?feedView=all", label: "LinkedIn", isExternal: true },
    { href: "https://blog.sliitsesc.org/", label: "Blog", isExternal: true },
    { href: "/#vision-mission", label: "About Us" },
  ]

  const legalLinks: NavLink[] = [
    { href: "https://blog.sliitsesc.org/terms", label: "Terms", isExternal: true },
    { href: "https://blog.sliitsesc.org/privacy", label: "Privacy", isExternal: true },
    { href: "https://blog.sliitsesc.org/cookies", label: "Cookies", isExternal: true },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (!isExternal) {
      scrollToSection(e, href)
    }
  }

  return (
    <footer className="w-full py-12 md:py-16 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="SLIIT SEC Logo" width={120} height={60} priority unoptimized />
            </div>
            <p className="text-sm text-muted-foreground">
              Welcome to SLIIT Software Engineering Student Community. We're a group of passionate students dedicated to
              the growth of software engineering knowledge and skills.
            </p>
            <SocialLinks />
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-medium">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-medium">Community</h4>
            <ul className="space-y-2 text-sm">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-medium">Subscribe</h4>
            <p className="text-sm text-muted-foreground">Don't miss out on our latest news, events, and updates.</p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} SLIIT Software Engineering Student Community. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
