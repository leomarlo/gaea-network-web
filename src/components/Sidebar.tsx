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
  InformationCircleIcon,
} from '@heroicons/react/24/outline'
import { SimpleThemeToggle } from './SimpleThemeToggle'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

const navigation = [
  { name: 'Start', href: '/', icon: HomeIcon },
  { name: 'Team', href: '/team', icon: UserGroupIcon },
  { name: 'Whitepaper', href: '/whitepaper', icon: DocumentTextIcon },
  { name: 'Project Plan', href: '/project-plan', icon: ClipboardDocumentListIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
  { name: 'Impressum', href: '/impressum', icon: InformationCircleIcon },
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
        {/* Sidebar header: logo + GitHub link */}
        <div className="flex flex-col items-center p-6 border-b border-gray-700 theme-border-standard gap-3">
          <span className="text-white font-semibold text-sm tracking-wide text-center">The Gaea Network</span>
          <img
            src="/logo.png"
            alt="Gaea Network Logo"
            className="w-24 h-24 flex-shrink-0"
          />
          <a
            href="https://github.com/gaea-net/model"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="GitHub repository"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
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

        {/* Theme Toggle */}
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
            © 2026 Gaea.network
          </div>
        </div>
      </div>
    </>
  )
}
