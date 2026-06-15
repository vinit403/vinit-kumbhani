import About from "@/src/components/About/About";
import Contact from "@/src/components/Contact/Contact";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import Portfolio from "@/src/components/Portfolio/Portfolio";
import Resume from "@/src/components/Resume/Resume";
import Skills from "@/src/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}