import { Car, Wrench, Clock, FileText, Shield, Truck } from 'lucide-react'

const SERVICES = [
  {
    title: 'CONSTATARI DAUNE',
    icon: Car,
  },
  {
    title: 'MASINA LA SCHIMB',
    icon: Wrench,
  },
  {
    title: 'REGIE PROPRIE',
    icon: Clock,
  },
  {
    title: 'TRANSCRIERI AUTO',
    icon: FileText,
  },
  {
    title: 'ASIGURARI',
    icon: Shield,
    subItems: ['RCA', 'CASCO', 'LOCUINTE', 'CALATORII'],
  },
  {
    title: 'TRACTARI AUTO 24 H',
    icon: Truck,
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">CE FACEM PENTRU TINE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="p-6 border border-gray-800 rounded-lg hover:border-orange-500 transition-colors"
            >
              <service.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              {service.subItems && (
                <ul className="text-gray-400 space-y-1">
                  {service.subItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

