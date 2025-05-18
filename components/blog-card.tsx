"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface BlogCardProps {
  className?: string
}

/**
 * ConnectCard Component
 *
 * A card component that links to the SLIIT SEC blog and social links
 */
export default function ConnectCard({ className = "" }: BlogCardProps) {
  return (
    <motion.div
      className={`w-full rounded-xl bg-primary text-primary-foreground overflow-hidden shadow-lg ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Connect With Us</h3>
          <p className="text-primary-foreground/80 text-sm md:text-base">Explore our blog and social media platforms</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="https://blog.sliitsesc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white text-primary px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/90 transition-colors"
          >
            Read Blog <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="https://links.sliitsesc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white/90 text-primary px-4 py-2 text-sm font-medium shadow-sm hover:bg-white transition-colors"
          >
            Social Links <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
