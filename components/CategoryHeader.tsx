import { Icon } from './Icon'

export default function CategoryHeader({
  title,
  templateKey,
}: {
  title: string
  templateKey: string
}) {
  return (
    <>
    {/* mb-12 */}
      <header className="flex justify-center items-end">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center mt-12 gap-3">
            <Icon name={templateKey} className="size-6 sm:size-8 opacity-60" />
            <span>{title}</span>
          </h1>
        </div>

        {/* <button>Filters</button> */}
      </header>
    </>
  )
}
