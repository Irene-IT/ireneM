'use client' // Marks this as a client component

import Link from 'next/link'
import { Work } from '../.contentlayer/generated'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

export default function WorkPost({
  work,
}: {
  work: Work
}) {
  return (
    <article className="max-w-5xl p-4 sm:p-12 sm:pt-0 m-auto">
      <PostHeader data={work as Work} />

      <div className="blog-post mt-12">
        {work.image && (
          <img
            src={work.image}
            alt={work.title}
            className="mb-6 rounded-lg"
          />
        )}

        <div
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: work.body.html }}
        />
      </div>

      <PostFooter data={work as Work} />
    </article>
  )
}
