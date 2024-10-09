import Image from "next/image";
import Navbar from "@/components/mainPage/Navbar";
import HeroSection from "@/components/mainPage/HeroSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
    </div>
  );
}
