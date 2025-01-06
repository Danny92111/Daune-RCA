"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
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
      className={`flex flex-col items-center gap-4 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-white p-4 rounded-lg w-full aspect-video flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={200}
          height={100}
          className="object-contain"
        />
      </div>
      <Button
        onClick={() => router.push(`/${url}`)}
        variant="outline"
        className={`border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        CLICK
      </Button>
    </div>
  );
}
