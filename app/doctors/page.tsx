"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Badge, Card, LinkButton } from "@/components/ui";
import { doctors, specs } from "@/lib/data";
const sel = "rounded-xl border border-brand-100 bg-white px-3 py-2 text-sm";
export default function Doctors() {
  const [q, setQ] = useState(""); const [spec, setSpec] = useState(""); const [exp, setExp] = useState(0); const [rating, setRating] = useState(0); const [avail, setAvail] = useState(false); const [fee, setFee] = useState(1000);
  const list = useMemo(() => doctors.filter((d) => d.name.toLowerCase().includes(q.toLowerCase()) && (!spec || d.spec === spec) && d.exp >= exp && d.rating >= rating && (!avail || d.available) && d.fee <= fee), [q, spec, exp, rating, avail, fee]);
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Find a doctor</h1>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="relative min-w-[220px] flex-1"><Search size={16} className="absolute left-3 top-3 text-slate-400" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by doctor name" className={`${sel} w-full pl-9`} /></div>
          <select className={sel} value={spec} onChange={(e) => setSpec(e.target.value)} aria-label="Specialization"><option value="">All specializations</option>{specs.map((s) => <option key={s}>{s}</option>)}</select>
          <select className={sel} value={exp} onChange={(e) => setExp(+e.target.value)} aria-label="Experience"><option value={0}>Any experience</option><option value={5}>5+ years</option><option value={10}>10+ years</option><option value={15}>15+ years</option></select>
          <select className={sel} value={rating} onChange={(e) => setRating(+e.target.value)} aria-label="Rating"><option value={0}>Any rating</option><option value={4.5}>4.5+</option><option value={4.8}>4.8+</option></select>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={avail} onChange={(e) => setAvail(e.target.checked)} />Available today</label>
          <label className="flex items-center gap-2 text-sm">Fee up to ₹{fee}<input type="range" min={300} max={1000} step={100} value={fee} onChange={(e) => setFee(+e.target.value)} /></label>
        </div>
        <p className="mt-6 text-sm text-slate-500">{list.length} doctors found</p>
        {list.length === 0 ? <Card className="mt-4 text-center text-slate-500">No doctors match these filters. Try widening your search.</Card> :
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((d) => (
            <Card key={d.id}>
              <div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 font-bold text-brand-700">{d.name.split(" ").slice(1).map((n) => n[0]).join("")}</div>
                <div><Link href={`/doctors/${d.id}`} className="font-semibold hover:text-brand-600">{d.name}</Link><p className="text-sm text-slate-500">{d.spec}</p></div></div>
              <div className="mt-4 flex items-center gap-3 text-sm"><span className="flex items-center gap-1 text-amber-500"><Star size={14} fill="currentColor" />{d.rating}</span><span>{d.exp} yrs</span><span className="ml-auto font-semibold">₹{d.fee}</span></div>
              <div className="mt-3 flex items-center justify-between"><Badge tone={d.available ? "teal" : "gray"}>{d.available ? "Available today" : "Next available tomorrow"}</Badge><LinkButton href={`/book/${d.id}`} className="!px-4 !py-1.5">Book</LinkButton></div>
            </Card>))}</div>}
      </main>
    </>
  );
}
