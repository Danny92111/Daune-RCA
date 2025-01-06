import Layout from '@/components/layout'
import { ConsultationServices } from '@/components/consultation-services'
import { DetailedServices } from '@/components/detailed-services'

export default function ServiciiPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <ConsultationServices />
          <DetailedServices />
        </div>
      </div>
    </Layout>
  )
}

