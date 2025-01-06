import Layout from '@/components/layout'
import { ContactForm } from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'
import { GoogleMap } from '@/components/google-map'

export default function ContactPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        <div className="relative h-[300px] w-full">
          <img
            src="/placeholder.svg"
            alt="Car insurance claim process"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-bold mb-8">CONTACT US</h1>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <GoogleMap />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

