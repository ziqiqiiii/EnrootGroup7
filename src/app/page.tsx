import EventDetails from "@/components/EventDetails";
import EventDescription from "@/components/EventDescription";

export default function Home() {
  return (
    <div className="flex flex-col flexCenter items-center justify-center lg:py-14 py-8 overflow-hidden">
      <EventDetails />
      <EventDescription />
    </div>
  );
}
