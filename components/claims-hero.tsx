import { capitalizeFirstLetter } from "@/lib/utils";
import Image from 'next/image'

export function ClaimsHero({ insurer }: { insurer: string }) {
  const insurerCapitalized = capitalizeFirstLetter(insurer);
  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <Image
        src="/slug-assets/hero.avif"
        alt="Exploded view of car parts"
        className="absolute inset-0 w-full h-full object-cover"
        width={0}
        height={0}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative text-center text-white space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Ai avut o dauna la {insurerCapitalized} ?
        </h1>
        <p className="text-xl">
          Rezolvam dosarul tău de dauna eficient și rapid.
        </p>
        <a
          href="tel:0742997711"
          className="text-3xl text-orange-500 font-bold hover:text-orange-400"
        >
          0742 99 77 11
        </a>
      </div>
    </div>
  );
}
