import { pick } from 'contentlayer2/client'
import Layout from '../components/Layout'
import {
  Blog,
  Inspiration,
  Podcasts,
  Resources,
  Tools,
  allBlogs,
  allInspirations,
  allPages,
  allPodcasts,
  allResources,
  allTools,
} from '../.contentlayer/generated'
import Link from 'next/link'
import BlogCardPost from '../components/cards/BlogPostCard'
import InspirationPostCard from '../components/cards/InspirationPostCard'
import PodcastPostCard from '../components/cards/PodcastPostCard'
import ToolsPostCard from '../components/cards/ToolsPostCard'
import { Metadata } from 'next'
import { Icon } from '../components/Icon'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../config'

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

// Get page data
// const home = allPages.find((home) => home?.slug === 'home')

// for SEO
const home = allPages.find((home) => home?.slug === 'home')
// for content on the homepage
const about = allPages.find((page) => page?.slug === 'about')

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: home?.title || 'Home',
    description: home?.description || `Welcome to the Homepage of ${SITE_NAME}`,
    image: `${SITE_URL}/og-card.png`,
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      url: `${SITE_URL}/`,
      title: SEO.title,
      description: SEO.description,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: SEO.image,
          width: 1600,
          height: 800,
          alt: `${SITE_NAME}`,
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

// Get all posts and pick specific fields
export default function Home() {
  let blogs = allBlogs.map((post: Blog) =>
    pick(post, ['featured', 'title', 'date', 'slug'])
  )
  blogs = blogs
    .filter((post) => post.featured === true)
    .sort(
      (a, b) =>
        new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()
    )

  let inspirations = allInspirations.map((post: Inspiration) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug'])
  )
  inspirations = inspirations
    .filter((post) => post.featured === true)
    .slice(0, 6)

  let podcasts = allPodcasts.map((post: Podcasts) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug'])
  )
  podcasts = podcasts.filter((post) => post.featured === true).slice(0, 4)

  let tools = allTools.map((post: Tools) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'description'])
  )
  tools = tools.filter((post) => post.featured === true).slice(0, 6)

  let resources = allResources.map((post: Resources) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'description'])
  )
  resources = resources.filter((post) => post.featured === true).slice(0, 4)

  return (
    <Layout>
      <div className="md:max-w-[87%] m-auto px-4 md:px-12 flex flex-col gap-24 xl:gap-32 pb-24 xl:pb-36">
        <section className="h-[80vh] flex flex-col items-center justify-evenly">
          <div className="flex flex-col sm:gap-6 max-w-3xl text-center">
            <h1 className="text-3xl sm:text-5xl font-bold my-12 sm:mt-0 text-center">
              {about?.title}
            </h1>
            {/* short description */}
            <p className="text-center text-balance text-lg text-gray-600">
              {about?.description}
            </p>
            <ReactMarkdown remarkPlugins={[gfm]}>
              {about?.body.raw || ''}
            </ReactMarkdown>
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

        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
              <Icon name="blog" className="size-6 sm:size-8 opacity-60" />
              <span>Services</span>
            </h2>
            <Link href="/services">View all &rarr;</Link>
          </div>
          <p className="text-center text-balance text-lg text-gray-600">
            Here are some of my work samples. Some of my clients, as well as my
            partners’ clients, require me to sign a non-disclosure agreement
            (NDA) before starting a new project. The following samples are not
            subject to any legal restrictions on public sharing.
          </p>
          <div className="grid xl:grid-cols-2 gap-4 flex-wrap">
            {blogs.map((post) => (
              <BlogCardPost key={post.slug} post={post as Blog} />
            ))}
          </div>
        </section>










        {/* <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
              <Icon name="blog" className="size-6 sm:size-8 opacity-60" />
              <span>Code Blog</span>
            </h2>
            <Link href="/blog">View all &rarr;</Link>
          </div>
          <div className="grid xl:grid-cols-2 gap-4 flex-wrap">
            {blogs.map((post) => (
              <BlogCardPost key={post.slug} post={post as Blog} />
            ))}
          </div>
        </section> */}

        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
              <Icon
                name="inspiration"
                className="size-6 sm:size-8 opacity-60"
              />
              <span>Inspiration</span>
            </h2>
            <Link href="/inspiration">View all &rarr;</Link>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 flex-wrap">
            {inspirations.map((post) => (
              <InspirationPostCard key={post.slug} post={post as Inspiration} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
              <Icon name="podcasts" className="size-6 sm:size-8 opacity-60" />
              <span>Podcasts</span>
            </h2>
            <Link href="/podcasts">View all &rarr;</Link>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 flex-wrap">
            {podcasts.map((post) => (
              <PodcastPostCard key={post.slug} post={post as Podcasts} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
              <Icon name="tools" className="size-6 sm:size-8 opacity-60" />
              <span>Tools</span>
            </h2>
            <Link href="/tools">View all &rarr;</Link>
          </div>
          <div className="grid xl:grid-cols-2 gap-4 flex-wrap">
            {tools.map((post) => (
              <ToolsPostCard key={post.slug} post={post as Tools} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
