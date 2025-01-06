"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AnimatedCardProps {
  logo: string;
  name: string;
  url: string;
}

export function AnimatedCard({ logo, name, url }: AnimatedCardProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  const router = useRouter();

  return (
    <div
      ref={elementRef}
      onClick={() => router.push(`/${url}`)}
      className={`flex flex-col items-center gap-4 transition-all duration-700 cursor-pointer opacity-90 hover:opacity-100 hover:scale-110 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="transition-all duration-700 absolute inset-0 bg-black/10 hover:bg-black/0" />
      <div className="bg-white p-4 rounded-lg w-full aspect-video flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={200}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
}
