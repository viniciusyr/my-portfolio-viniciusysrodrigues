import Image from "next/image";

export default function Hero(){
    return (
        
        <section className="pt-50 flex flex-col items-center justify-between max-w-6xl mx-auto px-6 py-20 gap-12">
            <div className="flex-1 flex justify-center">
                <div className="relative w-40 h-40 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-sky-600">
                <Image
                    src="/avatar.png"
                    alt="Vinicius Avatar"
                    fill
                    className="object-cover"
                />
                </div>
            </div>

        {/* Textos */}
        <div className="flex-1">
            <h3>
                <span className="text-2xl md:text-3xl text-gray-700 text-left">
                    Hi!👋
                </span>
            </h3>
            <span className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-center">
                I'm <span className="text-sky-600">Vinícius Rodrigues</span> 
            </span>
            <p className="mt-6 text-2xl md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
            A brazilian <span className="font-semibold">Software Engineer</span> who loves to transform ideas into digital solutions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-sky-500 text-white rounded-4xl shadow hover:bg-sky-600 transition"
                >
                    Get in Touch
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 font-bold bg-gray-100 text-gray-500 rounded-4xl shadow hover:bg-gray-200 transition"
                >
                    RESUME
                </a>
            </div>
        </div>
        </section>
  );
}