import ScrollyCanvas from "@/components/ScrollyCanvas";
import Resume from "@/components/Resume";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#050505] min-h-screen text-black dark:text-white selection:bg-rose-500/30 transition-colors duration-300 relative">
      <ParticleBackground />
      {/* 
        The ScrollyCanvas component acts as our 500vh container, 
        tracking scroll to animate the canvas and the text overlay 
      */}
      <div className="relative z-10">
        <ScrollyCanvas />
      </div>

      {/* 
        The Resume section holds all the user details pulled directly from the CV
        (including the Projects section, which appears after Technical Toolkit).
      */}
      <Resume />
    </main>
  );
}
