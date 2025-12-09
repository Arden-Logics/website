import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/top-bar";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Arden Logics | MSP, VoIP, Security & AV Solutions",
  description: "Professional IT managed services, VoIP, network cabling, audio visual, and security solutions for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className="font-sans antialiased h-full flex flex-col"
      >
        <TopBar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
