
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
    title: "Understanding Java Memory Management",
    link: "https://medium.com/...",
    description:
      "A deep dive into how memory works in Java, covering heap, stack, and garbage collection.",
    date: "Feb 2025",
  },
  {
    id: 2,
    title: "Building a SaaS with Spring Boot",
    link: "https://dev.to/...",
    description:
      "Step-by-step guide on setting up a scalable SaaS architecture using Spring Boot and MySQL.",
    date: "Jan 2025",
  },
  {
    id: 3,
    title: "Next.js + Framer Motion: A Smooth Portfolio",
    link: "https://hashnode.com/...",
    description:
      "How to build an animated developer portfolio with Next.js and Framer Motion.",
    date: "Dec 2024",
  },
];
