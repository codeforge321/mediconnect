"use client";
import { useState } from "react";
import { Plus, Trash2, CheckCircle2 } from "lucide-react";
import Shell from "@/components/Shell";
import { Button, Card, Field } from "@/components/ui";
export default function NewPrescription() {
  const [dx, setDx] = useState(""); const [patient, setPatient] = useState("Priya Sharma"); const [notes, setNotes] = useState("");
  const [meds, setMeds] = useState([{ name: "", dose: "", days: "" }]); const [err, setErr] = useState(""); const [sent, setSent] = useState(false);
  const upd = (i: number, k: string, v: string) => setMeds(meds.map((m, j) => (j === i ? { ...m, [k]: v } : m)));
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (!dx.trim() || meds.some((m) => !m.name.trim() || !m.dose.trim() || !(+m.days > 0))) return setErr("Add a diagnosis and complete every medicine (name, dosage, days)."); setErr(""); setSent(true); };
  if (sent) return <Shell role="doctor" title="Prescription"><Card className="text-center"><CheckCircle2 className="mx-auto text-teal-500" size={44} /><p className="mt-2 font-semibold">Prescription sent to {patient}</p><p className="text-sm text-slate-500">They can view and download it from their dashboard.</p></Card></Shell>;
  return (
    <Shell role="doctor" title="Write prescription">
      <Card><form onSubmit={submit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2"><Field label="Patient" value={patient} onChange={(e) => setPatient(e.target.value)} /><Field label="Diagnosis" value={dx} onChange={(e) => setDx(e.target.value)} /></div>
        {meds.map((m, i) => <div key={i} className="grid items-end gap-3 sm:grid-cols-[2fr_2fr_1fr_auto]"><Field label="Medicine" value={m.name} onChange={(e) => upd(i, "name", e.target.value)} /><Field label="Dosage" value={m.dose} onChange={(e) => upd(i, "dose", e.target.value)} /><Field label="Days" type="number" value={m.days} onChange={(e) => upd(i, "days", e.target.value)} /><Button type="button" variant="ghost" aria-label="Remove medicine" disabled={meds.length === 1} onClick={() => setMeds(meds.filter((_, j) => j !== i))}><Trash2 size={16} /></Button></div>)}
        <Button type="button" variant="ghost" onClick={() => setMeds([...meds, { name: "", dose: "", days: "" }])}><Plus size={16} />Add medicine</Button>
        <Field label="Advice" value={notes} onChange={(e) => setNotes(e.target.value)} />
        {err && <p className="text-sm text-red-500">{err}</p>}
        <Button>Send prescription</Button>
      </form></Card>
    </Shell>
  );
}
