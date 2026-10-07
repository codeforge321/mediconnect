"use client";
import { useState } from "react";
import Shell from "@/components/Shell";
import { Badge, Button, Card, Stat } from "@/components/ui";
import { doctors, patients, appointments } from "@/lib/data";
export default function Admin() {
  const [verified, setVerified] = useState<Record<string, boolean>>(Object.fromEntries(doctors.map((d) => [d.id, d.verified])));
  return (
    <Shell role="admin" title="Admin overview">
      <div className="grid gap-4 sm:grid-cols-3"><Stat label="Doctors" value={doctors.length} /><Stat label="Patients" value={patients.length * 1200} /><Stat label="Appointments" value={appointments.length * 840} /></div>
      <Card className="mt-8 overflow-x-auto"><h2 className="font-semibold">Doctor verification</h2>
        <table className="mt-3 w-full min-w-[480px] text-left text-sm"><thead className="text-slate-500"><tr><th className="py-2">Doctor</th><th>Specialization</th><th>Status</th><th /></tr></thead>
          <tbody>{doctors.map((d) => <tr key={d.id} className="border-t border-brand-100"><td className="py-3 font-medium">{d.name}</td><td>{d.spec}</td><td><Badge tone={verified[d.id] ? "teal" : "amber"}>{verified[d.id] ? "Verified" : "Pending"}</Badge></td>
            <td className="text-right"><Button variant={verified[d.id] ? "ghost" : "teal"} className="!px-3 !py-1.5" onClick={() => setVerified({ ...verified, [d.id]: !verified[d.id] })}>{verified[d.id] ? "Revoke" : "Verify"}</Button></td></tr>)}</tbody></table></Card>
      <Card className="mt-6"><h2 className="font-semibold">Patients</h2><ul className="mt-2 divide-y divide-brand-100 text-sm">{patients.map((p) => <li key={p.id} className="flex justify-between py-2"><span>{p.name}, {p.age}</span><span className="text-slate-500">Last visit {p.last}</span></li>)}</ul></Card>
    </Shell>
  );
}
