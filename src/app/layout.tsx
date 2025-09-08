import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinicius Rodrigues | Portfolio",
  description: "Software Engineer | Backend Developer especialized in Java and Spring Boot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white dark:bg-black transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
