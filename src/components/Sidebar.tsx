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
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Start', href: '/', icon: HomeIcon },
  { name: 'Team', href: '/team', icon: UserGroupIcon },
  { name: 'Whitepaper', href: '/whitepaper', icon: DocumentTextIcon },
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
        fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-700 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white">Gaea Network</h1>
          <button
            onClick={closeSidebar}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            aria-label="Close sidebar"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
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
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
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

        {/* Sidebar footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
          <div className="text-xs text-gray-400 text-center">
            © 2024 Gaea.network
          </div>
        </div>
      </div>
    </>
  )
}
