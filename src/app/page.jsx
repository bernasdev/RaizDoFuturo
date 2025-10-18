import Hero01 from "@/components/hero-01/hero-01";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <Hero01/>
      {/* <div className="bg-[url(/img/plantas.jpg)] bg-local"></div> */}
    </div>
  );
}
