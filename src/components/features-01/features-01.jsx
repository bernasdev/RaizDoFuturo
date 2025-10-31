import React from "react";

import {
  Leaf,
  BookOpen,
  Trees,
  Microscope,
  Handshake,
  Globe,
} from "lucide-react";

const features = [
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

const Features01Page = () => {
  return (
    <div className="pt-16 flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          O que fazemos
        </h2>
        <div className="mt-8 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-(--breakpoint-lg) mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="size-5" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features01Page;
