'use client'

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

export function SimpleThemeToggle() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('simple-theme')
    if (savedTheme === 'light') {
      setIsLight(true)
      document.body.classList.add('light-mode')
    }
  }, [])

  const toggleTheme = () => {
    if (isLight) {
      // Switch to dark
      document.body.classList.remove('light-mode')
      localStorage.setItem('simple-theme', 'dark')
      setIsLight(false)
    } else {
      // Switch to light
      document.body.classList.add('light-mode')
      localStorage.setItem('simple-theme', 'light')
      setIsLight(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      {isLight ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  )
}
