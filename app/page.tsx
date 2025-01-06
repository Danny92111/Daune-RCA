import Layout from "@/components/layout";
import { ContactForm } from "@/components/contact-form";
import { InsurancePartners } from "@/components/insurance-partners";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[750px] flex items-center">
        <div className="absolute inset-0">
          <Image
            width={0}
            height={0}
            src="/home-assets/hero.avif"
            alt="Car accident"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-md bg-black p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-6">
              AI FOST IMPLICAT INTR-UN ACCIDENT RUTIER?
            </h1>
            <div className="text-2xl text-orange-500 font-bold mb-6">
              0742 99 77 11
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <InsurancePartners />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-orange-500 border border-solid border-orange-500">
            <Link href="/servicii">
              <div className="bg-black p-8 hover:bg-black/80 transition-colors h-40">
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  CONSTATARI DAUNE
                </h3>
              </div>
            </Link>
            <Link href="/servicii">
              <div className="bg-black p-8 hover:bg-black/80 transition-colors h-40">
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  MASINA LA SCHIMB
                </h3>
              </div>
            </Link>
            <Link href="/servicii">
              <div className="bg-black p-8 hover:bg-black/80 transition-colors h-40">
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  REGIE PROPRIE
                </h3>
              </div>
            </Link>
            <Link href="/servicii">
              <div className="bg-black p-8 hover:bg-black/80 transition-colors h-40">
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  TRANSCRIERI AUTO
                </h3>
              </div>
            </Link>
            <Link href="/servicii">
              <div className="bg-black p-8 hover:bg-black/80 transition-colors h-40">
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  ASIGURARI
                </h3>

                <ul className="text-orange-500 flex gap-3 items-center flex-wrap">
                  <li>RCA</li>
                  <li>CASCO</li>
                  <li>LOCUINTE</li>
                  <li>CALATORII</li>
                </ul>
              </div>
            </Link>
            <Link href="/servicii">
              <div className="bg-black p-8 hover:bg-black/80 transition-colors h-40">
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  TRACTARI AUTO 24 H
                </h3>
              </div>
            </Link>
            <Link href="/servicii">
              <div className="bg-black p-8 hover:bg-black/80 transition-colors h-40">
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  CONSULTANTA DAUNE
                </h3>
              </div>
            </Link>
            <Link href="/servicii">
              <div className="bg-black p-8 hover:bg-black/80 transition-colors h-40">
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  REPARATII AUTO
                </h3>
              </div>
            </Link>
            <Link href="/servicii">
              <div className="bg-black p-8 hover:bg-black/80 transition-colors h-40">
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  EVALUARI AUTO
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
