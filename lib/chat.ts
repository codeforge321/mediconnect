export type ChatMessage = { role: "user" | "assistant"; content: string };

const rules: [RegExp, string][] = [
  [/chest|heart|palpitation|blood pressure|bp/i, "Heart and blood-pressure concerns are usually handled by a Cardiologist. If you have severe chest pain or breathlessness, seek emergency care immediately."],
  [/skin|rash|acne|hair|itch/i, "Skin and hair problems are best reviewed by a Dermatologist. Note when it started and what makes it better or worse."],
  [/child|baby|kid|vaccine/i, "For children, a Pediatrician is the right choice. Keep vaccination records handy for the consultation."],
  [/joint|knee|back pain|bone|fracture/i, "Joint, bone and back pain are managed by an Orthopedic doctor. Rest and avoid heavy lifting until you are seen."],
  [/anxiety|stress|sleep|depress|mood/i, "Anxiety, stress and sleep concerns can be discussed with a Psychiatrist. You are not alone, and support is available."],
  [/fever|cold|cough|flu|headache/i, "Fever, cough and common infections are usually seen by a General Medicine doctor. Drink fluids and rest; see a doctor if fever lasts over 3 days."],
  [/ear|nose|throat|sinus/i, "Ear, nose and throat issues are handled by an ENT specialist."],
];

/** The UI only calls this. Replace the body with a real AI API call later (use a backend so the key stays secret). */
export async function askAssistant(messages: ChatMessage[]): Promise<string> {
  const last = messages.filter((m) => m.role === "user").at(-1)?.content ?? "";
  await new Promise((r) => setTimeout(r, 700));
  const hit = rules.find(([r]) => r.test(last));
  return hit ? hit[1] : "I can share general health information and suggest which specialist to see. Tell me your symptoms or what you need help with.";
}
