'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const PARTNERS = [
  { url:'asirom', name: "Asirom", logo: "/home-assets/insurers/ASIROM.avif" },
  { url:'allianz', name: "Allianz", logo: "/home-assets/insurers/ALLIANZ.avif" },
  { url:'groupama', name: "Groupama", logo: "/home-assets/insurers/GROUPAMA.avif" },
  { url:'generali', name: "Generali", logo: "/home-assets/insurers/GENERALI.avif" },
  { url:'omniasig', name: "Omniasig", logo: "/home-assets/insurers/OMNIASIG.avif" },
  { url:'fga', name: "FGA", logo: "/home-assets/insurers/FGA.avif" },
  { url:'hellas-direct', name: "Hellas Direct", logo: "/home-assets/insurers/HELLAS-DIRECT.avif" },
  { url:'axeria', name: "Axeria", logo: "/home-assets/insurers/AXERIA.avif" },
  { url:'garanta', name: "Garanta", logo: "/home-assets/insurers/GARANTA.avif" },
  { url:'grawe', name: "Grawe", logo: "/home-assets/insurers/GRAWE.avif" },
  { url:'uniqa', name: "Uniqa", logo: "/home-assets/insurers/UNIQA.avif" },
  { url:'baar', name: "Baar", logo: "/home-assets/insurers/BAAR.avif" },
];

export function InsurancePartners() {
  const router = useRouter()

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-500">
          LA CE ASIGURATOR AI AVUT DAUNA?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-4"
            >
              <div className="bg-white p-4 rounded-lg w-full aspect-video flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={0}
                  height={0}
                  className="object-contain w-full h-full"
                />
              </div>
              <Button
                onClick={() => router.push(`/${partner.url}`)}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                CLICK
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
