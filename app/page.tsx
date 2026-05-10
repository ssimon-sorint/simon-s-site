import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
