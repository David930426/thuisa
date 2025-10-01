import Link from "next/link";
import Image from "next/image";
import { eventData } from "@/lib/data";
import EventDialog from "./event-dialog";

export default function Events() {
  const events = [
    {
      name: "yingxin 1",
      img: "yingxin1.JPG",
      date: "",
      location: "",
      info: "Meet fellow Indonesian students, connect with seniors, and get to know the THUISA family.",
    },
    {
      name: "yingxin 2",
      img: "yingxin2.jpeg",
      date: "",
      location: "",
      info: "Step away from the books and join us for an unforgettable day of fun, laughter, and friendship!",
    },
  ];
  return (
    <>
      <Title />
      <div className="max-w-7xl md:mx-auto py-10 md:py-10 md:px-20 px-5 md:shadow rounded-4xl">
        <div className="md:flex">
          {events.map((event) => (
            <div
              className="w-full border-gray border-1 p-5 md:p-6 rounded-4xl shadow mr-10 max-md:mb-5"
              key={event.name}
            >
              <h1 className="text-center text-xl md:text-2xl font-bold mb-4 md:mb-8 text-red-600 uppercase">
                {event.name}
              </h1>
              <div className="flex">
                <div className="md:mr-5 mr-3">
                  <Image
                    src={`./${event.img}`}
                    alt={event.name}
                    width={200}
                    height={220}
                    className="rounded-xl md:min-w-50 mr-6 min-w-30"
                  />
                </div>
                <div className="md:mt-5">
                  <p>Date: {event.date ? event.date : "TBD"} </p>
                  <p>Location: {event.location ? event.location : "TBD"}</p>
                  <p className="md:mt-5 md:mb-7">{event.info}</p>
                  <LearnMore eventName={event.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/events"
          className="mt-10 block w-fit mx-auto md:text-xl hover:text-red-600 text-center"
        >
          <span>VIEW ALL EVENTS</span>
        </Link>
      </div>
    </>
  );
}

function LearnMore({ eventName }: { eventName: string }) {
  const selectedData = eventData.find((select) => select.name === eventName);
  return (
    selectedData && <EventDialog event={selectedData} />
  );
}

function Title() {
  return (
    <div className="mt-30 md:mb-10 mb-2 text-center mx-5">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-red-600">
        What’s Happening Next?
      </h1>
      <p className="text-md md:text-xl">
        There’s always something to look forward to at THUISA. Here’s what’s
        coming up:
      </p>
    </div>
  );
}
