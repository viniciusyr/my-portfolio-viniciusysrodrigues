import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata: Metadata = {
  title: "Vinicius Rodrigues | GoHighLevel & AI Automation Specialist",
  description:
    "GoHighLevel & AI Automation specialist (and full-stack developer). I build the systems that turn marketing into revenue for agencies & SMBs: GoHighLevel automation, CRM, attribution, AI agents, and paid-traffic infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white dark:bg-black transition-colors duration-500">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
