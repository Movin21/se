import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  icon: ReactNode
  value: string
  label: string
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="mb-2 rounded-full bg-primary/10 p-3 text-primary">{icon}</div>
        <h3 className="text-3xl font-bold">{value}</h3>
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  )
}
