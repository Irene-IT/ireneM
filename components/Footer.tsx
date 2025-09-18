import { Icon } from './Icon'

export default function Footer() {
  let currentYear = new Date().getFullYear()

  const socialMedia = [
    { id: 1, name: 'insta', imgPath: '/Insta.svg', linkPath: '#' },
    {
      id: 2,
      name: 'linkedin',
      imgPath: '/Link.svg',
      linkPath: 'https://www.linkedin.com/in/myronovairene',
    },
    {
      id: 3,
      name: 'email',
      imgPath: '/email.svg',
      linkPath: 'mailto:irenemyronova@gmail.com',
    },
  ]

  return (
    <footer className="p-4 sm:p-6 bg-slate-200 dark:bg-slate-800">
      <div className=" flex items-center flex-col-reverse sm:flex-row gap-2 sm:gap-0 justify-between text-xs">
        <p className="text-slate-700 dark:text-slate-300 text-[8px] sm:whitespace-nowrap text-center sm:text-left">
          Copyright &copy; 2016–{currentYear} Nuno Marques (OSITAKA).
          <br />
          Site modifications &copy; {currentYear} Irene Myronova
          <br />— Licensed under MIT. <a href="/LICENSE">View license</a>
        </p>

        <div className="w-full flex flex-row items-center justify-between">
          {/* icons socialMedia */}
          <div className="flex flex-row items-center justify-center gap-2 sm:mx-auto">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.linkPath}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={info.name}
                className="
              flex items-center justify-center w-10 h-10 border rounded-md border-gray-300 dark:border-gray-600 bg-[#62748e] dark:bg-gray-800 transition-colors backdrop-filter bg-auto bg-center bg-no-repeat
              "
                style={{ backgroundImage: `url(${info.imgPath})` }}
              />
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 outline-offset-8 rounded"
          >
            <span>Scroll to Top</span>
            <Icon name="up" className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
