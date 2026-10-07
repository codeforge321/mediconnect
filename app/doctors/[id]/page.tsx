import { notFound } from "next/navigation";
import { Star, GraduationCap, BadgeCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Badge, Card, LinkButton } from "@/components/ui";
import { doctors } from "@/lib/data";
export function generateStaticParams() {
  return doctors.map((d) => ({ id: d.id }));
}
export default function DoctorProfile({ params }: { params: { id: string } }) {
  const d = doctors.find((x) => x.id === params.id);
  if (!d) notFound();
  return (
    <>
      <Navbar />
      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <Card className="md:col-span-2">
          <div className="flex items-center gap-4"><div className="grid h-20 w-20 place-items-center rounded-full bg-brand-50 text-2xl font-bold text-brand-700">{d.name.split(" ").slice(1).map((n) => n[0]).join("")}</div>
            <div><h1 className="flex items-center gap-2 text-2xl font-bold">{d.name}{d.verified && <BadgeCheck className="text-teal-500" size={20} />}</h1><p className="text-slate-500">{d.spec} · {d.exp} years experience</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-amber-500"><Star size={14} fill="currentColor" />{d.rating} <span className="text-slate-500">({d.reviews} reviews)</span></p></div></div>
          <h2 className="mt-6 font-semibold">About</h2><p className="mt-1 text-sm text-slate-600">{d.about}</p>
          <h2 className="mt-6 flex items-center gap-2 font-semibold"><GraduationCap size={18} />Qualifications</h2><p className="mt-1 text-sm text-slate-600">{d.qual}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Consultation fee</p><p className="text-3xl font-bold text-brand-700">₹{d.fee}</p>
          <h2 className="mt-5 font-semibold">Available slots today</h2>
          <div className="mt-2 flex flex-wrap gap-2">{d.slots.map((s) => <Badge key={s}>{s}</Badge>)}</div>
          <LinkButton href={`/book/${d.id}`} className="mt-6 w-full">Book appointment</LinkButton>
        </Card>
      </main>
    </>
  );
}
