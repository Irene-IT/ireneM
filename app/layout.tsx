'use client'

import '../styles/index.css'
import '../styles/prism-a11y-dark.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AnimatePresence } from 'framer-motion'
import NetlifyIdentityRedirect from '../components/NetlifyIdentityRedirect'

import { ThemeProvider } from '../components/Theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="keywords"
          content="B2B content writer, B2B SaaS content writer, saas content writer, content writer for IT, content writer for tech, writing expertise for cloud computing"
        />
        <meta name="author" content="Irene Myronova" />
        <meta
          name="copyright"
          content="© 2025 Irene Myronova | B2B SaaS Content Writer app. All Rights Reserved"
        />
        <meta name="robots" content="index" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* <title>Irene Myronova | B2B SaaS Content Writer</title> */}
        {/* <script src="https://cdn.tailwindcss.com"></script> */}

        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </head>
      <body
        suppressHydrationWarning
        className="flex flex-col min-h-screen  bg-[#fafafa] text-slate-900 dark:text-slate-50 dark:bg-slate-900 hyphens-auto"
      >
        {/* ThemeProvider burns all the content */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            <AnimatePresence
              mode="wait"
              initial={true}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              {children}
            </AnimatePresence>
          </main>
          <Footer />
          <NetlifyIdentityRedirect />
        </ThemeProvider>
      </body>
    </html>
  )
}
