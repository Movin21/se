"use client"

import { useState } from "react"
import GalleryGrid from "./GalleryGrid"
import ImageModal from "./ImageModal"
import type { GalleryItem } from "./types/Gallery"

/**
 * Gallery Component
 *
 * Displays a grid of images showcasing SESC events and activities
 */
export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Use only available images in the project
  const galleryItems: GalleryItem[] = [
    // Connect images
    {
      id: 1,
      title: "SESC Connect",
      image: "/images/gallery/connect-1.jpg",
      date: "September 15, 2024",
      description:
        "Group photo from our SESC Connect event where students gathered to network, share knowledge, and build lasting connections within our software engineering community.",
    },
    {
      id: 2,
      title: "SESC Connect",
      image: "/images/gallery/connect-2.jpg",
      date: "September 15, 2024",
      description:
        "SESC Connect brought together our community members for knowledge sharing, networking, and collaboration - creating meaningful connections that strengthen our software engineering community.",
    },
    {
      id: 3,
      title: "SESC Connect",
      image: "/images/gallery/connect-3.jpg",
      date: "September 15, 2024",
      description:
        "Our president addressing the community with insights and vision for the future of software engineering at SLIIT during the SESC Connect event.",
    },
    {
      id: 4,
      title: "SESC Connect",
      image: "/images/gallery/connect-4.jpg",
      date: "September 15, 2024",
      description:
        "Knowledge sharing session at SESC Connect where industry experts and senior students shared valuable insights with the community.",
    },
    {
      id: 5,
      title: "SESC Connect",
      image: "/images/gallery/connect-5.jpg",
      date: "September 15, 2024",
      description:
        "Interactive workshop session during SESC Connect where students engaged in hands-on learning and collaborative problem-solving.",
    },
    {
      id: 6,
      title: "SESC Connect",
      image: "/images/gallery/connect-6.jpg",
      date: "September 15, 2024",
      description:
        "Engaged audience at SESC Connect, where students from various batches came together to learn and network with peers and seniors.",
    },
    {
      id: 7,
      title: "SESC Connect",
      image: "/images/gallery/connect-7.jpg",
      date: "September 15, 2024",
      description:
        "Presentation on hackathon opportunities and coding challenges during SESC Connect, inspiring students to participate in tech competitions.",
    },
    {
      id: 8,
      title: "SESC Connect",
      image: "/images/gallery/connect-8.jpg",
      date: "September 15, 2024",
      description:
        "Certificate presentation at SESC Connect, recognizing contributions and achievements of community members in various tech initiatives.",
    },
    {
      id: 9,
      title: "SESC Connect",
      image: "/images/gallery/connect-9.jpg",
      date: "September 15, 2024",
      description:
        "Game time at SESC Connect! Team-building activities and fun tech challenges helped break the ice and foster collaboration among participants.",
    },
    {
      id: 10,
      title: "SESC Connect",
      image: "/images/gallery/connect-11.jpg",
      date: "September 15, 2024",
      description:
        "Industry expert sharing valuable insights and career guidance with SESC members during our Connect event.",
    },

    // Industry visits
    {
      id: 11,
      title: "Industry Visit - Rootcode",
      image: "/images/gallery/rootcode-visit.png",
      date: "November 30, 2024",
      description:
        "Thank you Rootcode for hosting us and sharing invaluable industry insights! Your guidance and expertise have truly inspired us to reach new heights in our software engineering journey.",
    },
    {
      id: 12,
      title: "Industry Visit - Creative Software",
      image: "/images/gallery/creative-software-visit.png",
      date: "November 23, 2024",
      description:
        "We are truly grateful for the time, hospitality, and valuable insights shared during our industry visit to Creative Software. It was an inspiring experience that gave us a deeper understanding of the software industry and its innovations.",
    },
    {
      id: 13,
      title: "Industry Visit - Sysco Labs",
      image: "/images/gallery/sysco-labs-visit.png",
      date: "February 21, 2025",
      description:
        "Thank you Sysco LABS for hosting us and providing an incredible industry visit! We appreciate the opportunity to learn from your expertise and gain valuable insights into the evolving tech landscape.",
    },
    {
      id: 14,
      title: "Industry Visit - Wiley",
      image: "/images/gallery/wiley-visit.png",
      date: "February 26, 2025",
      description:
        "A big thank you to the team at Wiley for hosting our industry visit! We truly appreciate the time, effort, and expertise you shared. Your guidance has been enlightening and motivating.",
    },

    // Orientation images
    {
      id: 15,
      title: "Software Engineering Orientation",
      image: "/images/gallery/orientation-speaker-1.png",
      date: "July 17, 2024",
      description:
        "Distinguished speaker sharing valuable insights and industry perspectives during the Software Engineering Orientation, inspiring our new batch of students.",
    },
    {
      id: 16,
      title: "Software Engineering Orientation",
      image: "/images/gallery/orientation-speaker-2.png",
      date: "July 17, 2024",
      description:
        "Guest speaker at the Software Engineering Orientation providing guidance and motivation to our incoming students as they begin their academic journey.",
    },
    {
      id: 17,
      title: "Software Engineering Orientation",
      image: "/images/gallery/orientation-committee.png",
      date: "July 17, 2024",
      description:
        "The organizing committee and student representatives who worked tirelessly to make the Software Engineering Orientation a memorable and successful event.",
    },
    {
      id: 18,
      title: "Software Engineering Orientation",
      image: "/images/gallery/orientation-audience.png",
      date: "July 17, 2024",
      description:
        "Engaged audience of new software engineering students attending the orientation program, eager to embark on their academic journey at SLIIT.",
    },

    // Exhibition images
    {
      id: 19,
      title: "SLIIT Exhibition",
      image: "/images/gallery/exhibition-1.jpg",
      date: "April 03, 2025",
      description:
        "Creative Harry Potter themed photo booth at our exhibition, showcasing the fun side of our community while engaging visitors in an interactive experience.",
    },
    {
      id: 20,
      title: "SLIIT Exhibition",
      image: "/images/gallery/exhibition-2.jpg",
      date: "April 03, 2025",
      description:
        "Students showcasing software engineering projects at the SLIIT exhibition booth, where visitors can interact with demonstrations and learn about community initiatives.",
    },
    {
      id: 21,
      title: "SLIIT Exhibition",
      image: "/images/gallery/exhibition-3.jpg",
      date: "April 03, 2025",
      description:
        "Another view of our exhibition booth showing students and faculty engaging with visitors and explaining the various software engineering projects on display.",
    },
    {
      id: 22,
      title: "SLIIT Exhibition",
      image: "/images/gallery/exhibition-4.jpg",
      date: "April 03, 2025",
      description:
        "A busy day at the SLIIT exhibition with students demonstrating software applications and technologies to interested visitors from various backgrounds.",
    },
  ]

  return (
    <div className="w-full py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Our Journey in Pictures
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Capturing moments of innovation, collaboration, and growth in the SESC community
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="mt-8">
          <GalleryGrid items={galleryItems} onOpenModal={openModal} />
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal item={selectedItem} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
