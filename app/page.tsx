import Hero from "@/components/hero";
import About from "@/components/about";
import Certificate from "@/components/certificate";
import Contact from "@/components/contact";
import Project from "@/components/project";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans ">
      <Hero />
      <div className="container mx-auto">
        <About />
        <Project/>
        <Certificate />
        <Contact />
      </div>
        
    </div>
  );
}
