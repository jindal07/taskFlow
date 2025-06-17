"use client"

import { Trash2, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TaskManagement({ tasks, clearAllTasks, clearCompletedTasks, completedCount }) {
  if (tasks.length === 0) return null

  return (
    <Card className="mb-6 bg-white/70 dark:bg-black/20 backdrop-blur-sm border-0 shadow-lg dark:shadow-2xl border border-white/20 dark:border-white/10">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={clearCompletedTasks}
            disabled={completedCount === 0}
            className="flex-1 bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-800 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear Completed ({completedCount})
          </Button>
          <Button
            variant="outline"
            onClick={clearAllTasks}
            disabled={tasks.length === 0}
            className="flex-1 bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-200 dark:hover:border-orange-800 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Clear All Tasks
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
