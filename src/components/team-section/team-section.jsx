"use client";

import Marquee from "react-fast-marquee";
import { Leaf, Globe, BookOpen, Megaphone, Hand, BarChart3 } from "lucide-react";

const team = [
  {
    name: "Rafaela Bizuti",
    role: "Fundadora e Diretora-Geral",
    description:
      "Coordena toda a atuação da ONG e define estratégias para ampliar o impacto das ações de conservação.",
    icon: Leaf,
  },
  {
    name: "Anne Saffnauer",
    role: "Coordenadora de Projetos Ambientais",
    description:
      "Lidera projetos de reflorestamento, educação ecológica e proteção da biodiversidade.",
    icon: Globe,
  },
  {
    name: "Nycole Silva",
    role: "Pesquisadora de Biodiversidade",
    description:
      "Desenvolve estudos e acompanha indicadores ambientais para orientar ações sustentáveis.",
    icon: BookOpen,
  },
  {
    name: "Maria Fernanda Mendes",
    role: "Comunicadora Ambiental",
    description:
      "Responsável por campanhas, conteúdo e divulgação de iniciativas ecológicas.",
    icon: Megaphone,
  },
  {
    name: "Pedro Conforto",
    role: "Analista de Sustentabilidade",
    description:
      "Apoia a implementação de projetos sustentáveis, realizando análises técnicas e auxiliando na avaliação de impacto ambiental.",
    icon: BarChart3,
  },
  {
    name: "Giovana Santos",
    role: "Assistente de Projetos",
    description:
      "Auxilia na execução de atividades, coleta de dados e organização de eventos ambientais.",
    icon: Hand,
  },
];

export default function TeamMarquee() {
  return (
    <section id="equipe" className="relative py-24 overflow-hidden bg-muted/5">
      {/* Gradientes de borda para fade suave nas laterais */}
      <div className="absolute left-0 inset-y-0 w-[10%] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-[10%] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="text-center mb-14 relative z-20">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
          Nossa Equipe
        </h2>
        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
          Pessoas comprometidas com a conservação e o futuro do planeta.
        </p>
      </div>

      <Marquee
        pauseOnHover
        speed={40}
        gradient={false}
        className="relative flex items-stretch"
      >
        {team.map((member) => (
          <div
            key={member.name}
            className="min-w-[320px] max-w-sm mx-4 p-6 min-h-[225px] flex flex-col justify-between
                 rounded-2xl border border-border/40 bg-muted/10 
                 hover:bg-primary/10 hover:border-primary/50 hover:shadow-lg 
                 active:bg-primary/10 active:border-primary/50 active:shadow-lg 
                 transition-all duration-300 text-center"
          >
            <div>
              <member.icon className="mb-4 size-10 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
            </div>
            <p className="mt-3 text-sm text-foreground/80 leading-snug">
              {member.description}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
