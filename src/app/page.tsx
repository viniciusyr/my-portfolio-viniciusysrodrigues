import Header from "@/app/components/header/header";
import Hero from "@/app/components/hero/hero";

export default function Home() {
  return (
    <div className="max-w-[1400px] p-4 md:w-3/4 h-screen border-1 border-gray-200 align-middle mx-auto">
      <Header />
      <Hero />
    </div>
  );
}
