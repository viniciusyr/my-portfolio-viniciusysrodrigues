import Image from "next/image";

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact me" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between p-4">
      <div className="text-2xl font-bold ">
        <a href="#home">Vinicius</a>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-2 md:mt-1 text-sm">
        {navigationLinks.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-gray-500" >{item.label}</a>
        ))}
        
        <a href="#" className="hover:text-gray-400">
          <Image src="/icons/resume.png" alt="Resume" width={25} height={25} className="transition-transform duration-200 hover:scale-110" />
        </a>
        <a href="https://github.com/viniciusyr/" className="hover:text-gray-400">
          <Image src="/icons/github.svg" alt="Github" width={25} height={25} className="transition-transform duration-200 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/viniciusysrodrigues" className="hover:text-gray-400">
          <Image src="/icons/linkedin.svg" alt="Linkedin" width={25} height={25} className="transition-transform duration-200 hover:scale-110" />
        </a>
      </div>
    </nav>
  );
}