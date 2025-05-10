import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface WebinarCardProps {
  title: string
  image: string
}

export default function WebinarCard({ title, image }: WebinarCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg?height=400&width=600&query=webinar"}
          alt={title}
          fill
          className="object-cover"
          unoptimized={image?.includes("placeholder.svg")}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="secondary" size="sm" className="w-full">
          Watch Now
        </Button>
      </CardFooter>
    </Card>
  )
}
