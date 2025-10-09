import { pick } from 'contentlayer2/client'
import Layout from '../components/Layout'
import {
  Service,
  Work,
  allServices,
  allWorks,
  allPages,
} from '../.contentlayer/generated'
import Link from 'next/link'
import ServiceCardPost from '../components/cards/ServicePostCard'
import WorkPostCard from '../components/cards/WorkPostCard'
import TestimonialSlider from '../components/TestimonialSlider'
import FAQSection from '../components/FAQSection'
import ContactsSection from '../components/ContactsSection'

import { Metadata } from 'next'
import { Icon } from '../components/Icon'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../config'

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

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
      url: `${SITE_URL}`,
      title: SEO.title,
      description: SEO.description,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: `${SITE_URL}/og-card.png`,
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
  let services = allServices.map((post: Service) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'description'])
  )
  services = services
    .filter((post) => post.featured === true)
    .sort(
      (a, b) =>
        new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()
    )

  let works = allWorks.map((post: Work) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug'])
  )
  works = works.filter((post) => post.featured === true).slice(0, 6)

  return (
    <Layout>
      <section
        className="w-full h-dvh flex flex-col items-center justify-center overflow-hidden"
        aria-labelledby="about-title"
      >
        {/* SVG background for Hero-DARK */}
        <div className="absolute inset-0 w-dvw h-dvh overflow-hidden z-0 hidden dark:block">
          <svg
            className="w-full h-full"
            viewBox="0 0 1620 877"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <mask
              id="mask0_51_5"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1620"
              height="877"
            >
              <rect width="1620" height="877" fill="url(#paint0_radial_51_5)" />
            </mask>
            <g mask="url(#mask0_51_5)">
              <rect width="1620" height="877" fill="#0E172B" />
              <rect
                width="1620"
                height="877"
                fill="url(#paint1_radial_51_5)"
                fillOpacity="0.7"
              />
              <rect
                width="1620"
                height="877"
                fill="url(#paint2_radial_51_5)"
                fillOpacity="0.5"
              />
              <rect
                width="1620"
                height="877"
                fill="url(#paint3_radial_51_5)"
                fillOpacity="0.6"
              />
              <rect
                width="1620"
                height="877"
                fill="url(#paint4_radial_51_5)"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_51_5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(810) rotate(90) scale(877 1878.84)"
              >
                <stop stopColor="#0E172B" />
                <stop offset="1" stopColor="#0E172B" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_51_5"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(50.4002 835.859 -1544 115.728 759.6 -40.1373)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A0EF0" />
                <stop offset="1" stopColor="#4A0EF0" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_51_5"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(776.7 -265.91 387.703 1407.7 79.2 333.14)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#119DED" />
                <stop offset="1" stopColor="#119DED" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint3_radial_51_5"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(7.20005 -658.252 1215.93 16.5326 1416.6 877)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#64208B" />
                <stop offset="1" stopColor="#64208B" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint4_radial_51_5"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(-534.6 287.985 -258.3 -596.039 1699.2 30.1031)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A64214" />
                <stop offset="1" stopColor="#A64214" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* SVG background for Hero-LIGHT */}
        <div className="absolute inset-0 w-dvw h-dvh overflow-hidden z-0 block dark:hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1620 877"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <mask
              id="mask0_60_27"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1620"
              height="877"
            >
              <rect
                width="1620"
                height="877"
                fill="url(#paint0_radial_60_27)"
              />
            </mask>
            <g mask="url(#mask0_60_27)">
              <rect
                width="1620"
                height="877"
                fill="url(#paint1_radial_60_27)"
                fillOpacity="0.5"
              />
              <rect
                width="1620"
                height="877"
                fill="url(#paint2_radial_60_27)"
                fillOpacity="0.8"
              />
              <rect
                width="1620"
                height="877"
                fill="url(#paint3_radial_60_27)"
                fillOpacity="0.5"
              />
              <rect
                width="1620"
                height="877"
                fill="url(#paint4_radial_60_27)"
                fillOpacity="0.4"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_60_27"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(810) rotate(90) scale(877 1878.84)"
              >
                <stop stopColor="#0E172B" />
                <stop offset="1" stopColor="#0E172B" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_60_27"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(50.4002 835.859 -1544 115.728 759.6 -40.1373)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4400FF" />
                <stop offset="1" stopColor="#4300FF" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_60_27"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(776.7 -265.91 387.703 1407.7 79.2 333.14)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00A2FF" />
                <stop offset="1" stopColor="#00A2FF" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint3_radial_60_27"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(7.20005 -658.252 1215.93 16.5326 1416.6 877)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A200FF" />
                <stop offset="1" stopColor="#A300FF" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="paint4_radial_60_27"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(-534.6 287.985 -258.3 -596.039 1699.2 30.1031)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF0900" />
                <stop offset="1" stopColor="#FF0900" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* content */}
        <div className="flex flex-col gap-12 items-center justify-center">
          <div className="flex flex-col sm:gap-6 max-w-3xl text-center text-balance z-10">
            <h1
              id="about-title"
              className="text-3xl sm:text-5xl font-bold my-12 sm:mt-0"
            >
              {about?.title}
            </h1>
            {/* short description */}
            <p className="text-lg text-slate-600 dark:text-[#a0b6dc]">
              {about?.description}
            </p>
            <ReactMarkdown remarkPlugins={[gfm]}>
              {about?.body.raw || ''}
            </ReactMarkdown>
          </div>

          {/* add button coll to action */}
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center flex-wrap gap-2 z-10">
            <a
              href="mailto:irenemyronova@gmail.com"
              className="px-12 sm:px-6 py-3 text-base font-bold shadow-md hover:shadow-lg rounded-md hover:bg-blue-700
              focus:outline-hidden focus:bg-blue-700 bg-blue-600 text-white transition-colors"
              aria-label="Toggle email"
              role="button"
            >
              Get in touch →
            </a>
          
            <a
              href="#works"
              className="px-12 sm:px-6 py-3 text-base font-bold shadow-md hover:shadow-lg border rounded-md border-blue-300 dark:border-blue-600 hover:border-blue-600 dark:hover:border-blue-300 focus:outline-hidden focus:border-blue-600 text-blue-600 dark:text-white transition-colors"
              aria-label="Toggle look at my work"
              role="button"
            >
              View my work
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4" aria-labelledby="services-title">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <Icon
              name="service"
              className="size-6 sm:size-8 opacity-60 text-slate-600 dark:text-[#a0b6dc]"
            />
            <span id="services-title">Services</span>
          </h2>
          <Link href="/service">View all &rarr;</Link>
        </div>
        <div className="grid xl:grid-cols-2 gap-4 flex-wrap">
          {services.map((post) => (
            <ServiceCardPost key={post.slug} post={post as Service} />
          ))}
        </div>
      </section>

      <section
        id="works"
        className="flex flex-col gap-4"
        aria-labelledby="works-title"
      >
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <Icon
              name="work"
              className="size-6 sm:size-8 opacity-60  text-slate-600 dark:text-[#a0b6dc]"
            />
            <span id="works-title">My works</span>
          </h2>
          <Link href="/work">View all &rarr;</Link>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 flex-wrap">
          {works.map((post) => (
            <WorkPostCard key={post.slug} post={post as Work} />
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="scroll-mt-30 flex flex-col items-center justify-center gap-8"
        aria-labelledby="testimonials-title"
      >
        <h2
          id="testimonials-title"
          className="text-2xl sm:text-3xl font-bold flex items-center gap-3"
        >
          What my clients say
        </h2>
        <div className="flex min-h-[350px] w-full justify-center items-center">
          <TestimonialSlider />
        </div>
      </section>
      <section
        id="faq"
        className="scroll-mt-30 flex flex-col items-center justify-center gap-4"
        aria-labelledby="faq-title"
      >
        <h2 id="faq-title" className="text-2xl sm:text-3xl font-bold mb-3">
          FAQ
        </h2>
        <FAQSection />
      </section>

      <section
        id="contacts"
        className="scroll-mt-30 flex flex-col items-center justify-center gap-4"
        aria-labelledby="contacts-title"
      >
        <h2 id="contacts-title" className="text-2xl sm:text-3xl font-bold mb-3">
          Contacts
        </h2>
        <ContactsSection />
      </section>
    </Layout>
  )
}
