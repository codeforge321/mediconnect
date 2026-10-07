"use client";
import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Video, VideoOff, MonitorUp, PhoneOff, Send } from "lucide-react";
import Shell from "@/components/Shell";
import { cn } from "@/components/ui";
export default function Consult() {
  const [mic, setMic] = useState(true); const [cam, setCam] = useState(true); const [share, setShare] = useState(false); const [ended, setEnded] = useState(false);
  const [secs, setSecs] = useState(0); const [text, setText] = useState(""); const [msgs, setMsgs] = useState([{ me: false, t: "Hello Priya, how are you feeling today?" }]);
  const video = useRef<HTMLVideoElement>(null); const stream = useRef<MediaStream | null>(null);
  useEffect(() => { if (ended) return; const i = setInterval(() => setSecs((s) => s + 1), 1000); return () => clearInterval(i); }, [ended]);
  useEffect(() => {
    navigator.mediaDevices?.getUserMedia({ video: true, audio: true }).then((s) => { stream.current = s; if (video.current) video.current.srcObject = s; }).catch(() => {});
    return () => stream.current?.getTracks().forEach((t) => t.stop());
  }, []);
  const toggle = (kind: "video" | "audio", on: boolean) => stream.current?.getTracks().filter((t) => t.kind === kind).forEach((t) => (t.enabled = on));
  const end = () => { stream.current?.getTracks().forEach((t) => t.stop()); setEnded(true); };
  const mm = String(Math.floor(secs / 60)).padStart(2, "0"), ss = String(secs % 60).padStart(2, "0");
  const ctl = "grid h-11 w-11 place-items-center rounded-full text-white transition";
  return (
    <Shell role="patient" title="Video consultation">
      {ended ? <p className="rounded-2xl bg-white p-8 text-center">Call ended after {mm}:{ss}. Your prescription will appear in your dashboard.</p> : (
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl bg-ink lg:col-span-2">
            <div className="grid aspect-video place-items-center bg-gradient-to-br from-brand-700 to-teal-600 text-white"><div className="text-center"><div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white/20 text-2xl font-bold">AR</div><p className="mt-2 font-semibold">Dr. Ananya Rao</p>{share && <p className="text-xs">You are sharing your screen</p>}</div></div>
            <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs text-white">{mm}:{ss}</span>
            <video ref={video} autoPlay muted playsInline className={cn("absolute bottom-20 right-3 h-24 w-36 rounded-lg bg-black object-cover", !cam && "opacity-20")} />
            <div className="flex justify-center gap-3 p-4">
              <button aria-label="Toggle microphone" onClick={() => { setMic(!mic); toggle("audio", !mic); }} className={cn(ctl, mic ? "bg-white/15" : "bg-red-500")}>{mic ? <Mic size={18} /> : <MicOff size={18} />}</button>
              <button aria-label="Toggle camera" onClick={() => { setCam(!cam); toggle("video", !cam); }} className={cn(ctl, cam ? "bg-white/15" : "bg-red-500")}>{cam ? <Video size={18} /> : <VideoOff size={18} />}</button>
              <button aria-label="Share screen" onClick={() => setShare(!share)} className={cn(ctl, share ? "bg-teal-500" : "bg-white/15")}><MonitorUp size={18} /></button>
              <button aria-label="End call" onClick={end} className={cn(ctl, "bg-red-500 hover:bg-red-600")}><PhoneOff size={18} /></button>
            </div>
          </div>
          <div className="flex h-[26rem] flex-col rounded-2xl bg-white p-4 shadow-soft lg:h-auto">
            <h2 className="font-semibold">In-call chat</h2>
            <div className="mt-3 flex-1 space-y-2 overflow-y-auto text-sm">{msgs.map((m, i) => <p key={i} className={cn("w-fit max-w-[85%] rounded-2xl px-3 py-2", m.me ? "ml-auto bg-brand-600 text-white" : "bg-mist")}>{m.t}</p>)}</div>
            <form onSubmit={(e) => { e.preventDefault(); if (text.trim()) { setMsgs([...msgs, { me: true, t: text }]); setText(""); } }} className="mt-3 flex gap-2"><input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" className="flex-1 rounded-xl border border-brand-100 px-3 py-2 text-sm" /><button aria-label="Send" className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white"><Send size={16} /></button></form>
          </div>
        </div>)}
    </Shell>
  );
}
