"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button, Card, LinkButton, cn } from "@/components/ui";
import { doctors } from "@/lib/data";
const days = Array.from({ length: 6 }, (_, i) => { const d = new Date(2026, 9, 7 + i); return { key: d.toISOString().slice(0, 10), label: d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }) }; });
export default function BookingFlow() {
  const { id } = useParams<{ id: string }>();
  const d = doctors.find((x) => x.id === id);
  const [day, setDay] = useState(""); const [slot, setSlot] = useState(""); const [done, setDone] = useState(false); const [loading, setLoading] = useState(false);
  if (!d) return <p className="p-10">Doctor not found.</p>;
  const confirm = () => { setLoading(true); setTimeout(() => { setLoading(false); setDone(true); }, 900); };
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-10">
        {done ? (
          <Card className="text-center"><CheckCircle2 className="mx-auto text-teal-500" size={48} /><h1 className="mt-3 text-2xl font-bold">Appointment confirmed</h1>
            <p className="mt-2 text-slate-600">{d.name} · {days.find((x) => x.key === day)?.label} at {slot}</p>
            <div className="mt-6 flex justify-center gap-3"><LinkButton href="/patient">Go to dashboard</LinkButton><LinkButton href="/consult" variant="ghost">Try video room</LinkButton></div></Card>
        ) : (
          <Card>
            <h1 className="text-2xl font-bold">Book with {d.name}</h1><p className="text-sm text-slate-500">{d.spec} · ₹{d.fee}</p>
            <h2 className="mt-6 font-semibold">Choose a date</h2>
            <div className="mt-2 flex flex-wrap gap-2">{days.map((x) => <button key={x.key} onClick={() => setDay(x.key)} className={cn("rounded-xl border px-3 py-2 text-sm", day === x.key ? "border-brand-600 bg-brand-600 text-white" : "border-brand-100")}>{x.label}</button>)}</div>
            <h2 className="mt-6 font-semibold">Choose a time</h2>
            <div className="mt-2 flex flex-wrap gap-2">{d.slots.map((s) => <button key={s} onClick={() => setSlot(s)} className={cn("rounded-xl border px-3 py-2 text-sm", slot === s ? "border-teal-500 bg-teal-500 text-white" : "border-brand-100")}>{s}</button>)}</div>
            <Button className="mt-8 w-full" disabled={!day || !slot || loading} onClick={confirm}>{loading ? "Confirming…" : "Confirm appointment"}</Button>
            {(!day || !slot) && <p className="mt-2 text-center text-xs text-slate-500">Select a date and time to continue.</p>}
          </Card>
        )}
      </main>
    </>
  );
}
