import Image from "next/image";
import Nav from "../components/shared/nav";
import Hero from "../components/hero";
import Hero1 from "../components/hero1";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Hero1 />
    </div>
  );
}
