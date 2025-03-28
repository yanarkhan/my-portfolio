import { BentoDemo } from "@/components/BentoDemo";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Projects />
      <BentoDemo />
    </main>
  );
}
