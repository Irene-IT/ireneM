import { Metadata } from 'next'
import { allPages, Page } from '../../.contentlayer/generated'
import Layout from '../../components/Layout'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'

// Get page data
const about = allPages.find((about: Page) => about?.slug === 'about') as Page

export function generateMetadata(): Metadata {
  return {
    title: about?.title || 'About',
    description: about?.description || 'Welcome to the about page',
    openGraph: {
      url: `${SITE_URL}/about/`,
      title: `${about?.title}`,
      description: `${about?.description}`,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: `${SITE_URL}/og-card.png`,
          width: 1600,
          height: 800,
          alt: 'banner',
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

export default function About() {
  return (
    <Layout>
      <section className="flex flex-col gap-12 my-24 mx-auto max-w-5xl text-center">
        <div className="flex flex-col sm:gap-6 max-w-3xl text-center">
          <h1 className="text-3xl sm:text-5xl font-bold my-12 sm:mt-0 text-center">
            {about?.title}
          </h1>
          {/* short description */}
          <p className="text-center text-balance text-lg text-gray-600">
            {about?.description}
          </p>
          <ReactMarkdown remarkPlugins={[gfm]}>{about?.body.raw}</ReactMarkdown>
        </div>

        {/* add button coll to action */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center flex-wrap gap-2">
          <a
            href="mailto:irenemyronova@gmail.com"
            className="px-12 sm:px-6 py-3 text-xs font-bold shadow-md hover:shadow-lg border rounded-md border-gray-300 dark:border-gray-600 hover:bg-blue-700 bg-blue-600 text-white transition-colors"
            aria-label="Toggle email"
            type="button"
          >
            Get in touch →
          </a>
          <a
            href="#work"
            className="px-12 sm:px-6 py-3 text-xs font-bold shadow-md hover:shadow-lg border rounded-md border-blue-300 dark:border-blue-600 hover:border-blue-600 dark:hover:border-blue-300  text-blue-600 dark:text-white transition-colors"
            aria-label="Toggle look at my work"
            type="button"
          >
            View my work
          </a>
        </div>
      </section>
    </Layout>
  )
}
