"use client"

import { motion } from "framer-motion"
import type { TranslateWrapperProps, WatermarkProps } from "@/types"

/**
 * TranslateWrapper Component
 *
 * Creates an infinite horizontal animation for content
 */
export const TranslateWrapper = ({ children, reverse = false, duration = 75 }: TranslateWrapperProps) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="flex"
    >
      {children}
    </motion.div>
  )
}

/**
 * Watermark Component
 *
 * Displays a large text watermark with animation
 */
export const Watermark = ({ text, reverse = false }: WatermarkProps) => (
  <div className="flex select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-primary/5 dark:text-primary/10">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-primary/5 dark:text-primary/10">
        {text}
      </span>
    </TranslateWrapper>
  </div>
)

/**
 * WatermarkWrapper Component
 *
 * Container for multiple watermarks with different texts and directions
 */
export const WatermarkWrapper = () => {
  const watermarkTexts = [
    { text: "Software Engineering", reverse: false },
    { text: "Innovation", reverse: true },
    { text: "Collaboration", reverse: false },
    { text: "Excellence", reverse: true },
    { text: "Technology", reverse: false },
    { text: "Community", reverse: true },
  ]

  return (
    <>
      {watermarkTexts.map((wm, index) => (
        <Watermark key={index} text={wm.text} reverse={wm.reverse} />
      ))}
    </>
  )
}

export default WatermarkWrapper
