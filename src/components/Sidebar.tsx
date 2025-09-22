'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  UserGroupIcon, 
  Bars3Icon, 
  XMarkIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { SimpleThemeToggle } from './SimpleThemeToggle'

const navigation = [
  { name: 'Start', href: '/', icon: HomeIcon },
  { name: 'Team', href: '/team', icon: UserGroupIcon },
  { name: 'Whitepaper', href: '/whitepaper', icon: DocumentTextIcon },
  { name: 'Project Plan', href: '/project-plan', icon: ClipboardDocumentListIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 lg:hidden"
        aria-label="Open sidebar"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-700 z-50 transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        {/* Sidebar header with centered logo */}
        <div className="flex items-center justify-center p-6 border-b border-gray-700 theme-border-standard">
          {/* Gaea Network Logo - Centered and Large */}
          <img 
            src="/logo.png" 
            alt="Gaea Network Logo" 
            className="w-24 h-24 flex-shrink-0"
          />
          {/* Mobile close button */}
          <button
            onClick={closeSidebar}
            className="lg:hidden absolute top-6 right-6 p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            aria-label="Close sidebar"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3 flex-1">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeSidebar}
                    className={`
                      flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                      ${isActive 
                        ? 'bg-gray-800 text-white' 
                        : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                      }
                    `}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Theme Toggle - positioned at bottom */}
        <div className="px-3 pb-4">
          <div className="flex items-center justify-between border-t border-gray-700 pt-4 theme-border-standard">
            <span className="text-xs font-medium text-gray-400">
              Theme
            </span>
            <SimpleThemeToggle />
          </div>
        </div>

        {/* Sidebar footer */}
        <div className="p-6 border-t border-gray-700 mt-auto theme-border-standard">
          <div className="text-xs text-gray-400 text-center">
            © 2024 Gaea.network
          </div>
        </div>
      </div>
    </>
  )
}
