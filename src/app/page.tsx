import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-96px)] flex flex-col mx-auto px-2 max-w-2xl">
      <div className="h-screen w-full align-middle mx-auto">
        <Header />
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
