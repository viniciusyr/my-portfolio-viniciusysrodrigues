import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.viniciusysrodrigues.com"),
  title: "Vinicius Rodrigues | Revenue Systems & GTM Automation Engineer",
  description:
    "Revenue Systems & GTM Automation Engineer. I build the systems that turn marketing into revenue for agencies & SMBs: backend and AI workflows, GoHighLevel and CRM integrations (HubSpot, Salesforce), attribution, and lead automation.",
  openGraph: {
    title: "Vinicius Rodrigues | Revenue Systems & GTM Automation Engineer",
    description:
      "I build the systems that turn marketing into revenue for agencies & SMBs: GoHighLevel and CRM automation, attribution, AI agents, and backend integrations.",
    url: "https://www.viniciusysrodrigues.com",
    siteName: "Vinicius Rodrigues",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinicius Rodrigues | Revenue Systems & GTM Automation Engineer",
    description:
      "I build the systems that turn marketing into revenue for agencies & SMBs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white dark:bg-black transition-colors duration-500 overflow-x-clip">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
