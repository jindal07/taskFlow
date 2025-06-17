"use client"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Light mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:opacity-0 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 md:opacity-30">
          <div className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-10 w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Dark mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black opacity-0 dark:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-full opacity-15 md:opacity-20">
          <div className="absolute top-10 left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-10 w-48 h-48 md:w-72 md:h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 md:w-72 md:h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        {/* Subtle grid pattern - lighter on mobile */}
        <div
          className="absolute inset-0 opacity-5 md:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
    </div>
  )
}
