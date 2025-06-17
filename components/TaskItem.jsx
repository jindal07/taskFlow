"use client"

import { X, Calendar, CheckCircle2, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TaskItem({ task, toggleTask, deleteTask }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800"
      case "low":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
    }
  }

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Card
      className={`bg-white/70 dark:bg-black/20 backdrop-blur-sm border-0 shadow-lg dark:shadow-2xl border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl hover:bg-white/80 dark:hover:bg-black/30 rounded-xl active:scale-[0.98] ${
        task.completed ? "opacity-75" : ""
      }`}
    >
      <CardContent className="p-4 md:p-6">
        <div className="flex items-start gap-4">
          {/* Mobile-friendly checkbox */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleTask(task.id)}
            className={`mt-1 flex-shrink-0 hover:bg-transparent w-10 h-10 md:w-auto md:h-auto active:scale-90 ${
              task.completed
                ? "text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                : "text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            {task.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
          </Button>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-2 mb-2">
              <span
                className={`text-base md:text-lg font-medium leading-relaxed tracking-wide ${
                  task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-gray-100"
                }`}
              >
                {task.text}
              </span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={`text-xs font-semibold ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(task.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-friendly delete button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => deleteTask(task.id)}
            className="flex-shrink-0 text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 w-10 h-10 md:w-auto md:h-auto active:scale-90 rounded-lg"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
