'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  // const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex flex-col min-h-screen">
    
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


