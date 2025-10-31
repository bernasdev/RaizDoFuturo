import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Book, CirclePlay, Eye, Users } from "lucide-react";
import Link from "next/link";

export default function HeroSobre() {
  return (
    <div className="relative z-10 min-h-160 flex items-end justify-center bg-[url('/img/conservacao.jpg')] bg-cover bg-end">
      <div className="absolute z-0 inset-0 bg-gradient-to-b from-20% from-black/90 via-60% via-black/50 to-background backdrop-blur-sm"></div>

      <div className="z-10 max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div className="flex flex-col justify-center align-center text-center">
          <p className="mt-6 text-white/50 m-0 p-0">Nossa missão</p>
          <h1 className="mt-1 text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[2.5rem] font-semibold leading-[1.2]! tracking-tighter">
            Proteger e restaurar a biodiversidade, garantindo que cada forma de
            vida tenha espaço para existir e prosperar.
          </h1>
          <div className="mt-12 flex justify-center align-center items-center gap-4">
            <Link href="/blog">
              <Button
                size="lg"
                className="rounded-full text-base flex justify-center align-center hover:cursor-pointer"
              >
                Ver Mais <Book className="size-5" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base flex justify-center align-center hover:cursor-pointer"
              >
                Nossa Equipe{" "}
                <Users className="size-5 group-hover:translate-3.5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center my-auto">
          <img
            src="/img/conservacao.jpg"
            alt="Conservação"
            className="rounded-xl h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
