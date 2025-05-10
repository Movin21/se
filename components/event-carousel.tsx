"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import useMeasure from "react-use-measure"
import { Button } from "@/components/ui/button"
import WebinarCard from "@/components/webinar-card"

const CARD_WIDTH = 300
const MARGIN = 20
const CARD_SIZE = CARD_WIDTH + MARGIN

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
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
    <div className="relative overflow-hidden p-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Latest Webinars</h2>

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
          {webinars.map((webinar) => {
            return <Webinar key={webinar.id} {...webinar} />
          })}
        </motion.div>
      </div>
    </div>
  )
}

const Webinar = ({ imgUrl, title }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 bg-card rounded-lg shadow-sm border border-border"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <WebinarCard image={imgUrl} title={title} />
    </div>
  )
}

const webinars = [
  {
    id: 1,
    imgUrl: "/tech-conference.png",
    title: "Future of AI in Software Engineering",
  },
  {
    id: 2,
    imgUrl: "/coding-workshop.png",
    title: "Advanced JavaScript Techniques",
  },
  {
    id: 3,
    imgUrl: "/mobile-app-development.png",
    title: "Cross-Platform Mobile Development",
  },
  {
    id: 4,
    imgUrl: "/ui-ux-design-process.png",
    title: "UI/UX Design for Web Applications",
  },
  {
    id: 5,
    imgUrl: "/podcast-app-interface.png",
    title: "Building Scalable Web Services",
  },
  {
    id: 6,
    imgUrl: "/software-engineering-collaboration.png",
    title: "Effective Collaboration in Software Teams",
  },
  {
    id: 7,
    imgUrl: "/software-engineering-workshop.png",
    title: "Hands-On Software Engineering Workshop",
  },
]
