import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  title: string
  tags: string[]
}

export default function BlogCard({ title, tags }: BlogCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="secondary" size="sm" className="w-full">
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}
