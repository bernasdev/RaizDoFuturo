import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Leaf,
  Share2,
  AlertTriangle,
  HeartHandshake,
  Droplets,
  CloudSun,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Biodiversidade",
    description:
      "A variedade de espécies que mantém o equilíbrio e a resiliência dos ecossistemas do planeta.",
    image:
      "https://images.pexels.com/photos/28411835/pexels-photo-28411835.jpeg",
  },
  {
    icon: Share2,
    title: "Teias e Cadeias Alimentares",
    description:
      "As conexões entre os seres vivos que garantem o fluxo de energia e a continuidade da vida.",
    image:
      "https://images.pexels.com/photos/34333065/pexels-photo-34333065.jpeg",
  },
  {
    icon: AlertTriangle,
    title: "Impactos Ambientais",
    description:
      "As consequências das ações humanas sobre os ambientes naturais e suas espécies.",
    image:
      "https://images.pexels.com/photos/34338533/pexels-photo-34338533.jpeg",
  },
  {
    icon: HeartHandshake,
    title: "Interações Ecológicas",
    description:
      "Relações entre os organismos — cooperação, competição e equilíbrio — que moldam a natureza.",
    image:
      "https://images.pexels.com/photos/16370943/pexels-photo-16370943.jpeg",
  },
  {
    icon: Droplets,
    title: "Serviços Ecossistêmicos",
    description:
      "Os benefícios que a natureza oferece: água limpa, polinização, clima estável e muito mais.",
    image:
      "https://images.pexels.com/photos/14839806/pexels-photo-14839806.jpeg",
  },
  {
    icon: CloudSun,
    title: "Mudanças Climáticas",
    description:
      "As transformações globais que afetam ecossistemas e reforçam a urgência da conservação.",
    image: "https://images.pexels.com/photos/6168279/pexels-photo-6168279.jpeg",
  },
];

const Features05Page = () => {
  return (
    <div className="min-h-screen pt-15 flex items-center justify-center bg-background" id="ecologia">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-2xl text-pretty">
          Por que a natureza precisa de nós
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
          Entender a natureza é o primeiro passo para cuidar dela.
        </p>
        <p className="mt-0 text-muted-foreground text-lg sm:text-xl">
          Conheça os pilares que sustentam a vida no planeta.
        </p>
        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 bg-background min-h-100
  transition ease-in  hover:-translate-y-3.5 hover:bg-primary/25 hover:shadow-emerald-100"
            >
              <CardHeader>
                <feature.icon />
                <h4 className="mt-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-50 w-full object-cover ml-6 rounded-tl-xl transition-transform duration-500 group-hover:translate-x-[-1.5rem]"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features05Page;
