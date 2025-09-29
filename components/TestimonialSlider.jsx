'use client'
import { allTestimonials } from '../.contentlayer/generated'
import { Carousel } from './ui/carousel'

export default function TestimonialSlider() {
  const slideData = allTestimonials
    .filter((t) => t.featured)
    .map((t) => ({
      title: t.title,
      role: t.role ?? '',
      avatar: t.avatar ?? '/media/testimonial__placeholder-avatar.png',
      testimonial: t.testimonial,
      src: t.src ?? '',
    }))
  return (
    <div className="relative overflow-hidden w-full h-full pb-20">
      <Carousel slides={slideData} />
    </div>
  )
}
