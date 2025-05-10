"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="SLIIT SEC Logo" width={100} height={50} priority />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/#hero" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link
            href="/#vision-mission"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Vision & Mission
          </Link>
          <Link
            href="/#partners"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Partners
          </Link>
          <Link
            href="https://blog.sliitsesc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-3 pb-3">
            <Link
              href="/#hero"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#vision-mission"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Vision & Mission
            </Link>
            <Link
              href="/#partners"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="https://blog.sliitsesc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
