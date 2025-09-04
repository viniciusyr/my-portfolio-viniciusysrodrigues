import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experince";
import Footer from "./components/Footer";
import Articles from "./components/Articles";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-96px)] flex flex-col mx-auto px-2 max-w-2xl">
      <div className="h-screen w-full align-middle mx-auto">
        <Header />
        <Hero />
        <Projects />
        <Experience/>
        <Articles />
        <Footer />
      </div>
    </main>
  );
}
