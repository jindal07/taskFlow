"use client"

import { useState, useEffect } from "react"

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("taskflow-theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    } else {
      // Check system preference
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
  }, [])

  // Save theme preference and apply to document
  useEffect(() => {
    localStorage.setItem("taskflow-theme", isDarkMode ? "dark" : "light")
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return { isDarkMode, toggleTheme }
}
