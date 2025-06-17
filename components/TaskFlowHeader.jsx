"use client"

import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TaskFlowHeader({ isDarkMode, toggleTheme }) {
  return (
    <div className="text-center mb-6 relative">
      <div className="absolute top-0 right-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="w-12 h-12 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 active:scale-95"
        >
          {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
        </Button>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2 tracking-tight">
        TaskFlow
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg font-medium">Streamline your productivity</p>
    </div>
  )
}
