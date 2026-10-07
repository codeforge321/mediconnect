"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Card, Field, cn } from "./ui";
import { Logo } from "./Navbar";
export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [role, setRole] = useState<"patient" | "doctor">("patient");
  const [v, setV] = useState({ name: "", email: "", password: "", license: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setV({ ...v, [k]: e.target.value });
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const x: Record<string, string> = {};
    if (mode === "register" && v.name.trim().length < 2) x.name = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = "Enter a valid email address";
    if (v.password.length < 8) x.password = "Use at least 8 characters";
    if (mode === "register" && role === "doctor" && !v.license.trim()) x.license = "Medical registration number is required";
    setErr(x);
    if (Object.keys(x).length) return;
    setLoading(true);
    setTimeout(() => router.push(role === "doctor" ? "/doctor" : "/patient"), 900); // replace with real auth
  }
  return (
    <main className="grid min-h-screen place-items-center bg-mist px-4 py-10">
      <div className="w-full max-w-md"><div className="mb-6 flex justify-center"><Logo /></div>
        <Card>
          <h1 className="text-xl font-bold">{mode === "login" ? "Welcome back" : "Create your account"}</h1>
          <div className="mt-4 grid grid-cols-2 gap-1 rounded-xl bg-brand-50 p-1 text-sm font-semibold">
            {(["patient", "doctor"] as const).map((r) => <button key={r} type="button" onClick={() => setRole(r)} className={cn("rounded-lg py-2 capitalize", role === r ? "bg-white text-brand-700 shadow-sm" : "text-slate-500")}>{r}</button>)}
          </div>
          <form onSubmit={submit} noValidate className="mt-4 space-y-4">
            {mode === "register" && <Field label="Full name" value={v.name} onChange={set("name")} error={err.name} />}
            <Field label="Email" type="email" value={v.email} onChange={set("email")} error={err.email} />
            <Field label="Password" type="password" value={v.password} onChange={set("password")} error={err.password} />
            {mode === "register" && role === "doctor" && <Field label="Medical registration number" value={v.license} onChange={set("license")} error={err.license} />}
            <Button className="w-full" disabled={loading}>{loading ? "Please wait…" : mode === "login" ? "Log in" : "Create account"}</Button>
          </form>
          <p className="mt-4 text-center text-sm text-slate-500">{mode === "login" ? <>New here? <Link href="/register" className="font-semibold text-brand-600">Create an account</Link></> : <>Already registered? <Link href="/login" className="font-semibold text-brand-600">Log in</Link></>}</p>
        </Card>
      </div>
    </main>
  );
}
