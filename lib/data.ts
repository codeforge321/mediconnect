export type Doctor = { id: string; name: string; spec: string; exp: number; rating: number; reviews: number; fee: number; available: boolean; qual: string; about: string; slots: string[]; verified: boolean };
export const doctors: Doctor[] = [
  { id: "d1", name: "Dr. Ananya Rao", spec: "Cardiology", exp: 14, rating: 4.9, reviews: 312, fee: 800, available: true, verified: true, qual: "MD Cardiology, AIIMS Delhi", about: "Focuses on preventive cardiology, hypertension and long-term heart-health management.", slots: ["09:00", "10:30", "14:00", "16:30"] },
  { id: "d2", name: "Dr. Rohan Mehta", spec: "Dermatology", exp: 9, rating: 4.7, reviews: 204, fee: 600, available: true, verified: true, qual: "MD Dermatology, PGIMER", about: "Treats acne, eczema, hair loss and skin allergies with evidence-based care.", slots: ["11:00", "12:00", "15:30"] },
  { id: "d3", name: "Dr. Sana Iqbal", spec: "Pediatrics", exp: 11, rating: 4.8, reviews: 268, fee: 500, available: false, verified: true, qual: "MD Pediatrics, KGMU", about: "Child growth, vaccinations and common childhood infections.", slots: ["10:00", "13:30"] },
  { id: "d4", name: "Dr. Vikram Singh", spec: "Orthopedics", exp: 18, rating: 4.6, reviews: 189, fee: 900, available: true, verified: true, qual: "MS Orthopedics, CMC Vellore", about: "Joint pain, sports injuries and post-surgery rehabilitation guidance.", slots: ["09:30", "11:30", "17:00"] },
  { id: "d5", name: "Dr. Meera Nair", spec: "Psychiatry", exp: 8, rating: 4.9, reviews: 176, fee: 1000, available: true, verified: true, qual: "MD Psychiatry, NIMHANS", about: "Anxiety, sleep problems and stress management in a calm, private setting.", slots: ["12:30", "15:00", "18:00"] },
  { id: "d6", name: "Dr. Arjun Kapoor", spec: "General Medicine", exp: 6, rating: 4.5, reviews: 241, fee: 300, available: true, verified: true, qual: "MBBS, MD Medicine, MAMC", about: "First point of contact for fever, infections, diabetes and routine check-ups.", slots: ["09:00", "10:00", "11:00", "16:00"] },
  { id: "d7", name: "Dr. Kavya Joshi", spec: "Gynecology", exp: 13, rating: 4.8, reviews: 295, fee: 700, available: false, verified: true, qual: "MS Obstetrics & Gynecology, JIPMER", about: "Women's health, pregnancy care and hormonal conditions.", slots: ["14:30", "16:00"] },
  { id: "d8", name: "Dr. Imran Qureshi", spec: "ENT", exp: 10, rating: 4.4, reviews: 128, fee: 550, available: true, verified: false, qual: "MS ENT, GMC Mumbai", about: "Ear, nose and throat problems, sinus and hearing concerns.", slots: ["10:30", "13:00"] },
];
export const specs = Array.from(new Set(doctors.map((d) => d.spec)));
export const appointments = [
  { id: "a1", doctor: "Dr. Ananya Rao", patient: "Priya Sharma", spec: "Cardiology", date: "Oct 9, 2026", time: "10:30", status: "Upcoming" },
  { id: "a2", doctor: "Dr. Rohan Mehta", patient: "Priya Sharma", spec: "Dermatology", date: "Oct 14, 2026", time: "15:30", status: "Upcoming" },
  { id: "a3", doctor: "Dr. Arjun Kapoor", patient: "Priya Sharma", spec: "General Medicine", date: "Sep 21, 2026", time: "09:00", status: "Completed" },
];
export const prescriptions = [
  { id: "rx1", doctor: "Dr. Arjun Kapoor", date: "Sep 21, 2026", dx: "Seasonal viral fever", meds: [{ name: "Paracetamol 500 mg", dose: "1 tablet, 3 times a day", days: 3 }, { name: "Cetirizine 10 mg", dose: "1 tablet at night", days: 5 }], notes: "Rest, drink fluids. Return if fever lasts beyond 3 days." },
  { id: "rx2", doctor: "Dr. Ananya Rao", date: "Aug 2, 2026", dx: "Mild hypertension", meds: [{ name: "Amlodipine 5 mg", dose: "1 tablet each morning", days: 30 }], notes: "Reduce salt. Check blood pressure daily." },
];
export const records = [
  { id: "r1", title: "Complete Blood Count", type: "Lab report", date: "Sep 20, 2026" },
  { id: "r2", title: "ECG report", type: "Diagnostic", date: "Aug 2, 2026" },
  { id: "r3", title: "Chest X-ray", type: "Imaging", date: "Jun 11, 2026" },
];
export const patients = [
  { id: "p1", name: "Priya Sharma", age: 29, last: "Sep 21, 2026", reason: "Fever" },
  { id: "p2", name: "Rahul Verma", age: 41, last: "Oct 1, 2026", reason: "Chest discomfort" },
  { id: "p3", name: "Neha Gupta", age: 35, last: "Sep 28, 2026", reason: "Follow-up" },
];
export const threads = [
  { id: "t1", with: "Dr. Ananya Rao", msgs: [{ me: false, t: "Your ECG looks normal. Keep taking the medicine as prescribed." }, { me: true, t: "Thank you, doctor. Should I come for a follow-up?" }, { me: false, t: "Yes, book a slot after two weeks." }] },
  { id: "t2", with: "Dr. Rohan Mehta", msgs: [{ me: false, t: "Please upload a clear photo of the affected area before our visit." }] },
];
export const testimonials = [
  { name: "Sunita Agarwal", city: "Lucknow", text: "I got a cardiologist appointment the same evening. The prescription was in my inbox before the call even ended." },
  { name: "Aditya Rao", city: "Pune", text: "My parents live in a small town. Now their reports and doctor chats are in one place I can follow." },
  { name: "Farah Khan", city: "Hyderabad", text: "Booking, paying and talking to the doctor took less time than finding parking at a clinic." },
];
export const faqs = [
  ["Are the doctors verified?", "Yes. Every doctor's registration and qualifications are checked by our admin team before their profile goes live."],
  ["Can I get a prescription online?", "Doctors can issue digital prescriptions after a consultation. You can view and download them from your dashboard."],
  ["Is MediConnect for emergencies?", "No. For emergencies such as chest pain or severe bleeding, call your local emergency number or go to the nearest hospital."],
  ["Is my data private?", "Your records are visible only to you and the doctors you consult. Production deployments should add encryption and consent controls."],
];
