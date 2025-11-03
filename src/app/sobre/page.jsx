import OQueFazemos from "@/components/o-que-fazemos/o-que-fazemos";

import HeroSobre from "@/components/hero-sobre/hero-sobre";
import QuemSomos from "@/components/quem-somos/quem-somos";
import { Button } from "@/components/ui/button";
import Stats from "@/components/stats";
import TeamMarquee from "@/components/team-section/team-section";
import Link from "next/link";
import { Fingerprint, Hand } from "lucide-react";

export default function SobreNos() {
  return (
    <div className="w-full flex flex-col justify-center">
      <HeroSobre />
      <QuemSomos />
      <OQueFazemos />
      <TeamMarquee />
      <Stats />

      <section className="py-20 text-center bg-gradient-to-b from-background to-muted flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4">Junte-se a nós</h2>
        <p className="max-w-xl mx-auto text-foreground/80 mb-8">
          Cada gesto conta — seja participando das ações, compartilhando nosso
          trabalho ou apoiando projetos de conservação.
        </p>
        <Link href="/blog" className="">
          <Button
            size="lg"
            className="rounded-full text-base flex items-center gap-2 hover:cursor-pointer"
          >
            Apoiar agora <Hand className="size-5" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
