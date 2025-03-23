import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ExamPrep AI - AI-Powered Exam Preparation Platform",
  description: "Ace your exams with personalized AI-generated practice questions, adaptive learning, and detailed analytics. Perfect for SAT, GRE, GMAT, and more.",
  keywords: "exam preparation, AI learning, practice tests, SAT prep, GRE prep, GMAT prep, adaptive learning, exam questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="bg-grid-pattern">
          {children}
        </div>
      </body>
    </html>
  );
}
