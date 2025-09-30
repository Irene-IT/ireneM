'use client'

import Link from 'next/link'
import {
  Service,
  Work,
  Podcasts,
  Tools,
} from '../.contentlayer/generated'

import { useState, useEffect } from 'react'

import { formatDateClient } from '../utils'
import { Icon } from './Icon'
import { AUTHOR_NAME } from '../config'

export default function PostHeader({
  data,
}: {
  data: Service | Work | Podcasts | Tools
}) {

    const [formattedDate, setFormattedDate] = useState('')

  useEffect(() => {
    if (data.date) {
      setFormattedDate(formatDateClient(data.date))
    } else {
      setFormattedDate('')
    }
  }, [data.date])
  
  return (
    <>
      <header className="flex flex-col gap-4 sm:gap-6 mb-12 sm:mt-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center sm:text-left text-balance text-slate-800 dark:text-slate-200">
          {data.title}
        </h1>
        <div className="flex gap-4 items-center text-xs sm:text-base">
          <Link href={`/${data.templateKey}`} className="rounded-lg">
            <span className="flex gap-2 items-center px-3 py-2 rounded-lg text-slate-100 dark:text-slate-800 bg-slate-700 dark:bg-slate-200 hover:underline">
              <Icon name={data.templateKey!} className="size-4" />
              <span className="font-semibold sm:text-sm">
                {data.templateKey &&
                  data.templateKey.charAt(0).toUpperCase() +
                    data.templateKey.slice(1)}
              </span>
            </span>
          </Link>
          <p className="tracking-wide leading-4">
            <small>
              Posted by{' '}
              <Link href={'/about/'} className="font-semibold hover:underline">
                {AUTHOR_NAME}
              </Link>{' '}
              <span className="inline-flex">
                {' '}
                on {formattedDate}
              </span>
            </small>
          </p>
        </div>
      </header>
    </>
  )
}
