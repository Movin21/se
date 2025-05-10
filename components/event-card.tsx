import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface EventCardProps {
  title: string
  image: string
  date: string
  description: string
}

export default function EventCard({ title, image, date, description }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg?height=400&width=600&query=event"}
          alt={title}
          fill
          className="object-cover"
          unoptimized={image?.includes("placeholder.svg")}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{date}</p>
        <p className="text-sm mt-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="secondary" size="sm" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
}
