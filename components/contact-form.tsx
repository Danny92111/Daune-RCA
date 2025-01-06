'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">
        Trimiteti un mesaj si in cel mai scurt timp va contactam
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Prenume *"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
        <Input
          placeholder="Nume *"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
        />
      </div>
      <Input
        placeholder="Email *"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Input
        placeholder="Telefon"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <Textarea
        placeholder="Mesajul dumneavoastra"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="min-h-[100px]"
      />
      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
        Trimite
      </Button>
    </form>
  )
}

