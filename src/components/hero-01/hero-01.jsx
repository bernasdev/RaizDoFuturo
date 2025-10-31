import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero01 = () => {
  return (
    <div
      id="home"
      className="relative z-10 min-h-150 flex items-end pt-15 2xs:pt-0 pb-10 justify-center px-6 bg-[url('/img/folhas.jpg')] bg-cover bg-center"
    >
      <div className="absolute z-0 inset-0 bg-gradient-to-b from-black via-black/55 to-background"></div>
      <div className="text-center max-w-4xl z-10 pt-15 pb-0">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="/blog">
            Acabamos de Postar <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter text-[#EEF3EC]">
          Juntos, protegemos a vida em todas as suas formas.
        </h1>
        <p className="mt-6 md:text-lg text-[#EEF3DF]">
          Apoiamos a criação e manutenção de unidades de conservação para
          garantir que a biodiversidade continue sustentando o equilíbrio da
          Terra e o nosso futuro.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4 text-center">
          <Link href="/sobre">
            <Button
              size="lg"
              className="rounded-full text-base flex justify-center align-center hover:cursor-pointer"
            >
              Saiba Como Ajudar{" "}
              <ArrowUpRight className="size-5 group-hover:translate-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero01;
