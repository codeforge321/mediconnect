import BookingFlow from "@/components/BookingFlow";
import { doctors } from "@/lib/data";

export function generateStaticParams() {
  return doctors.map((d) => ({ id: d.id }));
}
export default function Page() {
  return <BookingFlow />;
}
