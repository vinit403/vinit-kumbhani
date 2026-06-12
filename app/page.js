import About from "@/src/components/About/About";
import Header from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import Skills from "@/src/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
    </>
  );
}