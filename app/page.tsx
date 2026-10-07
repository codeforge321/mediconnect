import { Video, FileText, Stethoscope, ShieldCheck, MessageSquare, Star, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LinkButton, Card, Badge } from "@/components/ui";
import { testimonials, faqs } from "@/lib/data";
const services = [[Video, "Video consultation", "Talk to a verified doctor face to face from home."], [FileText, "Digital prescriptions", "Receive and download prescriptions right after the call."], [Stethoscope, "Specialist care", "Cardiology, dermatology, pediatrics, mental health and more."], [MessageSquare, "Follow-up chat", "Message your doctor about reports and recovery."], [ShieldCheck, "Secure records", "Keep reports and history organised in one place."]] as const;
const stats = [["2,500+", "Verified doctors"], ["180k", "Consultations completed"], ["4.8/5", "Average patient rating"], ["< 10 min", "Typical wait time"]];
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-rise">
            <Badge tone="teal">Doctors available now</Badge>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">See a trusted doctor in minutes, without leaving home</h1>
            <p className="mt-4 max-w-md text-slate-600">Book a video consultation, get a digital prescription, and keep every report in one secure place.</p>
            <div className="mt-6 flex flex-wrap gap-3"><LinkButton href="/doctors">Find a doctor</LinkButton><LinkButton href="/register" variant="ghost">Create free account</LinkButton></div>
          </div>
          <Card className="animate-rise bg-ink p-0 text-white [animation-delay:.15s]">
            <div className="relative grid h-64 place-items-center rounded-t-2xl bg-gradient-to-br from-brand-700 to-teal-600">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-white/20 text-3xl font-bold">AR</div>
              <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-xs"><span className="h-2 w-2 rounded-full bg-red-400" />Live · 12:08</span>
              <span className="absolute bottom-3 right-3 h-16 w-24 rounded-lg bg-white/25" />
            </div>
            <div className="flex items-center justify-between p-4"><div><p className="font-semibold">Dr. Ananya Rao</p><p className="text-xs text-slate-300">Cardiology · 14 yrs</p></div><Badge tone="teal">Prescription ready</Badge></div>
          </Card>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Care for the whole family</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([Icon, t, d]) => <Card key={t}><span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600"><Icon size={22} /></span><h3 className="mt-4 font-semibold">{t}</h3><p className="mt-1 text-sm text-slate-600">{d}</p></Card>)}
        </div>
      </section>
      <section className="bg-brand-600 text-white"><div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4">{stats.map(([v, l]) => <div key={l}><p className="text-3xl font-extrabold">{v}</p><p className="text-sm text-brand-100">{l}</p></div>)}</div></section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">What patients say</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">{testimonials.map((t) => <Card key={t.name}><div className="flex text-amber-400">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div><p className="mt-3 text-sm text-slate-700">{t.text}</p><p className="mt-4 text-sm font-semibold">{t.name}, <span className="font-normal text-slate-500">{t.city}</span></p></Card>)}</div>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-20">
        <h2 className="text-3xl font-bold">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">{faqs.map(([q, a]) => <details key={q} className="group rounded-xl border border-brand-100 bg-white p-4"><summary className="flex cursor-pointer list-none items-center justify-between font-semibold">{q}<ChevronDown size={18} className="transition group-open:rotate-180" /></summary><p className="mt-2 text-sm text-slate-600">{a}</p></details>)}</div>
      </section>
      <Footer />
    </>
  );
}
