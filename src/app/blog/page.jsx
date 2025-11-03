import { Earth } from "lucide-react";

export default function Blog() {
  return (
    <div className="w-full flex flex-col justify-center">
      {/* Cabeçalho com imagem e título */}
      <div className="min-h-16 bg-black "></div>
      <div className="relative py-5 sm:py-0 z-10 min-h-70 xs:min-h-50 sm:min-h-70 md:min-h-90 flex items-center pb-10 justify-center px-6 bg-[url('/img/plantas.jpg')] bg-cover bg-center">
        <div className="absolute z-0 inset-0 bg-gradient-to-b from-black via-black/40 to-background"></div>

        <div className="text-center max-w-4xl z-10 pb-0 flex flex-col justify-center align-center">
          <h1 className="mt-6 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-[1.2] font-semibold tracking-tighter text-[#EEF3EC]">
            Por que devemos ter Unidades de Conservação da Biodiversidade?
          </h1>
          <p className="mt-6 md:text-lg text-[#EEF3DF]">
            Publicado por{" "}
            <span className="font-bold">Equipe Raiz do Futuro</span> em 7 de
            novembro de 2025
          </p>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="w-full flex justify-center px-3 py-5">
        <div className="w-full xs:max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-[#F2F5EF]">
          <p className="mb-4 mt-6">
            Vivemos em um planeta extraordinariamente diverso. Cada floresta,
            rio, montanha, deserto ou recife de coral abriga formas de vida
            únicas, muitas delas ainda desconhecidas pela ciência. Essa riqueza
            natural, chamada biodiversidade, é o que sustenta o equilíbrio da
            Terra — desde o ar que respiramos até os alimentos que chegam à
            nossa mesa. No entanto, com o avanço das atividades humanas, essa
            biodiversidade está sob constante ameaça. É aí que entram as{" "}
            <strong>unidades de conservação</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-green-600">
            🌿 O que são unidades de conservação?
          </h2>
          <p className="mb-4 mt-3">
            As unidades de conservação são áreas legalmente protegidas, criadas
            para garantir a preservação de ecossistemas naturais, da fauna e da
            flora, além de promover o uso sustentável dos recursos naturais. No
            Brasil, elas são divididas em dois grandes grupos:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Unidades de Proteção Integral, como os Parques Nacionais e
              Estações Ecológicas, onde a natureza é mantida quase intocada;
            </li>
            <li>
              Unidades de Uso Sustentável, como as Reservas Extrativistas e
              Áreas de Proteção Ambiental, onde as comunidades locais podem
              viver e utilizar os recursos de forma equilibrada.
            </li>
          </ul>

          <div className="flex justify-center w-full">
            <img
              src="/img/florestaTropical.jpg"
              alt="Floresta tropical brasileira"
              className="rounded-2xl aspect-video shadow-md w-full md:max-w-[75%] object-cover mb-6"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-10 text-green-600">
            🌱 Por que elas são tão importantes?
          </h2>

          <div className="space-y-4 mt-3">
            <p>
              <strong>1. Preservação da vida selvagem:</strong> Muitas espécies
              de animais e plantas dependem dessas áreas para sobreviver. Com o
              desmatamento e a urbanização, as unidades de conservação se tornam
              refúgios essenciais, evitando a extinção de espécies ameaçadas
              como a onça-pintada e o mico-leão-dourado.
            </p>
            <p>
              <strong>2. Equilíbrio climático:</strong> As florestas armazenam
              carbono e ajudam a reduzir os impactos das mudanças climáticas.
            </p>
            <p>
              <strong>3. Proteção das águas:</strong> As nascentes e bacias
              hidrográficas que abastecem cidades inteiras estão, em muitos
              casos, dentro de áreas protegidas.
            </p>
            <p>
              <strong>4. Solo fértil e agricultura sustentável:</strong>{" "}
              Ecossistemas preservados equilibram os nutrientes do solo e
              auxiliam a agricultura com polinização e controle natural de
              pragas.
            </p>
            <p>
              <strong>5. Saúde e bem-estar humano:</strong> A biodiversidade é
              fonte de medicamentos e alimentos, além de proporcionar contato
              saudável com a natureza.
            </p>
            <p>
              <strong>6. Valor cultural e social:</strong> Muitas UCs guardam
              tradições e saberes de povos indígenas e comunidades tradicionais.
            </p>
          </div>

          <div className="flex justify-center w-full mt-5">
            <img
              src="/img/onca.jpg"
              alt="Onça-pintada, símbolo da conservação"
              className="rounded-2xl aspect-video shadow-md w-full md:max-w-[75%] object-cover mb-6"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-10 text-green-600">
            🐾 Um investimento no futuro
          </h2>
          <p className="mb-4 mt-3">
            Proteger a natureza não é apenas uma questão ambiental — é uma
            questão de sobrevivência. As unidades de conservação funcionam como
            seguros de vida do planeta, garantindo que as próximas gerações
            possam viver em um mundo com ar puro, água limpa e equilíbrio
            ecológico.
          </p>
          <p>
            Infelizmente, muitas dessas áreas enfrentam desafios sérios: falta
            de fiscalização, queimadas ilegais e cortes de verbas. É fundamental
            que a sociedade reconheça seu valor e cobre políticas públicas de
            proteção efetiva.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-green-600">
            🌍 O papel da educação ambiental
          </h2>
          <p className="mb-4 mt-3">
            A conscientização é uma das armas mais poderosas para a preservação.
            Escolhas simples — como consumir produtos sustentáveis e apoiar
            parques e reservas — fazem diferença. Escolas e universidades têm
            papel essencial ao promover visitas, palestras e projetos de
            reflorestamento.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-green-600">
            🌻 Ecoturismo e economia sustentável
          </h2>
          <p className="mb-4 mt-3">
            O ecoturismo é uma forma de conhecer a natureza sem destruí-la,
            gerando renda e valorizando comunidades locais. Parques como o
            Iguaçu, Serra da Capivara e Chapada dos Veadeiros atraem visitantes
            do mundo todo e incentivam o respeito ao meio ambiente.
          </p>
          <div className="flex justify-center w-full ">
            <img
              src="/img/parque.jpg"
              alt="Visitantes em trilha ecológica"
              className="rounded-2xl aspect-video shadow-md w-full md:max-w-[75%] object-cover mb-6"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-10 text-green-600">
            📊 Como estão as unidades de conservação no Brasil?
          </h2>
          <p className="mb-4 mt-3">
            O Brasil abriga mais de{" "}
            <strong>2.500 unidades de conservação</strong>, cobrindo cerca de
            30% do território nacional. Apesar disso, muitas carecem de
            estrutura e incentivo. Fortalecê-las é essencial para garantir o
            futuro do nosso patrimônio natural.
          </p>

          <h2 className="text-2xl font-semibold mt-10 text-green-600 ">
            🌱 Conclusão
          </h2>
          <p className="mb-4 mt-3">
            As unidades de conservação da biodiversidade não são apenas reservas
            naturais — são reservas de futuro. Proteger a natureza é proteger a
            nós mesmos. Afinal, o ser humano é parte do ecossistema, não dono
            dele. Que cada um de nós possa agir com consciência e lembrar que
            cuidar da Terra é o maior ato de amor e responsabilidade que podemos
            ter. 💚
          </p>

          <h3 className="text-xl font-bold mt-10 mb-2 text-[#E2F3E0]">
            🔗 Referências
          </h3>
          <ul className="list-disc pl-6 mb-10">
            <li>
              <a
                href="https://www.icmbio.gov.br"
                target="_blank"
                className="text-green-400 underline"
              >
                ICMBio – Instituto Chico Mendes
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.br/mma"
                target="_blank"
                className="text-green-400 underline"
              >
                Ministério do Meio Ambiente
              </a>
            </li>
            <li>
              <a
                href="https://www.wwf.org.br"
                target="_blank"
                className="text-green-400 underline"
              >
                WWF Brasil
              </a>
            </li>
            <li>
              <a
                href="https://www.unep.org/pt-br"
                target="_blank"
                className="text-green-400 underline"
              >
                ONU Meio Ambiente
              </a>
            </li>
            <li>
              <a
                href="https://www.ipe.org.br"
                target="_blank"
                className="text-green-400 underline"
              >
                Instituto de Pesquisas Ecológicas (IPE)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
