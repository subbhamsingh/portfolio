import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
