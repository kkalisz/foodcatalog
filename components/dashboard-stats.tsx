import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface DashboardStatsProps {
  title: string
  value: string
  icon: LucideIcon
  trend?: number
}

export function DashboardStats({ title, value, icon: Icon, trend = 0 }: DashboardStatsProps) {
  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1 sm:mb-2">{title}</p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground truncate">{value}</p>
          {trend !== 0 && (
            <p className={`text-xs sm:text-sm mt-2 ${trend > 0 ? "text-green-600" : "text-red-600"}`}>
              {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
            </p>
          )}
        </div>
        <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
      </div>
    </Card>
  )
}
