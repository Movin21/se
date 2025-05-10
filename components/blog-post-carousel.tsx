"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import useMeasure from "react-use-measure"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

  const CARD_BUFFER = width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1

  const CAN_SHIFT_LEFT = offset < 0

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

  return (
    <div className="relative overflow-hidden p-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Latest Blog Posts
          </h2>

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
          {posts.map((post) => {
            return <Post key={post.id} {...post} />
          })}
        </motion.div>
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
          alt={`Blog post titled ${title}`}
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
          Read More
        </Button>
      </div>
    </div>
  )
}

const posts = [
  {
    id: 1,
    imgUrl: "/software-engineering-blog.png",
    author: "John Anderson",
    title: "Kotlin vs Swift: Which One Should I Learn?",
    tags: ["Mobile", "Development", "Languages"],
    description: "A comprehensive comparison of two popular mobile development languages.",
  },
  {
    id: 2,
    imgUrl: "/react-framework.png",
    author: "Kyle Parsons",
    title: "Introduction to NextJS: The React Framework",
    tags: ["Web", "React", "Frontend"],
    description: "Learn the basics of Next.js and how it enhances React development.",
  },
  {
    id: 3,
    imgUrl: "/abstract-ui-elements.png",
    author: "Andrea Bates",
    title: "Common Myths About UI Design",
    tags: ["Design", "UI/UX", "Principles"],
    description: "Debunking common misconceptions about user interface design.",
  },
  {
    id: 4,
    imgUrl: "/cloud-computing-concept.png",
    author: "Jess Drum",
    title: "Getting Started with Cloud Computing",
    tags: ["Cloud", "AWS", "DevOps"],
    description: "A beginner's guide to understanding and using cloud services.",
  },
  {
    id: 5,
    imgUrl: "/machine-learning-concept.png",
    author: "Phil White",
    title: "Machine Learning for Software Engineers",
    tags: ["AI", "ML", "Python"],
    description: "How software engineers can get started with machine learning.",
  },
  {
    id: 6,
    imgUrl: "/cybersecurity-network.png",
    author: "Karen Peabody",
    title: "Essential Cybersecurity Practices",
    tags: ["Security", "Best Practices", "Web"],
    description: "Protect your applications with these essential security practices.",
  },
  {
    id: 7,
    imgUrl: "/agile-development.png",
    author: "Dante Gordon",
    title: "Agile Development in 2025",
    tags: ["Agile", "Project Management", "Teams"],
    description: "The latest trends and practices in agile software development.",
  },
]

export default BlogPostCarousel
