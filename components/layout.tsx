'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Footer } from './footer'
import { MobileMenu } from './mobile-menu'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="flex flex-col">
                <span className="text-orange-500 text-2xl font-bold">DAUNE RCA</span>
                <span className="text-orange-500 text-3xl">0742 99 77 11</span>
                <span className="text-sm text-gray-400">BIROU DAUNE AUTO</span>
              </Link>
            </div>
            <nav className="hidden md:flex gap-8">
              <Link 
                href="/" 
                className={`hover:text-orange-400 ${
                  pathname === '/' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                ACASA
              </Link>
              <Link 
                href="/servicii" 
                className={`hover:text-orange-400 ${
                  pathname === '/servicii' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                SERVICII
              </Link>
              <Link 
                href="/contact" 
                className={`hover:text-orange-400 ${
                  pathname === '/contact' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                CONTACT
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-4">
                <Link href="#" className="text-blue-500 hover:text-blue-400">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-300">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-pink-500 hover:text-pink-400">
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

