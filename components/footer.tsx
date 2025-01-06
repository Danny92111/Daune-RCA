import { Facebook, Twitter, Instagram, TwitterIcon as TikTok } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from './contact-form'

export function Footer() {
  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex flex-col mb-8">
              <span className="text-orange-500 text-2xl font-bold">DAUNE RCA</span>
              <span className="text-orange-500 text-3xl">0742 99 77 11</span>
              <span className="text-sm text-gray-600">BIROU DAUNE AUTO</span>
            </div>
            <h2 className="text-2xl font-bold mb-8">CONTACT US</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ADRESA</h3>
              <p>
                Str Liviu Rebreanu 161<br />
                Dumbravita, Timis
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">TELEFON</h3>
              <p>0742 99 77 11</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">EMAIL</h3>
              <p>daune@miaxtim.ro</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-700">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-pink-600 hover:text-pink-700">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-black hover:text-gray-800">
                <TikTok className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600 mt-8">
          © 2014 by MXT. Powered and secured by MXT
        </div>
      </div>
    </footer>
  )
}

