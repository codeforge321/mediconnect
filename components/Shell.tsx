import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "./Navbar";
const nav: Record<string, [string, string][]> = {
  patient: [["Overview", "/patient"], ["Find doctors", "/doctors"], ["Messages", "/messages"], ["Video consult", "/consult"]],
  doctor: [["Overview", "/doctor"], ["Messages", "/messages"], ["New prescription", "/prescriptions/new"], ["Video consult", "/consult"]],
  admin: [["Overview", "/admin"], ["Find doctors", "/doctors"]],
};
export default function Shell({ role, title, children }: { role: "patient" | "doctor" | "admin"; title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-mist">
      <div className="flex items-center gap-4 overflow-x-auto border-b border-brand-100 bg-white px-4 py-3">
        <Logo />
        <nav className="ml-4 flex gap-1 text-sm font-medium">
          {nav[role].map(([l, h]) => <Link key={h} href={h} className="whitespace-nowrap rounded-lg px-3 py-1.5 text-slate-600 hover:bg-brand-50 hover:text-brand-700">{l}</Link>)}
        </nav>
        <Link href="/" className="ml-auto whitespace-nowrap text-sm text-slate-500">Log out</Link>
      </div>
      <main className="mx-auto max-w-6xl px-4 py-8"><h1 className="mb-6 text-2xl font-bold">{title}</h1>{children}</main>
    </div>
  );
}
