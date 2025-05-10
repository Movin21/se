"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import useMeasure from "react-use-measure"
import { Button } from "@/components/ui/button"
import EventCard from "@/components/event-card"
import WebinarCard from "@/components/webinar-card"

const CARD_WIDTH = 350
const MARGIN = 20
const CARD_SIZE = CARD_WIDTH + MARGIN

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
}

export const EventsCarousel = () => {
  const [ref, { width }] = useMeasure()
  const [offset, setOffset] = useState(0)

  const CARD_BUFFER = width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1

  const CAN_SHIFT_LEFT = offset < 0

  const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (events.length - CARD_BUFFER)

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return
    }
    setOffset((pv) => (pv += CARD_SIZE))
  }

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return
    }
    setOffset((pv) => (pv -= CARD_SIZE))
  }

  return (
    <div className="relative overflow-hidden" ref={ref}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Upcoming Events</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full transition-opacity ${CAN_SHIFT_LEFT ? "" : "opacity-30"}`}
            disabled={!CAN_SHIFT_LEFT}
            onClick={shiftLeft}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full transition-opacity ${CAN_SHIFT_RIGHT ? "" : "opacity-30"}`}
            disabled={!CAN_SHIFT_RIGHT}
            onClick={shiftRight}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <motion.div
        animate={{
          x: offset,
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="flex"
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="shrink-0 transition-transform hover:-translate-y-1"
            style={{
              width: CARD_WIDTH,
              marginRight: MARGIN,
            }}
          >
            <EventCard title={event.title} image={event.image} date={event.date} description={event.description} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export const WebinarsCarousel = () => {
  const [ref, { width }] = useMeasure()
  const [offset, setOffset] = useState(0)

  const CARD_BUFFER = width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1

  const CAN_SHIFT_LEFT = offset < 0

  const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (webinars.length - CARD_BUFFER)

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return
    }
    setOffset((pv) => (pv += CARD_SIZE))
  }

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return
    }
    setOffset((pv) => (pv -= CARD_SIZE))
  }

  return (
    <div className="relative overflow-hidden" ref={ref}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Featured Webinars</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full transition-opacity ${CAN_SHIFT_LEFT ? "" : "opacity-30"}`}
            disabled={!CAN_SHIFT_LEFT}
            onClick={shiftLeft}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full transition-opacity ${CAN_SHIFT_RIGHT ? "" : "opacity-30"}`}
            disabled={!CAN_SHIFT_RIGHT}
            onClick={shiftRight}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <motion.div
        animate={{
          x: offset,
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="flex"
      >
        {webinars.map((webinar) => (
          <div
            key={webinar.id}
            className="shrink-0 transition-transform hover:-translate-y-1"
            style={{
              width: CARD_WIDTH,
              marginRight: MARGIN,
            }}
          >
            <WebinarCard title={webinar.title} image={webinar.image} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const events = [
  {
    id: 1,
    title: "Introduction to Git & GitHub",
    image: "/software-engineering-workshop.png",
    date: "May 15, 2025",
    description: "A session on Git & GitHub was conducted by senior software development experts.",
  },
  {
    id: 2,
    title: "Software Freedom Day'24",
    image: "/tech-conference.png",
    date: "September 20, 2024",
    description: "Software Freedom Day'24 organized by SESC in collaboration with FOSS community.",
  },
  {
    id: 3,
    title: "SE & GitHub Workshop",
    image: "/coding-workshop.png",
    date: "June 5, 2025",
    description: "A workshop on SE & GitHub was conducted by industry experts from GitHub.",
  },
  {
    id: 4,
    title: "Hackathon 2025",
    image: "/software-engineering-collaboration.png",
    date: "July 10, 2025",
    description: "Annual hackathon event where students compete to build innovative solutions.",
  },
  {
    id: 5,
    title: "Career Fair",
    image: "/tech-conference.png",
    date: "August 15, 2025",
    description: "Connect with top tech companies and explore career opportunities in software engineering.",
  },
]

const webinars = [
  {
    id: 1,
    title: "Flutter: The next frontier in Mobile Development",
    image: "/mobile-app-development.png",
  },
  {
    id: 2,
    title: "The Design Process: From Concept to Product",
    image: "/ui-ux-design-process.png",
  },
  {
    id: 3,
    title: "AWS Introduction for Developers",
    image: "/cloud-computing-concept.png",
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    image: "/machine-learning-concept.png",
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices",
    image: "/cybersecurity-network.png",
  },
]
