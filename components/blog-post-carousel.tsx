"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import useMeasure from "react-use-measure"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getBlogPosts } from "@/utils/content-helpers"

const CARD_WIDTH = 350
const MARGIN = 20
const CARD_SIZE = CARD_WIDTH + MARGIN

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
}

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure()
  const [offset, setOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const carouselRef = useRef(null)

  const CARD_BUFFER = width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1

  const CAN_SHIFT_LEFT = offset < 0

  const posts = getBlogPosts()

  const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER)

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

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setCurrentTranslate(offset)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    const newTranslate = currentTranslate + diff

    // Add boundaries
    if (newTranslate > 0 || Math.abs(newTranslate) > CARD_SIZE * (posts.length - CARD_BUFFER)) {
      return
    }

    setOffset(newTranslate)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)

    // Snap to nearest card
    const cardIndex = Math.round(Math.abs(offset) / CARD_SIZE)
    setOffset(-cardIndex * CARD_SIZE)
  }

  // Mouse handlers for desktop drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setCurrentTranslate(offset)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = currentX - startX
    const newTranslate = currentTranslate + diff

    // Add boundaries
    if (newTranslate > 0 || Math.abs(newTranslate) > CARD_SIZE * (posts.length - CARD_BUFFER)) {
      return
    }

    setOffset(newTranslate)
  }

  const handleMouseUp = () => {
    setIsDragging(false)

    // Snap to nearest card
    const cardIndex = Math.round(Math.abs(offset) / CARD_SIZE)
    setOffset(-cardIndex * CARD_SIZE)
  }

  // Add and remove event listeners
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false)
        const cardIndex = Math.round(Math.abs(offset) / CARD_SIZE)
        setOffset(-cardIndex * CARD_SIZE)
      }
    }

    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mousemove", handleMouseMove)
    carousel.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mousemove", handleMouseMove)
      if (carousel) {
        carousel.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isDragging, offset])

  return (
    <div className="relative overflow-hidden p-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary hidden md:block">
            Our Activities
          </h2>

          <div className="flex items-center gap-2 ml-auto">
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
        <div
          ref={carouselRef}
          className="touch-pan-x cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
              duration: isDragging ? 0 : 0.3,
            }}
            className="flex"
            style={{
              touchAction: "pan-x",
            }}
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Post = ({ imgUrl, author, title, tags, description }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 bg-card rounded-lg shadow-sm border border-border p-4"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <div className="relative h-48 w-full mb-4">
        <img
          src={imgUrl || "/placeholder.svg"}
          className="h-full w-full rounded-lg object-cover"
          alt={`Activity titled ${title}`}
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4">
        <Button variant="secondary" size="sm" className="w-full">
          Learn More
        </Button>
      </div>
    </div>
  )
}

export default BlogPostCarousel
