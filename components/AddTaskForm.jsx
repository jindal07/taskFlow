"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function AddTaskForm({ newTask, setNewTask, priority, setPriority, addTask }) {
  return (
    <Card className="mb-6 bg-white/70 dark:bg-black/20 backdrop-blur-sm border-0 shadow-lg dark:shadow-2xl border border-white/20 dark:border-white/10">
      <CardContent className="p-4 md:p-6">
        <div className="space-y-4">
          {/* Task Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder="What needs to be done?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              className="text-base md:text-lg py-4 md:py-6 pr-12 border-gray-200 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 bg-white/50 dark:bg-black/20 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl font-medium"
            />
          </div>

          {/* Priority and Add Button Row */}
          <div className="flex gap-3">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="flex-1 px-4 py-3 pr-8 h-12 border border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-400 dark:focus:border-blue-500 focus:ring-blue-400 dark:focus:ring-blue-500 focus:outline-none bg-white/70 dark:bg-gray-800/80 dark:text-gray-100 text-sm md:text-base backdrop-blur-sm shadow-sm dark:shadow-lg transition-all duration-200 hover:bg-white/80 dark:hover:bg-gray-800/90 appearance-none cursor-pointer bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')] bg-no-repeat bg-[length:12px_8px] bg-[position:right_12px_center]"
            >
              <option value="low" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                Low Priority
              </option>
              <option value="medium" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                Medium Priority
              </option>
              <option value="high" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                High Priority
              </option>
            </select>
            <Button
              onClick={addTask}
              disabled={!newTask.trim()}
              className="px-6 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white font-medium shadow-lg rounded-xl active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
