import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <main className="max-w-[1200px] min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 mx-auto">
        <div className="p-4 px-20 md:px-0 md:w-3/4 h-screen align-middle mx-auto">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
