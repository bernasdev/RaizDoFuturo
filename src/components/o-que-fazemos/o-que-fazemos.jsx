import React from "react";

import {
  Leaf,
  BookOpen,
  Trees,
  Microscope,
  Handshake,
  Globe,
} from "lucide-react";

const acoes = [
  {
    icon: BookOpen,
    title: "Educação Ambiental",
    description:
      "Desenvolvemos ações educativas e campanhas de conscientização para aproximar pessoas da natureza e inspirar atitudes sustentáveis.",
  },
  {
    icon: Trees,
    title: "Reflorestamento e Fauna",
    description:
      "Promovemos projetos de reflorestamento e monitoramos espécies nativas, fortalecendo ecossistemas e restaurando áreas degradadas.",
  },
  {
    icon: Microscope,
    title: "Pesquisa Científica",
    description:
      "Apoiamos estudos sobre biodiversidade e mudanças climáticas, contribuindo para o avanço do conhecimento e da conservação.",
  },
  {
    icon: Handshake,
    title: "Parcerias Locais",
    description:
      "Trabalhamos com comunidades e instituições para incentivar o uso sustentável dos recursos naturais e gerar impacto positivo.",
  },
  {
    icon: Leaf,
    title: "Proteção da Biodiversidade",
    description:
      "Atuamos na criação e manutenção de unidades de conservação que protegem habitats essenciais para a vida no planeta.",
  },
  {
    icon: Globe,
    title: "Engajamento Global",
    description:
      "Participamos de redes ambientais e ações colaborativas que unem pessoas e organizações em defesa da natureza.",
  },
];

const OQueFazemos = () => {
  return (
    <div className="pt-8 flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          O que fazemos
        </h2>
        <p className="text-center pt-2 text-foreground/70 max-w-2xl mx-auto mb-12">
          Conheça as principais frentes de atuação da nossa equipe.
        </p>

        <div className="mt-8 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-(--breakpoint-lg) mx-auto px-6">
          {acoes.map((acao) => (
            <div
              key={acao.title}
              className="group relative overflow-hidden flex flex-col border rounded-xl py-6 px-5 
             bg-background/30 backdrop-blur-md 
             transition-all duration-500 hover:shadow-[0_0_20px_rgba(30,114,57,0.3)] active:shadow-[0_0_20px_rgba(30,114,57,0.3)]"
            >
              {/* borda animada */}
              <div
                className="absolute inset-0 rounded-xl p-[1px] bg-[conic-gradient(from_0deg,theme(colors.primary)_0%,transparent_80%,theme(colors.primary)_100%)] 
                  animate-spin-slow opacity-0 group-hover:opacity-100 group-active:opacity-100 blur-[2px] transition-opacity duration-500"
              />

              {/* camada interna pra cobrir o fundo e preservar conteúdo */}
              <div className="relative z-10 flex flex-col items-start justify-start h-full">
                <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                  <acao.icon className="size-5" />
                </div>
                <span className="text-lg font-semibold">{acao.title}</span>
                <p className="mt-1 text-foreground/80 text-[15px]">
                  {acao.description}
                </p>
              </div>

              {/* sombra móvel/blur */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent 
                  blur-2xl translate-x-[-50%] translate-y-[50%] 
                  group-hover:translate-x-[50%] group-hover:translate-y-[-50%] 
                  group-active:translate-x-[50%] group-active:translate-y-[-50%] 
                  transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OQueFazemos;
