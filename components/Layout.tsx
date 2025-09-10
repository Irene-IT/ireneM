'use client'

// import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

// function useTheme() {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light')

//   useEffect(() => {
//     const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
//     if (saved) {
//       setTheme(saved)
//     } else {
//       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
//       setTheme(prefersDark ? 'dark' : 'light')
//     }
//   }, [])

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light'
//     setTheme(newTheme)
//     localStorage.setItem('theme', newTheme)
//   }

//   return { theme, toggleTheme }
// }

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  // const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Кнопка перемикання теми */}
      {/* <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 px-3 py-2 rounded-lg bg-slate-700 text-slate-100 dark:bg-slate-200 dark:text-slate-900 z-50"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button> */}

      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 30 }}
        className="w-full max-w-full flex-1"
      >
        <div className="pt-24 text-slate-900 dark:text-slate-50 dark:bg-slate-900">
          {children}
        </div>
      </motion.main>
    </div>
  )
}

export default Layout


