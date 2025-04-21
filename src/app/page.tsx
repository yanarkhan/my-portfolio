import { BentoDemo } from "@/components/BentoDemo";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Projects />
      <BentoDemo />
      <Footer />
    </main>
  );
}
