import Shell from "@/components/Shell";
import { Badge, Card, LinkButton, Stat } from "@/components/ui";
import { appointments, patients } from "@/lib/data";
const schedule = [["09:00", "Rahul Verma", "Chest discomfort"], ["10:30", "Priya Sharma", "Follow-up"], ["14:00", "Neha Gupta", "Report review"]];
export default function DoctorDashboard() {
  return (
    <Shell role="doctor" title="Good morning, Dr. Rao">
      <div className="grid gap-4 sm:grid-cols-3"><Stat label="Today's consultations" value={schedule.length} /><Stat label="Total patients" value={patients.length} /><Stat label="Rating" value="4.9" /></div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card><h2 className="font-semibold">Today's schedule</h2><ul className="mt-3 divide-y divide-brand-100">{schedule.map(([t, n, r]) => <li key={t} className="flex items-center justify-between py-3 text-sm"><span><b>{t}</b> · {n}<br /><span className="text-slate-500">{r}</span></span><LinkButton href="/consult" className="!px-3 !py-1.5">Start</LinkButton></li>)}</ul></Card>
        <Card><h2 className="font-semibold">Recent patients</h2><ul className="mt-3 divide-y divide-brand-100">{patients.map((p) => <li key={p.id} className="flex items-center justify-between py-3 text-sm"><span><b>{p.name}</b>, {p.age}<br /><span className="text-slate-500">{p.reason} · {p.last}</span></span><Badge>Patient</Badge></li>)}</ul><LinkButton href="/prescriptions/new" variant="teal" className="mt-3 w-full">Write prescription</LinkButton></Card>
      </div>
      <p className="mt-6 text-xs text-slate-400">{appointments.length} appointments on record.</p>
    </Shell>
  );
}
