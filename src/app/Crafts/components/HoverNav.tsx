import { useState } from 'react'


export default function FloatingNavbar() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Version', href: '#' },
    { name: 'Blog', href: '#' }
  ]

  return (
    <div className="flex h-full items-center justify-center bg-[#1d1e1d]">
      <nav className="relative rounded-full bg-gray-900/50 p-1.5">
        <div
          className="absolute left-0 top-0 transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(${(hoverIndex ?? activeIndex) * 100}%)`,
            width: `${100 / navItems.length}%`,
            height: '100%',
            padding: '0.25rem',
          }}
        >
          <div className="h-full w-full rounded-full bg-white shadow-lg" />
        </div>
        <ul className="relative flex items-center gap-1">
          {navItems.map((item, index) => (
            <li 
              key={item.name} 
              className="relative"
              style={{ width: `${100 / navItems.length}%` }}
            >
              <a
                href={item.href}
                className={`relative flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150
                  ${
                    activeIndex === index
                      ? 'text-teal-800'
                      : 'text-gray-400'
                  }`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveIndex(index)
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

