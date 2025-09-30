import { Contacts } from '../.contentlayer/generated'
import { Icon } from './Icon'

const iconClasses =
  'size-6 sm:size-8 opacity-60 text-slate-600 dark:text-[#a0b6dc]'

export default function ContactsPostCard({ post }: { post: Contacts }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      title={`Open ${post.title}`}
      type={post.title}
      className="w-full flex flex-col gap-2 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-2xl hover:dark:bg-slate-700 transition-shadow dark:transition-colors cursor-pointer group overflow-hidden"
    >
      <div className="flex flex-row items-center gap-2">
        <Icon key={post.title} name={post.title} className={iconClasses} />
        <h2 className="w-full font-bold text-sm sm:text-base text-balance ">
          {post.title}
        </h2>
      </div>

      <p className="text-slate-600 dark:text-[#9fb6db] text-sm font-bold">
        {post.description}
      </p>
      {post.link}
    </a>
  )
}
