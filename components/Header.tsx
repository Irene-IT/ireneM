'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Icon } from './Icon'
// import { useTheme } from 'next-themes'
import { ModeToggle } from './ModeToggle'

const menuItemClasses =
  'w-full flex items-center gap-3 p-3 px-6 text-sm tracking-wide text-slate-700 dark:text-slate-700 hover:text-slate-800 dark:hover:text-slate-950 hover:font-semibold transition-colors transition-all border-b border-b-slate-200 dark:border-b-slate-300 hover:bg-slate-100 dark:hover:bg-white'

const iconClasses = 'size-4 opacity-70'

export default function Header() {
  const [navbar, setNavbar] = useState(false)

  // const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null // Avoid hydration mismatch

  return (
    <header className="flex p-4 sm:p-6 fixed w-full z-10 pointer-events-none bg-slate-200 dark:bg-slate-800">
      <nav className="flex w-full justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 items-center font-bold opacity-80 hover:opacity-100 transition-opacity rounded outline-offset-8 pointer-events-auto"
        >
          {/* Logo  */}
          <Icon name="home" className="size-4"/>
          Home
        </Link>

        <div className="relative flex items-center gap-2 pointer-events-auto">
          {/* Theme Toggle not work switch */}
          <ModeToggle />

          {/* Burger Menu */}
          <button
            // className="p-2 text-xs uppercase font-bold rounded-lg bg-white dark:bg-slate-300 shadow-md hover:shadow-lg transition-shadow"
            className="p-2 text-xs uppercase font-bold shadow-md hover:shadow-lg border rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
            aria-label="Toggle menu"
            type="button"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <span aria-label="Close menu" className="w-4 block">
                <Icon name="close" className="size-4" />
              </span>
            ) : (
              <span className="flex gap-2 items-center group text-xs">
                Menu
                <Icon name="burger" className="size-4" />
              </span>
            )}
          </button>

          {/* Menu */}
          <div className={`${navbar ? '' : 'hidden'}`}>
            <menu className="min-w-48 flex flex-col absolute right-4 sm:right-6 py-3 bg-white dark:bg-slate-100 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/"
                  className={menuItemClasses}
                >
                  <Icon name="home" className={iconClasses} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/blog"
                  className={menuItemClasses}
                >
                  <Icon name="blog" className={iconClasses} />
                  Code Blog
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/tags"
                  className={menuItemClasses}
                >
                  <Icon name="tag" className={iconClasses} />
                  All Tags
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/inspiration"
                  className={menuItemClasses}
                >
                  <Icon name="inspiration" className={iconClasses} />
                  Inspiration
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/podcasts"
                  className={menuItemClasses}
                >
                  <Icon name="podcasts" className={iconClasses} />
                  Podcasts
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/tools"
                  className={menuItemClasses}
                >
                  <Icon name="tools" className={iconClasses} />
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setNavbar(!navbar)}
                  href="/resources"
                  className={menuItemClasses}
                >
                  <Icon name="resources" className={iconClasses} />
                  Resources
                </Link>
              </li>
            </menu>
          </div>
        </div>
      </nav>
    </header>
  )
}
