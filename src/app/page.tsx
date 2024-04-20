import Image from "next/image";
import Hero from "./components/Hero";
import Translator from "./components/Translator";

export default function Home() {
  return (
      <main >
          <Hero/>
          <Translator/>
      </main>
  );
}
