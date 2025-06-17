"use client"

import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import TaskItem from "./TaskItem"

export default function TasksList({ filteredTasks, filter, toggleTask, deleteTask }) {
  if (filteredTasks.length === 0) {
    return (
      <Card className="bg-white/70 dark:bg-black/20 backdrop-blur-sm border-0 shadow-lg dark:shadow-2xl border border-white/20 dark:border-white/10 rounded-xl">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 mx-auto" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2 tracking-tight">
            {filter === "completed"
              ? "No completed tasks yet"
              : filter === "active"
                ? "No active tasks"
                : "No tasks yet"}
          </h3>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">
            {filter === "all"
              ? "Add your first task to get started!"
              : filter === "active"
                ? "All tasks are completed!"
                : "Complete some tasks to see them here."}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </div>
  )
}
