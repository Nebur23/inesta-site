import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "inesta",
  description: "inesta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={urbanist.className}>
        <Header />
        <main className='relative overflow-hidden scrollbar-hide overflow-y-scroll no-scrollbar'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
