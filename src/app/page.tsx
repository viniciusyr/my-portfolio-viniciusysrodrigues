import Header from "@/app/components/header/header";
import Hero from "@/app/components/hero/hero";
import Stacks from "@/app/components/navbar/stacks";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-[1400px] p-4 md:w-3/4 h-screen align-middle mx-auto">
        <Header />
        <Hero />
        <Stacks />
      </div>
    </main>
  );
}
