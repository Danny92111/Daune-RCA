"use client";

import { AnimatedCard } from "./animated-card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PARTNERS = [
  { url: "asirom", name: "Asirom", logo: "/home-assets/insurers/ASIROM.avif" },
  {
    url: "allianz",
    name: "Allianz",
    logo: "/home-assets/insurers/ALLIANZ.avif",
  },
  {
    url: "groupama",
    name: "Groupama",
    logo: "/home-assets/insurers/GROUPAMA.avif",
  },
  {
    url: "generali",
    name: "Generali",
    logo: "/home-assets/insurers/GENERALI.avif",
  },
  {
    url: "omniasig",
    name: "Omniasig",
    logo: "/home-assets/insurers/OMNIASIG.avif",
  },
  { url: "fga", name: "FGA", logo: "/home-assets/insurers/FGA.avif" },
  {
    url: "hellas-direct",
    name: "Hellas Direct",
    logo: "/home-assets/insurers/HELLAS-DIRECT.avif",
  },
  { url: "axeria", name: "Axeria", logo: "/home-assets/insurers/AXERIA.avif" },
  {
    url: "garanta",
    name: "Garanta",
    logo: "/home-assets/insurers/GARANTA.avif",
  },
  { url: "grawe", name: "Grawe", logo: "/home-assets/insurers/GRAWE.avif" },
  { url: "uniqa", name: "Uniqa", logo: "/home-assets/insurers/UNIQA.avif" },
  { url: "baar", name: "Baar", logo: "/home-assets/insurers/BAAR.avif" },
];

export function InsurancePartners() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2
          ref={elementRef}
          className={`text-3xl font-bold text-center mb-12 text-orange-500 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          LA CE ASIGURATOR AI AVUT DAUNA?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {PARTNERS.map((partner) => (
            <AnimatedCard
              url={partner.url}
              key={partner.name}
              logo={partner.logo}
              name={partner.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
