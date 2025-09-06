
export interface Article {
  id: number;
  title: string;
  link: string;
  description: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Java Memory Management Explained",
    link: "https://www.digitalocean.com/community/tutorials/java-jvm-memory-model-memory-management-in-java",
    description:
      "Um mergulho profundo no modelo de memória da JVM: heap, stack, Metaspace, algoritmos de garbage collection como G1, ZGC e como monitorar e diagnosticar problemas com ferramentas como VisualVM e Java Flight Recorder.",
    date: "Aug 2025",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Building Scalable SaaS Applications with Spring Boot",
    link: "https://medium.com/@ShantKhayalian/the-ultimate-guide-to-building-scalable-saas-applications-with-spring-boot-c5d52b4c1cd5",
    description:
      "Guia completo para arquitetar e escalar aplicações SaaS com Spring Boot: desde arquitetura multi-tenant, autenticação, roteamento via API Gateway até billing, observabilidade e escala com melhores práticas.",
    date: "Apr 2025",
  },
  {
    id: 3,
    title: "How to Use Framer Motion for Animations in Next.js",
    link: "https://staticmania.com/blog/how-to-use-framer-motion-for-animations-in-next-js",
    description:
      "Tutorial prático para integrar animações suaves com Framer Motion em aplicações Next.js (App Router), cobrindo instalação, componentes motion, variantes, animações de entrada/saída e otimizações.",
    date: "Aug 2024 (updated Sep 2025)",
  },
];

