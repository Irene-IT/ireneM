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
  // InboxStackIcon,
  IdentificationIcon,
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
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  AtSymbolIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline'

export const Icon = ({
  name,
  className,
}: {
  name: string
  className?: string
}) => {
  const icons: { [key: string]: any } = {
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
    testimonial: StarIcon,
    tools: WrenchScrewdriverIcon,
    up: ArrowUpCircleIcon,
    contact: IdentificationIcon,
    Email: EnvelopeIcon,
    Phone: DevicePhoneMobileIcon,
    LinkedIn: AtSymbolIcon,
    Instagram: PhotoIcon,
  }

  const IconComponent = icons[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} />
}
