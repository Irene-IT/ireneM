import Link from 'next/link'
import { Service } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'

// const cardClasses =
//   'px-4 py-4 w-full flex flex-col gap-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700 transition-shadow dark:transition-colors'

const cardClasses =
  'w-full flex gap-3 sm:gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700 transition-shadow dark:transition-colors'

export default function ServicePostCard({ post }: { post: Service }) {
  return (
    // <Link
    //   key={post.slug}
    //   href={`/service/${post.slug}/`}
    //   className={cardClasses + ' sm:p-6'}
    // >
    //   <h3 className="font-bold text-lg text-balance">{post.title}</h3>
    //   {post.description && (
    //     <p className="text-sm text-balance font-light tracking-wide text-ellipsis line-clamp-3 overflow-hidden">
    //       {post.description}
    //     </p>
    //   )}
    //   <span className="mt-auto text-slate-600 dark:text-[#9fb6db] text-sm font-bold">
    //     Read more &rarr;
    //   </span>
    // </Link>
    <Link
      key={post.slug}
      href={`/service/${post.slug}/`}
      className={cardClasses + ' items-center group overflow-hidden'}
    >
      <figure className="overflow-hidden size-16 sm:size-24 shrink-0 rounded-xl shadow-lg bg-slate-200 dark:bg-slate-700">
        <ExportedImage
          src={post.image ?? '/media/services__placeholder-post.png'}
          alt={post.title ?? 'Service image'}
          width={400}
          height={400}
          className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </figure>
      <div className="p-2 sm:p-4 flex flex-col gap-2">
        <h2 className="font-bold text-balance text-sm sm:text-base">
          {post.title}
        </h2>
        {/* <span className="hidden sm:flex mt-auto text-slate-600 dark:text-[#9fb6db] text-sm font-bold">
          Read more &rarr;
        </span> */}
        <span className="mt-auto text-slate-600 dark:text-[#9fb6db] text-sm font-bold">
          View more &rarr;
        </span>

        {/* <h3 className="font-bold text-lg text-balance">{post.title}</h3>
       {post.description && (
        <p className="text-sm text-balance font-light tracking-wide text-ellipsis line-clamp-3 overflow-hidden">
          {post.description}
        </p>
      )}
      <span className="mt-auto text-slate-600 dark:text-[#9fb6db] text-sm font-bold">
        Read more &rarr;
      </span> */}
      </div>
    </Link>
  )
}
