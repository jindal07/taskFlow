"use client"

import { useState } from "react"

export function useFilter(tasks) {
  const [filter, setFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  return {
    filter,
    setFilter,
    showFilters,
    setShowFilters,
    filteredTasks,
  }
}
