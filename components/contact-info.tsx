import { Facebook, Twitter, Instagram, Clock } from 'lucide-react'
import Link from 'next/link'

export function ContactInfo() {
  return (
    <div className="grid gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Adresa</h3>
        <p className="text-gray-400">
          Str Liviu Rebreanu 161,<br />
          Dumbravita, Timis<br />
          307160
        </p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <div className="space-y-2 text-gray-400">
          <p>0742 99 77 11</p>
          <p>daune@miaxtim.ro</p>
        </div>
        <div className="flex gap-4 mt-4">
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
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
        <div className="space-y-2 text-gray-400">
          <div className="flex justify-between">
            <span>Mon - Fri</span>
            <span>8:00 am – 8:00 pm</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span>9:00 am – 7:00 pm</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>9:00 am – 1:00 pm</span>
          </div>
        </div>
      </div>
    </div>
  )
}

