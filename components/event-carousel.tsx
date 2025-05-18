"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  link: string
}

interface EventCarouselProps {
  events: Event[]
}

export default function EventCarousel({ events }: EventCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef
      const scrollAmount = direction === "left" ? -current.offsetWidth * 0.8 : current.offsetWidth * 0.8

      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full">
      {/* Navigation buttons - hidden on mobile, visible on desktop */}
      <div className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background shadow-md"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background shadow-md"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="flex w-full gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {events.map((event) => (
          <Link
            key={event.id}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[280px] md:min-w-[320px] flex-none snap-center"
          >
            <motion.div
              className="h-full overflow-hidden rounded-xl border border-border shadow-sm transition-all duration-200 hover:shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-lg font-bold">{event.title}</h3>
                <div className="mt-2 flex flex-col space-y-1 text-sm text-muted-foreground">
                  <p>
                    {event.date} • {event.time}
                  </p>
                  <p>{event.location}</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
