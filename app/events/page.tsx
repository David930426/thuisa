import { Description } from "@/components/event-description";
import { eventData } from "@/lib/data";

export default function Page() {
  return (
    <div className="w-full min-h-screen pb-10">
      <div className="w-full bg-red-600 text-white text-center py-15 md:py-25">
        <h1 className="text-4xl md:text-6xl font-bold">Our Events</h1>
      </div>
      <h1 className="max-w-5xl text-red-600 text-2xl md:text-4xl font-bold 2xl:mx-auto  mx-10 mt-10 mb-5">
        Upcoming Events
      </h1>
      {eventData.map((event) => (
        <Description event={event} key={event.name} />
      ))}
    </div>
  );
}
