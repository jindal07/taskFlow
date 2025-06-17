"use client"

import { useState } from "react"

export function useTasks() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [priority, setPriority] = useState("medium")

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date(),
        priority: priority,
      }
      setTasks([task, ...tasks])
      setNewTask("")
      setPriority("medium")
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const completedCount = tasks.filter((task) => task.completed).length
  const activeCount = tasks.filter((task) => !task.completed).length

  return {
    tasks,
    newTask,
    setNewTask,
    priority,
    setPriority,
    addTask,
    toggleTask,
    deleteTask,
    completedCount,
    activeCount,
  }
}
