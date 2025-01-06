import { Phone, FileText, Wrench, Key, FileSpreadsheet } from 'lucide-react'
import Image from 'next/image'

const PROCESS_STEPS = [
  {
    icon: Phone,
    title: 'Ne suni',
    description: 'Programam constatarea',
    image: '/slug-assets/card1.avif'
  },
  {
    icon: FileText,
    title: 'Intocmim dosarul de dauna',
    description: 'Obtinem aprobare',
    image: '/slug-assets/card2.avif'
  },
  {
    icon: Wrench,
    title: 'Programam reparatia masinii',
    description: 'Efectuam reparatia in service partener autorizat',
    image: '/slug-assets/card3.avif'
  },
  {
    icon: Key,
    title: 'Primesti masina la schimb',
    description: 'fără costuri',
    image: '/slug-assets/card4.avif'
  },
  {
    icon: FileSpreadsheet,
    title: 'Decontare directa',
    description: 'Se face decontarea directa către service cu societatea de asigurare.',
    image: '/slug-assets/card5.avif'
  }
]

export function ClaimsProcess() {
  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-video mb-6">
                <Image
                  height={0}
                  width={0}
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-6">
                <step.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

