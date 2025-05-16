"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import boardData from "@/data/board-members.json"
import Image from "next/image"

interface BoardMember {
  id: string
  name: string
  position: string
  image: string
}

interface BoardMembersProps {
  initialYear?: string
}

export default function BoardMembers({ initialYear }: BoardMembersProps) {
  const years = boardData.years
  const defaultYear = initialYear || years[0].id

  const [selectedYear, setSelectedYear] = useState(defaultYear)
  const [members, setMembers] = useState<BoardMember[]>(
    boardData.members[defaultYear as keyof typeof boardData.members] || [],
  )
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setMembers(boardData.members[selectedYear as keyof typeof boardData.members] || [])
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [selectedYear])

  return (
    <section id="board" className="w-full py-12 md:py-24 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Board Members</h2>
          <p className="max-w-[700px] md:text-xl/relaxed mb-8">
            Meet the dedicated team leading the SLIIT Software Engineering Student Community
          </p>

          {/* Year selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {years.map((year) => (
              <button
                key={year.id}
                onClick={() => setSelectedYear(year.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedYear === year.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
                aria-pressed={selectedYear === year.id}
              >
                {year.label}
              </button>
            ))}
          </div>

          {/* Board members grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {isLoading ? (
                <div className="flex justify-center items-center h-96">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                  {members.map((member) => (
                    <BoardMemberCard key={member.id} member={member} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function BoardMemberCard({ member }: { member: BoardMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative w-28 h-28 md:w-36 md:h-36 mb-3 overflow-hidden rounded-full border-2 border-primary/10">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 112px, 144px"
        />
      </div>
      <h3 className="text-sm md:text-base font-medium text-primary mb-1">{member.position}</h3>
      <p className="text-sm md:text-base">{member.name}</p>
    </motion.div>
  )
}
