import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import SelectedWork from "@/app/components/SelectedWork";
import Experience from "@/app/components/Experince";
import Education from "@/app/components/Education";
import Services from "@/app/components/Services";
import Contact from "@/app/components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-96px)] flex flex-col mx-auto px-2 max-w-2xl">
      <div className="min-h-screen w-full align-middle mx-auto">
        <Header />
        <Hero />
        <Services />
        <SelectedWork />
        <Skills />
        <Experience/>
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
