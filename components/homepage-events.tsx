import Link from "next/link";
import Image from "next/image";
import { eventData } from "@/lib/events-data";
import { EventDialogContent } from "./event-dialog";
import { Dialog, DialogTrigger } from "./ui/dialog";

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
      <div className="max-w-7xl md:mx-auto py-10 md:py-10 md:px-20 px-5 md:shadow rounded-4xl group">
        <div className="md:flex">
          {events.map((event) => {
            const selected = eventData.find(
              (select) => select.name === event.name
            );
            return selected ? (
              <Dialog key={event.name}>
                <DialogTrigger asChild>
                  <div className="w-full border-gray border-1 p-5 md:p-6 rounded-4xl shadow mr-10 max-md:mb-5 hover:shadow-2xl hover:cursor-pointer group-hover:grayscale-100 hover:grayscale-0 transition-all duration-350 ease-in-out">
                    <h1 className="text-center text-xl md:text-3xl font-bold mb-4 md:mb-8 text-red-600 uppercase">
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
                      <div className="md:mt-5 md:text-xl">
                        <p>Date: {event.date ? event.date : "TBD"} </p>
                        <p>
                          Location: {event.location ? event.location : "TBD"}
                        </p>
                        <p className="md:mt-5 md:mb-7 mt-3">{event.info}</p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <EventDialogContent event={selected} />
              </Dialog>
            ) : null;
          })}
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
