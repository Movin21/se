"use client"

import type React from "react"
import Image from "next/image"
import { ZoomIn } from "lucide-react"
import type { GalleryItem } from "./types/Gallery"

interface GalleryItemProps {
  item: GalleryItem
  onOpenModal: (item: GalleryItem) => void
}

const GalleryItemCard: React.FC<GalleryItemProps> = ({ item, onOpenModal }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-white dark:bg-white/10 transition-all duration-300 border-2 border-primary dark:border-white cursor-pointer"
      onClick={() => onOpenModal(item)}
    >
      <div className="relative aspect-square overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={false}
            loading="lazy"
            unoptimized={true} // For static export
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <ZoomIn className="text-white h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryItemCard
