import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Image Generator",
  description: "AI Image Generator Learning Build",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-300"}>
        <Header />

        <PromptInput />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
