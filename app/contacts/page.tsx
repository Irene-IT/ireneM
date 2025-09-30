import { Metadata } from 'next'
import { pick } from '@contentlayer2/client'
import {
  Contacts as ContactType,
  allContacts,
} from '../../.contentlayer/generated'
import Layout from '../../components/Layout'
import ContactsPostCard from '../../components/cards/ContactPostCard'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'
import CategoryHeader from '../../components/CategoryHeader'


import { Icon } from '../../components/Icon'
const iconClasses = 'size-6 sm:size-8 opacity-60 text-slate-600 dark:text-[#a0b6dc]'

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: `Contacts ${AUTHOR_NAME} | ${SITE_NAME}`,
    description:
      'Welcome to the contacts page',
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/contacts/`,
      title: SEO.title,
      description: SEO.description,
      authors: `${AUTHOR_NAME}`,
      siteName: `${SITE_NAME}`,
    },
  }
}

export default function Contacts() {
  //  help of pick get require filter value
  const contacts = allContacts.map((contacts) =>
    pick(contacts, [
      'title',
      'description',
      'link',
      'templateKey',
    ])
  )


  return (
    <Layout>
       <section
          id="contacts"
          className="scroll-mt-30 h-fit flex flex-col gap-4 mb-6"
          aria-labelledby="contacts-header"
        >

        <div className="flex justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            {/* mt-12 */}
            <Icon name="contact" className={iconClasses} />
            <span>Contacts</span>
          </h2>
        </div>

         <div className="grid md:grid-cols-2 gap-4 flex-wrap">
          {contacts.map((contactsItem) => {
            return (
              <ContactsPostCard
                key={contactsItem.title}
                post={contactsItem as ContactType}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

