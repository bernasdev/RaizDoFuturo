import ConceitosEcologia from "@/components/conceitos-ecologia/conceitos-ecologia";
import HeroHome from "@/components/hero-home/hero-home";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center">
      <HeroHome />
      <ConceitosEcologia/>
    </div>
  );
}
