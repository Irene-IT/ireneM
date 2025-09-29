import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
  Bars2Icon,
  // CodeBracketIcon,
  FilmIcon,
  FolderOpenIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftEllipsisIcon,
  InboxStackIcon,
  MicrophoneIcon,
  MinusCircleIcon,
  MoonIcon,
  SunIcon,
  StarIcon,
  PlusCircleIcon,
  TagIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
  EnvelopeOpenIcon,
} from '@heroicons/react/24/outline'

export const Icon = ({
  name,
  className,
}: {
  name: string
  className?: string
}) => {
  const icons: { [key: string]: any } = {
    // blog: CodeBracketIcon,
    burger: Bars2Icon,
    close: XMarkIcon,
    service: ClipboardDocumentListIcon,
    home: HomeIcon,
    inspiration: FilmIcon,
    faqPlass: PlusCircleIcon,
    faqMinus: MinusCircleIcon,
    faq: ChatBubbleLeftEllipsisIcon,
    next: ArrowRightIcon,
    podcasts: MicrophoneIcon,
    work: FolderOpenIcon,
    sun: SunIcon,
    moon: MoonIcon,
    prev: ArrowLeftIcon,
    resources: InboxStackIcon,
    tag: TagIcon,
    testimonial: StarIcon,
    tools: WrenchScrewdriverIcon,
    up: ArrowUpCircleIcon,
    contact: EnvelopeOpenIcon,
  }

  const IconComponent = icons[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} />
}
