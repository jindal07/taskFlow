"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function StatsCards({ tasks, activeCount, completedCount }) {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
      <Card className="bg-white/70 dark:bg-black/20 backdrop-blur-sm border-0 shadow-lg dark:shadow-2xl border border-white/20 dark:border-white/10">
        <CardContent className="p-4 md:p-6 text-center">
          <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
            {tasks.length}
          </div>
          <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">Total</div>
        </CardContent>
      </Card>
      <Card className="bg-white/70 dark:bg-black/20 backdrop-blur-sm border-0 shadow-lg dark:shadow-2xl border border-white/20 dark:border-white/10">
        <CardContent className="p-4 md:p-6 text-center">
          <div className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400 tracking-tight">
            {activeCount}
          </div>
          <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">Active</div>
        </CardContent>
      </Card>
      <Card className="bg-white/70 dark:bg-black/20 backdrop-blur-sm border-0 shadow-lg dark:shadow-2xl border border-white/20 dark:border-white/10">
        <CardContent className="p-4 md:p-6 text-center">
          <div className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400 tracking-tight">
            {completedCount}
          </div>
          <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-medium">Done</div>
        </CardContent>
      </Card>
    </div>
  )
}
