"use client";
import { useState } from "react";
import { Download, FileText } from "lucide-react";
import Shell from "@/components/Shell";
import { Badge, Button, Card, LinkButton, Stat, cn } from "@/components/ui";
import { appointments, prescriptions, records } from "@/lib/data";
const tabs = ["Appointments", "Prescriptions", "Medical records", "History"] as const;
function download(rx: (typeof prescriptions)[number]) {
  const text = `MediConnect Prescription\n${rx.doctor} · ${rx.date}\nDiagnosis: ${rx.dx}\n\n${rx.meds.map((m) => `- ${m.name}: ${m.dose} for ${m.days} days`).join("\n")}\n\nNotes: ${rx.notes}`;
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" })); a.download = `${rx.id}.txt`; a.click();
}
export default function PatientDashboard() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Appointments");
  return (
    <Shell role="patient" title="Hello, Priya">
      <div className="grid gap-4 sm:grid-cols-3"><Stat label="Upcoming appointments" value={2} /><Stat label="Prescriptions" value={prescriptions.length} /><Stat label="Records" value={records.length} /></div>
      <div className="mt-8 flex gap-2 overflow-x-auto">{tabs.map((t) => <button key={t} onClick={() => setTab(t)} className={cn("whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold", tab === t ? "bg-brand-600 text-white" : "bg-white text-slate-600")}>{t}</button>)}</div>
      <div className="mt-4 space-y-3">
        {tab === "Appointments" && appointments.filter((a) => a.status === "Upcoming").map((a) => <Card key={a.id} className="flex flex-wrap items-center justify-between gap-3"><div><p className="font-semibold">{a.doctor}</p><p className="text-sm text-slate-500">{a.spec} · {a.date}, {a.time}</p></div><LinkButton href="/consult">Join call</LinkButton></Card>)}
        {tab === "Prescriptions" && prescriptions.map((rx) => <Card key={rx.id}><div className="flex items-start justify-between"><div><p className="font-semibold">{rx.dx}</p><p className="text-sm text-slate-500">{rx.doctor} · {rx.date}</p></div><Button variant="ghost" onClick={() => download(rx)}><Download size={16} />Download</Button></div><ul className="mt-3 space-y-1 text-sm">{rx.meds.map((m) => <li key={m.name}><b>{m.name}</b> — {m.dose}, {m.days} days</li>)}</ul><p className="mt-2 text-sm text-slate-500">{rx.notes}</p></Card>)}
        {tab === "Medical records" && records.map((r) => <Card key={r.id} className="flex items-center gap-3"><FileText className="text-brand-500" /><div><p className="font-semibold">{r.title}</p><p className="text-sm text-slate-500">{r.type} · {r.date}</p></div></Card>)}
        {tab === "History" && appointments.filter((a) => a.status === "Completed").map((a) => <Card key={a.id} className="flex items-center justify-between"><div><p className="font-semibold">{a.doctor}</p><p className="text-sm text-slate-500">{a.spec} · {a.date}</p></div><Badge tone="teal">Completed</Badge></Card>)}
      </div>
    </Shell>
  );
}
