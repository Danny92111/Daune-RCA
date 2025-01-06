'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: '/', label: 'ACASA' },
    { href: '/servicii', label: 'SERVICII' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <div className="md:hidden relative">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 w-48 bg-black border border-gray-700 rounded-lg shadow-lg z-50">
          <nav className="flex flex-col p-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 px-4 text-lg ${
                  pathname === item.href ? 'text-orange-500' : 'text-white'
                } hover:text-orange-400 hover:bg-gray-800 rounded`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

