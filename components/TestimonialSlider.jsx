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
      // testimonial: t.body.raw,
      testimonial: t.testimonial,
      src: t.src ?? '',
    }))
console.log(slideData)
  return (
    // <div className="w-full h-full transition-transform duration-[0.3s] ease-[ease-in-out] text-center">
    <div className="relative overflow-hidden w-full h-full pb-20">
      <Carousel slides={slideData} />
    </div>
  )
}
