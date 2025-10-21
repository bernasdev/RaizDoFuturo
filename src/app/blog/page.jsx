export default function Blog() {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="relative z-10 min-h-70 md:min-h-90  flex items-end 2xs:pt-0 pb-10 justify-center px-6 bg-[url('/img/plantas.jpg')] bg-cover bg-center">
        <div className="absolute z-0 inset-0 bg-gradient-to-b from-black via-black/55 to-background"></div>

        <div className="text-center max-w-4xl z-10 md:pt-15 pb-0 flex flex-col justify-center align-center">
          <h1 className="mt-6 text-3xl sm:text-5xl md:text-5xl lg:text-6xl md:leading-[1.2] font-semibold tracking-tighter text-[#EEF3EC]">
            Economia Azul precisa incluir pescadores artesanais
          </h1>
          <p className="mt-6 md:text-lg text-[#EEF3DF]">
            Publicado por <span className="font-bold"> Germana Barata </span>em
            29 de setembro de 2025
          </p>
        </div>
      </div>

      <div className="w-100">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
        quibusdam! Suscipit dolores quasi impedit! Eaque quo, rerum ullam
        accusamus quia libero repellendus nam laboriosam repudiandae, nihil
        dolore tempore. Hic, aperiam.
      </div>
    </div>
  );
}
