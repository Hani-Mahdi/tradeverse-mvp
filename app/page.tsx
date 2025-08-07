import Image from "next/image";
import Hero from "./components/Hero";
import Information from "./components/Information";
import MarketPulse from "./components/MarketPulse";
import Tester from "./components/Tester";
import News from "./components/News"

export default function Home() {
  return (
    <>
    <Hero/>
    <Information/>
    <MarketPulse/>
    <News/>
    </>
  );
}
