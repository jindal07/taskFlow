"use client"

import { useState, useEffect } from "react"

export function useTasks() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [priority, setPriority] = useState("medium")

  // Load tasks from localStorage on component mount
  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem("taskflow-tasks")
      if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks)
        // Convert createdAt strings back to Date objects
        const tasksWithDates = parsedTasks.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt),
        }))
        setTasks(tasksWithDates)
      }
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error)
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    try {
      localStorage.setItem("taskflow-tasks", JSON.stringify(tasks))
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error)
    }
  }, [tasks])

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

  const clearAllTasks = () => {
    setTasks([])
  }

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed))
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
    clearAllTasks,
    clearCompletedTasks,
    completedCount,
    activeCount,
  }
}
