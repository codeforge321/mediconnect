import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Chatbot from "@/components/Chatbot";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
export const metadata: Metadata = { title: "MediConnect — See a doctor from home", description: "Video consultations, digital prescriptions and health records in one place." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${jakarta.variable} font-sans`}>{children}<Chatbot /></body></html>);
}
