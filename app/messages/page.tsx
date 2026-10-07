"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import Shell from "@/components/Shell";
import { cn } from "@/components/ui";
import { threads } from "@/lib/data";
export default function Messages() {
  const [all, setAll] = useState(threads); const [active, setActive] = useState("t1"); const [text, setText] = useState("");
  const cur = all.find((t) => t.id === active)!;
  const send = (e: React.FormEvent) => { e.preventDefault(); if (!text.trim()) return; setAll(all.map((t) => (t.id === active ? { ...t, msgs: [...t.msgs, { me: true, t: text }] } : t))); setText(""); };
  return (
    <Shell role="patient" title="Messages">
      <div className="grid overflow-hidden rounded-2xl bg-white shadow-soft md:grid-cols-3">
        <ul className="border-b border-brand-100 md:border-b-0 md:border-r">{all.map((t) => <li key={t.id}><button onClick={() => setActive(t.id)} className={cn("w-full px-4 py-3 text-left text-sm", active === t.id && "bg-brand-50")}><b>{t.with}</b><br /><span className="line-clamp-1 text-slate-500">{t.msgs.at(-1)?.t}</span></button></li>)}</ul>
        <div className="flex h-96 flex-col p-4 md:col-span-2"><div className="flex-1 space-y-2 overflow-y-auto text-sm">{cur.msgs.map((m, i) => <p key={i} className={cn("w-fit max-w-[80%] rounded-2xl px-3 py-2", m.me ? "ml-auto bg-brand-600 text-white" : "bg-mist")}>{m.t}</p>)}</div>
          <form onSubmit={send} className="mt-3 flex gap-2"><input value={text} onChange={(e) => setText(e.target.value)} placeholder={`Message ${cur.with}`} className="flex-1 rounded-xl border border-brand-100 px-3 py-2 text-sm" /><button aria-label="Send" className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white"><Send size={16} /></button></form></div>
      </div>
    </Shell>
  );
}
