import { Button } from "@/components/ui/button";
import { Book, Users } from "lucide-react";
import Link from "next/link";

export default function HeroSobre() {
  return (
    <section
      className="relative z-10 flex items-center justify-center 
                 bg-[url('/img/conservacao.jpg')] bg-cover bg-center bg-no-repeat
                 min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] 
                 pt-[6rem] sm:pt-[7rem]" // 👉 espaço pra navbar fixa
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-20%
                      from-black/90 via-black/60 via-60% to-background 
                      backdrop-blur-[2px] sm:backdrop-blur-sm" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-(--breakpoint-xl) mx-auto 
                      grid lg:grid-cols-2 gap-12 px-4 sm:px-8 py-12">
        
        {/* Texto principal */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="text-white/60 text-sm sm:text-base uppercase tracking-wide mb-3">
            Nossa missão
          </p>
          <h1 className="mx-auto lg:mx-0 text-2xl sm:text-3xl md:text-4xl xl:text-[2.5rem] 
                         font-semibold leading-tight tracking-tighter w-[90%] sm:w-[85%] lg:w-full">
            Proteger e restaurar a biodiversidade, garantindo que cada forma de
            vida tenha espaço para existir e prosperar.
          </h1>

          {/* Botões */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-4">
            <Link href="/blog">
              <Button
                size="lg"
                className="rounded-full text-base flex items-center gap-2 hover:cursor-pointer"
              >
                Ver Mais <Book className="size-5" />
              </Button>
            </Link>

            <Link href="#equipe">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base flex items-center gap-2 hover:cursor-pointer"
              >
                Nossa Equipe <Users className="size-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Imagem lateral (oculta em telas muito pequenas) */}
        <div className="hidden sm:flex justify-center items-center my-auto">
          <img
            src="/img/conservacao.jpg"
            alt="Conservação"
            className="rounded-xl max-w-full h-auto object-cover 
                       sm:w-[80%] md:w-[90%] lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}
