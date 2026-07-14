import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import ConditionalNavbar from "@/components/conditional-navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ruang Cerita & Karya Kata - Bagikan Cerita & Inspirasimu",
  description: "Platform menulis modern untuk menuangkan imajinasi, berbagi gagasan, dan menjelajahi karya tulisan menarik dari seluruh penjuru dunia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${fontSans.variable} font-sans antialiased min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 relative selection:bg-indigo-500 selection:text-white`}
      >
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <NextTopLoader color="#6366f1" showSpinner={false} height={3} />
          {/* Glow ambient background elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-screen-2xl h-[800px] max-h-[100dvh] pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-300/30 to-purple-300/30 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-sky-300/20 to-indigo-200/30 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
          </div>
          
          <ConditionalNavbar>
              <Navbar />
          </ConditionalNavbar>
          <main className="flex-grow flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
