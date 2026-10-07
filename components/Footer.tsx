import { Logo } from "./Navbar";
export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2"><div className="[&_a]:text-white"><Logo /></div><p className="mt-3 max-w-sm text-sm">Trusted doctors, secure video consultations and your health records in one place.</p></div>
        <div className="text-sm"><p className="font-semibold text-white">Platform</p><ul className="mt-3 space-y-2"><li>Find doctors</li><li>Video consultation</li><li>Prescriptions</li></ul></div>
        <div className="text-sm"><p className="font-semibold text-white">Company</p><ul className="mt-3 space-y-2"><li>About</li><li>Privacy policy</li><li>Contact</li></ul></div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-xs">© 2026 MediConnect. Demo project with fictional data. Not for real medical use.</p>
    </footer>
  );
}
