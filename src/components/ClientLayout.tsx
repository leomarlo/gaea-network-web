'use client'

import { ThemeProvider } from '@/components/ThemeProvider'
import { Sidebar } from '@/components/Sidebar'

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider>
      <div className="flex h-screen transition-colors duration-200" style={{backgroundColor: 'var(--bg-secondary, #1f2937)'}}>
        <Sidebar />
        <main className="flex-1 overflow-auto lg:ml-0">
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}
