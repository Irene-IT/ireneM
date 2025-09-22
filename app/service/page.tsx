import { Metadata } from 'next'
import { allServices, Service } from '../../.contentlayer/generated'
import { pick } from '@contentlayer2/client'
import { sortByDate } from '../../utils'
import { extractUniqueTags } from '../../utils/tags'
import Layout from '../../components/Layout'
import CategoryHeader from '../../components/CategoryHeader'
import ServicePostCard from '../../components/cards/ServicePostCard'
import { SITE_NAME, SITE_URL } from '../../config'

export function generateMetadata(): Metadata {
  const SEO = {
    title: 'B2B Content Writing Services | Articles, Blogs & White Papers',
    description:
      'Boost your business growth with expert B2B content writing services. I create engaging articles, blogs, guides, and white papers that highlight your cloud computing, finance, and technology solutions',
    image: `${SITE_URL}/og-card.png`,
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      url: `${SITE_URL}/services/`,
      title: SEO.title,
      description: SEO.description,
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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ page?: string }>
}) {
  const { page } = await params
  const currentPage = parseInt(page || '1', 10)

  // Pick relevant fields from blogs and sort by date
  let services = allServices.map((service) =>
    pick(service, ['title', 'date', 'slug', 'description', 'templateKey'])
  )
  services = services.sort(sortByDate)

  // Group blogs by year
  const groupedServices = services.reduce((acc: Record<string, Service[]>, service) => {
    const year = new Date(service.date!).getFullYear().toString()
    if (!acc[year]) acc[year] = []
    acc[year].push(service as Service)
    return acc
  }, {})

  const uniqueTags = extractUniqueTags(allServices)

  return (
    <Layout>
      <section className="md:max-w-[87%] m-auto flex flex-col gap-6 px-4 sm:px-12 mb-32">
        <CategoryHeader title="Service" templateKey={services[0].templateKey!} />

        <div className="flex gap-8 items-start">
          <div className="flex flex-wrap gap-4 w-full">
            {Object.keys(groupedServices)
              .sort((a, b) => parseInt(b) - parseInt(a))
              .map((year) => (
                <div key={year}>
                  <h2 className="text-2xl mb-8 text-slate-700 dark:text-slate-300">
                    {year}
                  </h2>
                  <div
                    className={`grid ${
                      groupedServices[year].length < 2
                        ? 'xl:grid-cols-2'
                        : 'xl:grid-cols-3'
                    } gap-4 mb-24`}
                  >
                    {groupedServices[year].map((post) => (
                      <ServicePostCard key={post.slug} post={post as Service} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
