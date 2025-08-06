import Image from "next/image";
import Hero from "./components/Hero";
import Information from "./components/Information";
import MarketPulse from "./components/MarketPulse";
import Tester from "./components/Tester";
import Trae from "./components/Trae";

export default function Home() {
  return (
    <>
    <Hero/>
    <Information/>
    <MarketPulse/>
    <Trae/>
    </>
  );
}
