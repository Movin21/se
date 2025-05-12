"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getBoardYears, getBoardMembersByYear, getCurrentBoardYear, isBoardYearValid } from "@/utils/board-members"
import type { BoardMember } from "@/utils/board-members"

interface BoardMembersProps {
  initialYear?: string
}

/**
 * BoardMembers Component
 *
 * Displays the SESC board members for a selected year with filtering capability
 */
export default function BoardMembers({ initialYear }: BoardMembersProps) {
  const years = getBoardYears()
  const defaultYear = initialYear && isBoardYearValid(initialYear) ? initialYear : getCurrentBoardYear()

  const [selectedYear, setSelectedYear] = useState(defaultYear)
  const [members, setMembers] = useState<BoardMember[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    // Simulate loading to show transition
    const timer = setTimeout(() => {
      setMembers(getBoardMembersByYear(selectedYear))
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [selectedYear])

  // Separate leadership members from other members
  const presidentMember = members.find((member) => member.position === "President")
  const vicePresidentMember = members.find((member) => member.position === "Vice President")
  const secretaryMember = members.find((member) => member.position === "Secretary")
  const otherMembers = members.filter(
    (member) => !["President", "Vice President", "Secretary"].includes(member.position),
  )

  return (
    <section id="board" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Our Board Members
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mb-8">
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
                <div className="space-y-16">
                  {/* Leadership Row - President, VP, Secretary */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                    {/* Vice President - Left */}
                    <div className="flex flex-col items-center justify-end text-center order-2 sm:order-1">
                      {vicePresidentMember && <LeadershipMemberCard member={vicePresidentMember} size="medium" />}
                    </div>

                    {/* President - Center */}
                    <div className="flex flex-col items-center text-center order-1 sm:order-2 mb-6 sm:mb-0">
                      {presidentMember && <LeadershipMemberCard member={presidentMember} size="large" />}
                    </div>

                    {/* Secretary - Right */}
                    <div className="flex flex-col items-center justify-end text-center order-3">
                      {secretaryMember && <LeadershipMemberCard member={secretaryMember} size="medium" />}
                    </div>
                  </div>

                  {/* Other Members - 4 per row */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {otherMembers.map((member) => (
                      <BoardMemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

interface BoardMemberCardProps {
  member: BoardMember
  size?: "small" | "medium" | "large"
}

/**
 * LeadershipMemberCard Component
 *
 * Displays leadership board members with different sizes
 */
function LeadershipMemberCard({ member, size = "medium" }: BoardMemberCardProps) {
  // Size classes based on role
  const sizeClasses = {
    small: "w-24 h-24 md:w-28 md:h-28",
    medium: "w-28 h-28 md:w-36 md:h-36",
    large: "w-36 h-36 md:w-44 md:h-44",
  }

  const nameClasses = {
    small: "text-xs md:text-sm",
    medium: "text-sm md:text-base",
    large: "text-base md:text-lg font-bold",
  }

  const positionClasses = {
    small: "text-xs md:text-sm",
    medium: "text-sm md:text-base",
    large: "text-base md:text-lg font-bold",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center"
    >
      <div
        className={`relative ${sizeClasses[size]} mb-3 overflow-hidden rounded-full border-4 ${size === "large" ? "border-primary" : "border-primary/10"}`}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-2/3 h-2/3 text-primary/40"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      <h3 className={`${positionClasses[size]} text-primary`}>{member.position}</h3>
      <p className={`${nameClasses[size]} font-medium`}>{member.name}</p>
    </motion.div>
  )
}

/**
 * BoardMemberCard Component
 *
 * Displays regular board members with smaller size
 */
function BoardMemberCard({ member }: BoardMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 mb-2 overflow-hidden rounded-full border-2 border-primary/10">
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-2/3 h-2/3 text-primary/40"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      <h3 className="text-xs md:text-sm font-medium text-primary">{member.position}</h3>
      <p className="text-xs md:text-sm">{member.name}</p>
    </motion.div>
  )
}
