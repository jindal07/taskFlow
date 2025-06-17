"use client"

import { useTheme } from "./hooks/useTheme"
import { useTasks } from "./hooks/useTasks"
import { useFilter } from "./hooks/useFilter"
import AnimatedBackground from "./components/AnimatedBackground"
import TaskFlowHeader from "./components/TaskFlowHeader"
import StatsCards from "./components/StatsCards"
import AddTaskForm from "./components/AddTaskForm"
import FilterSection from "./components/FilterSection"
import TasksList from "./components/TasksList"
import Footer from "./components/Footer"
import TaskManagement from "./components/TaskManagement"

export default function TaskFlow() {
  const { isDarkMode, toggleTheme } = useTheme()
  const {
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
  } = useTasks()
  const { filter, setFilter, showFilters, setShowFilters, filteredTasks } = useFilter(tasks)

  return (
    <div className="min-h-screen transition-colors duration-300 relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 px-4 py-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <TaskFlowHeader isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          <StatsCards tasks={tasks} activeCount={activeCount} completedCount={completedCount} />

          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            priority={priority}
            setPriority={setPriority}
            addTask={addTask}
          />

          <FilterSection
            filter={filter}
            setFilter={setFilter}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            tasks={tasks}
            activeCount={activeCount}
            completedCount={completedCount}
          />

          <TaskManagement
            tasks={tasks}
            clearAllTasks={clearAllTasks}
            clearCompletedTasks={clearCompletedTasks}
            completedCount={completedCount}
          />

          <TasksList filteredTasks={filteredTasks} filter={filter} toggleTask={toggleTask} deleteTask={deleteTask} />

          <Footer />
        </div>
      </div>

      {/* Mobile Safe Area */}
      <div className="h-safe-area-inset-bottom md:hidden"></div>
    </div>
  )
}
