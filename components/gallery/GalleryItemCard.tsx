"use client"

import type React from "react"
import type { GalleryItem } from "./types/Gallery"

interface GalleryItemProps {
  item: GalleryItem
  onOpenModal: (item: GalleryItem) => void
}

const GalleryItemCard: React.FC<GalleryItemProps> = ({ item, onOpenModal }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-white transition-all duration-300 border-2 border-primary cursor-pointer"
      onClick={() => onOpenModal(item)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `/placeholder.svg?height=300&width=300&query=${encodeURIComponent(item.title)}`
          }}
        />
      </div>
    </div>
  )
}

export default GalleryItemCard
