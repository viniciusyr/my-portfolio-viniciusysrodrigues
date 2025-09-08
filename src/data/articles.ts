
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
  title: "A Guide to Java Streams in Practice",
  link: "https://www.baeldung.com/java-8-streams",
  description:
    "Comprehensive guide to Java Streams API, covering functional programming concepts, pipelines, filtering, mapping, reducing, collectors, parallel streams, and best practices for performance.",
  date: "Updated 2025",
},
{
  id: 2,
  title: "Building Microservices with Spring Boot – A Practical Guide",
  link: "https://www.baeldung.com/spring-boot-microservices",
  description:
    "Step-by-step guide to designing and implementing microservices using Spring Boot, including service discovery, API Gateway, inter-service communication, resilience, and observability.",
  date: "Updated 2025",
},
{
  id: 3,
  title: "Patterns of Distributed Systems",
  link: "https://martinfowler.com/articles/patterns-of-distributed-systems/",
  description:
    "Martin Fowler’s collection of core distributed systems patterns, including leader election, circuit breakers, service discovery, load balancing, and consistency models, explained with practical diagrams.",
  date: "Ongoing (2025)",
}
];

