"use client";
import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Sparkles } from "lucide-react";
import { askAssistant, type ChatMessage } from "@/lib/chat";
const suggestions = ["Which doctor for chest pain?", "I have a skin rash", "How to manage stress?", "Fever for two days"];
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<ChatMessage[]>([{ role: "assistant", content: "Hi, I'm your health assistant. I can share general health information and point you to the right specialist." }]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, busy]);
  async function send(q: string) {
    const content = q.trim();
    if (!content || busy) return;
    const next: ChatMessage[] = [...msgs, { role: "user", content }];
    setMsgs(next); setText(""); setBusy(true);
    try { setMsgs([...next, { role: "assistant", content: await askAssistant(next) }]); }
    catch { setMsgs([...next, { role: "assistant", content: "Sorry, I couldn't respond just now. Please try again." }]); }
    finally { setBusy(false); }
  }
  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[32rem] w-[calc(100vw-2.5rem)] max-w-sm animate-rise flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-gradient-to-r from-brand-600 to-teal-500 px-4 py-3 text-white">
            <div className="flex items-center gap-2 font-semibold"><Sparkles size={16} />Health Assistant</div>
            <button aria-label="Close chat" onClick={() => setOpen(false)}><X size={18} /></button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto bg-mist p-4 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex"}>
                <p className={`max-w-[85%] rounded-2xl px-3.5 py-2 ${m.role === "user" ? "bg-brand-600 text-white" : "bg-white shadow-sm"}`}>{m.content}</p>
              </div>
            ))}
            {busy && <div className="flex gap-1 rounded-2xl bg-white px-3.5 py-3 shadow-sm w-fit" aria-label="Assistant is typing">{[0, 1, 2].map((d) => <span key={d} className="h-2 w-2 animate-dot rounded-full bg-brand-500" style={{ animationDelay: `${d * 0.2}s` }} />)}</div>}
            {msgs.length === 1 && <div className="flex flex-wrap gap-2 pt-1">{suggestions.map((s) => <button key={s} onClick={() => send(s)} className="rounded-full border border-brand-100 bg-white px-3 py-1 text-xs text-brand-700 hover:bg-brand-50">{s}</button>)}</div>}
            <div ref={end} />
          </div>
          <p className="bg-amber-50 px-4 py-1.5 text-[11px] text-amber-700">General information only. Not a replacement for professional medical advice.</p>
          <form onSubmit={(e) => { e.preventDefault(); send(text); }} className="flex gap-2 border-t border-brand-100 p-3">
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Describe your symptoms…" className="flex-1 rounded-xl border border-brand-100 px-3 py-2 text-sm outline-none focus:border-brand-500" />
            <button aria-label="Send" disabled={busy || !text.trim()} className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white disabled:opacity-50"><Send size={16} /></button>
          </form>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-label="Open health assistant" className="ml-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-teal-500 text-white shadow-soft transition hover:scale-105"><Bot /></button>
    </div>
  );
}
