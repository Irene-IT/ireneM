import { Metadata } from 'next'
import { Work, allWorks } from '../../.contentlayer/generated'
import { pick } from '@contentlayer2/client'
import Layout from '../../components/Layout'
import WorkPostCard from '../../components/cards/WorkPostCard'
import CategoryHeader from '../../components/CategoryHeader'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: `A Selection of Work by ${AUTHOR_NAME} | ${SITE_NAME}`,
    description:
      'Discover examples of my work as a B2B SaaS content writer for IT and tech companies, showcasing writing expertise for cloud computing and business growth.',
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/work/`,
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

export default function WorkPage() {
  //  help of pick get require filter value
  const works = allWorks.map((works) =>
    pick(works, [
      'title',
      'date',
      'slug',
      'description',
      'image',
      'templateKey',
    ])
  )

  return (
    <Layout>
      <section className="md:max-w-[87%] m-auto flex flex-col gap-6 px-4 sm:px-12 mb-32">
        <CategoryHeader
          title="Work"
          templateKey={works[0].templateKey!}
        />

        <div className="grid lg:grid-cols-2 gap-4 w-full justify-center">
          {works.map((post) => {
            return (
              <WorkPostCard key={post.slug} post={post as Work} />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}