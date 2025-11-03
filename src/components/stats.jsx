const Stats = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) mx-auto py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
          Nosso Impacto
        </h2>
        <p className="mt-4 text-muted-foreground/50">
          Cada passo que damos é um investimento no futuro do planeta.
        </p>

        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 justify-center">
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold  text-green-400/50">
              +1.200
            </span>
            <p className="mt-6 text-lg text-foreground/80">
              árvores plantadas em áreas degradadas
            </p>
          </div>
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold  text-lime-400/50">18</span>
            <p className="mt-6 text-lg text-foreground/80">
              ações de educação ambiental realizadas
            </p>
          </div>
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold  text-green-400/50">
              10
            </span>
            <p className="mt-6 text-lg text-foreground/80">
              parcerias com comunidades e instituições locais
            </p>
          </div>
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold text-lime-400/50">6</span>
            <p className="mt-6 text-lg text-foreground/80">
              unidades de conservação apoiadas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
