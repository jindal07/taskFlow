"use client"

import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FilterSection({
  filter,
  setFilter,
  showFilters,
  setShowFilters,
  tasks,
  activeCount,
  completedCount,
}) {
  return (
    <div className="mb-6">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="w-full justify-between bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-xl py-3"
        >
          <span className="capitalize font-medium">Filter: {filter}</span>
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className={`${showFilters ? "block" : "hidden"} md:block`}>
        <div className="flex flex-col md:flex-row gap-2 md:justify-center">
          {["all", "active", "completed"].map((filterType) => (
            <Button
              key={filterType}
              variant={filter === filterType ? "default" : "outline"}
              onClick={() => {
                setFilter(filterType)
                setShowFilters(false)
              }}
              className={`capitalize transition-all duration-300 py-3 rounded-xl font-medium ${
                filter === filterType
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg"
                  : "hover:bg-gray-50 dark:hover:bg-white/10 bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300"
              }`}
            >
              {filterType} {filterType === "all" && `(${tasks.length})`}
              {filterType === "active" && `(${activeCount})`}
              {filterType === "completed" && `(${completedCount})`}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
