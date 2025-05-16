"use client"

import type React from "react"

import { useEffect } from "react"
import { X } from "lucide-react"
import type { GalleryItem } from "./types/Gallery"

interface ImageModalProps {
  item: GalleryItem | null
  isOpen: boolean
  onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ item, isOpen, onClose }) => {
  // Close modal on escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey)
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen || !item) return null

  // Close when clicking outside the content area
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={handleBackdropClick}>
      <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 text-white" />
        </button>

        <div className="relative w-full aspect-video">
          <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-contain" />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-500 mb-4 flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mr-2"></span>
            {item.date}
          </p>
          <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageModal
