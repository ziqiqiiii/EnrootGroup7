import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
export default function Home() {
  const launchDate = '2024-11-20T19:00:00';

  return (
    <div className="space-y-20 flex flex-col items-center justify-center min-h-screen mt-[-150px]">
      <EventDetails />
      <Countdown targetDate={launchDate} />
    </div>
  );
}
