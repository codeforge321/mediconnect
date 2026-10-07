import Link from "next/link";
import type { ReactNode, InputHTMLAttributes, ButtonHTMLAttributes } from "react";
export const cn = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");
const base = "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition disabled:opacity-60";
const variants = { primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-soft", teal: "bg-teal-500 text-white hover:bg-teal-600", ghost: "border border-brand-100 bg-white text-brand-700 hover:bg-brand-50", danger: "bg-red-500 text-white hover:bg-red-600" };
type V = keyof typeof variants;
export function LinkButton({ href, children, variant = "primary", className }: { href: string; children: ReactNode; variant?: V; className?: string }) {
  return <Link href={href} className={cn(base, variants[variant], className)}>{children}</Link>;
}
export function Button({ variant = "primary", className, ...p }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: V }) {
  return <button {...p} className={cn(base, variants[variant], className)} />;
}
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border border-brand-100/70 bg-white p-5 shadow-soft", className)}>{children}</div>;
}
export function Badge({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "teal" | "gray" | "amber" }) {
  const t = { blue: "bg-brand-50 text-brand-700", teal: "bg-teal-50 text-teal-600", gray: "bg-slate-100 text-slate-600", amber: "bg-amber-50 text-amber-700" }[tone];
  return <span className={cn("inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold", t)}>{children}</span>;
}
export function Field({ label, error, ...p }: InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input {...p} aria-invalid={!!error} className={cn("mt-1 w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-brand-500", error ? "border-red-400" : "border-brand-100")} />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
export function Stat({ label, value }: { label: string; value: string | number }) {
  return <Card><p className="text-sm text-slate-500">{label}</p><p className="mt-1 text-3xl font-bold text-brand-700">{value}</p></Card>;
}
