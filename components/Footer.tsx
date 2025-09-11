import { Icon } from './Icon'

export default function Footer() {
  let currentYear = new Date().getFullYear()

  const socialMedia = [
    { id: 1, name: 'insta', imgPath: '/media/Insta.png', linkPath: '#' },
    // {id:2,
    //   name: "twit",
    //   imgPath: "/images/Twit.svg",
    //   linkPath: "#",
    // },
    {
      id: 3,
      name: 'linkedin',
      imgPath: '/media/Link.png',
      linkPath: 'https://www.linkedin.com/in/myronovairene',
    },
  ]

  return (
    <footer className="p-4 sm:p-6 bg-slate-200 dark:bg-slate-800">
      <div className="flex items-center justify-between text-xs">
        <p className="text-slate-700 dark:text-slate-300 text-xs">
          Copyright &copy; 2016–{currentYear} Nuno Marques (OSITAKA).
          <br />
          Site modifications &copy; {currentYear} Irene Myronova
          <br />— Licensed under MIT. <a href="/LICENSE">View license</a>
          {/* MIT. <a href="/LICENSE">View license</a> */}
        </p>

        {/* socialMedia */}

        <div className="flex-center gap-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.linkPath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.name}
              className="block size-10 rounded-lg baseBorder baseBgBtn backdrop-filter bg-auto bg-center bg-no-repeat cursor-pointer z-10"
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
    </footer>
  )
}
