import { EventData } from "@/lib/types";
import Image from "next/image";
import EventDialog from "@/components/event-dialog";

export function Description({ event }: { event: EventData }) {
  return event.img ? (
    <div className="shadow-md rounded-2xl max-w-6xl mx-2 2xl:mx-auto md:mt-10 mt-5 p-6 md:p-10 flex justify-between">
      <div className="flex md:gap-10 gap-5">
        <Image
          src={`./${event.img}`}
          alt="yingxin1"
          width={200}
          height={220}
          className="rounded-xl md:min-w-50 min-w-20"
        />
        <div>
          <h1 className="text-red-600 text-xl md:text-2xl font-bold max-md:mt-5 whitespace-nowrap uppercase">
            {event.name}
          </h1>
          <h3 className="text-gray-400 md:text-xl text-md md:mb-5 mb-2">
            {event.subInfo}
          </h3>
          <p className="md:text-xl text-md md:my-10 mb-5 max-md:hidden">
            {event.about}
          </p>
          <EventDialog event={event} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-md ml-5 max-md:hidden">
        <Date day={event.day} month={event.month} year={event.year} />
      </div>
    </div>
  ) : (
    <div className="shadow-md rounded-2xl max-w-6xl mx-2 2xl:mx-auto py-5 px-6 md:p-10 flex md:gap-10 gap-5 2xl:mt-15 mt-10 justify-between">
      <div className="flex items-center gap-10">
        <div className="md:w-20 w-5 flex flex-col items-center justify-center">
          <Date day={event.day} month={event.month} year={event.year} />
        </div>
        <div>
          <h1
            className={`text-red-600 font-bold text-xl md:text-2xl uppercase mb-1 ${
              event.name.length < 11 && "whitespace-nowrap"
            }`}
          >
            {event.name}
          </h1>
          <p className="text-gray-400 md:text-xl text-sm md:mb-5 mb-2">
            {event.subInfo ? event.subInfo : "THUISA Event"}
          </p>
        </div>
      </div>
      <EventDialog event={event} />
    </div>
  );
}

function Date({
  day,
  month,
  year,
}: {
  day?: number;
  month: string;
  year: number;
}) {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold text-red-600">{day}</h1>
      <h1
        className={`text-red-600 font-bold uppercase ${
          !day ? "text-2xl md:text-4xl" : "text-md md:text-2xl"
        }`}
      >
        {month.length > 3 ? month.slice(0, 3) : month}
      </h1>
      <h1 className="text-md md:text-xl text-gray-600">{year}</h1>
    </>
  );
}
