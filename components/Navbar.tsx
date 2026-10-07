"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, HeartPulse } from "lucide-react";
import { LinkButton } from "./ui";
export function Logo() {
  return <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-ink"><span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-teal-500 text-white"><HeartPulse size={18} /></span>MediConnect</Link>;
}
const links = [["Find doctors", "/doctors"], ["Patient", "/patient"], ["Doctor", "/doctor"], ["Admin", "/admin"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-brand-100/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map(([l, h]) => <Link key={h} href={h} className="text-slate-600 hover:text-brand-600">{l}</Link>)}
          <Link href="/login" className="text-slate-600 hover:text-brand-600">Log in</Link>
          <LinkButton href="/register">Get started</LinkButton>
        </nav>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="flex flex-col gap-3 border-t border-brand-100 px-4 py-4 md:hidden">
        {[...links, ["Log in", "/login"], ["Register", "/register"]].map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="text-sm font-medium">{l}</Link>)}
      </div>}
    </header>
  );
}
