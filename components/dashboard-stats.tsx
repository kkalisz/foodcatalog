import { Card } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'

interface DashboardStatsProps {
  title: string
  value: number
  icon: LucideIcon
  trend?: number
}

export function DashboardStats({
  title,
  value,
  icon: Icon,
  trend = 0,
}: DashboardStatsProps) {
  return (
    <Card className="p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1 sm:mb-2">
            {title}
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground truncate">
            {value.toLocaleString('pl-PL')}
          </p>
          {trend !== 0 && (
            <p
              className={`text-xs sm:text-sm mt-2 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </p>
          )}
        </div>
        <Icon className="w-6 h-6 text-muted-foreground" />
      </div>
    </Card>
  )
}
