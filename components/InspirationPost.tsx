'use client' // Marks this as a client component

import Link from 'next/link'
import { Inspiration } from '../.contentlayer/generated'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

export default function InspirationPost({
  inspiration,
}: {
  inspiration: Inspiration
}) {
  return (
    <article className="max-w-5xl p-4 sm:p-12 sm:pt-0 m-auto">
      <PostHeader data={inspiration as Inspiration} />

      <div className="blog-post mt-12">
        {inspiration.image && (
          <img
            src={inspiration.image}
            alt={inspiration.title}
            className="mb-6 rounded-lg"
          />
        )}

        <div
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: inspiration.body.html }}
        />
      </div>

      <PostFooter data={inspiration as Inspiration} />
    </article>
  )
}
