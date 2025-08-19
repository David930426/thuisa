import { ButtonPrimary } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function Page() {
  const eventData = [
    {
      title: "YINGXIN 2",
      day: 13,
      month: "OCTOBER",
      year: 2025,
    },
    {
      title: "HALLOWEEN",
      day: undefined,
      month: "OCTOBER",
      year: 2025,
    },
  ];
  return (
    <div className="w-full min-h-screen pb-10">
      <div className="w-full bg-red-600 text-white text-center py-15 md:py-25">
        <h1 className="text-4xl md:text-6xl font-bold">Our Events</h1>
      </div>
      <h1 className="max-w-5xl text-red-600 text-2xl md:text-4xl font-bold 2xl:mx-auto  mx-10 mt-10 mb-5">
        Upcoming Events
      </h1>
      <div className="shadow-xl rounded-2xl max-w-6xl mx-5 2xl:mx-auto p-10 flex md:gap-10 gap-5">
        <div>
          <Image
            src="/yingxin1.JPG"
            alt="yingxin1"
            width={200}
            height={220}
            className="rounded-xl md:min-w-50 min-w-30"
          />
        </div>
        <div>
          <h1 className="text-red-600 text-xl md:text-2xl font-bold max-md:mt-5">
            YINGXIN 1
          </h1>
          <h3 className="text-gray-400 md:text-xl text-md md:mb-5 mb-2">
            Freshmen Welcome Event
          </h3>
          <p className="md:text-xl text-md md:my-10 mb-5 max-md:hidden">
            Kick off your journey at Tunghai with Yingxin 1! 🎉 A must-join
            orientation for all new Indonesian students, where you’ll meet
            seniors, bond with fellow freshmen, and discover Tunghai and THUISA
            through fun games and activities.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <ButtonPrimary label="View Event" className="max-md:mt-7" />
            </DialogTrigger>
            <DialogContent className="md:min-w-4xl max-h-[80vh] overflow-y-auto md:text-xl text-sm">
              <DialogHeader>
                <DialogTitle>YINGXIN 1</DialogTitle>
                <DialogDescription>Freshmen Welcome Event</DialogDescription>
              </DialogHeader>
              <p>
                <span className="font-bold">Event Type:</span> Orientation /
                Community Bonding
              </p>
              <p>
                <span className="font-bold">Who Must Attend:</span> All new
                Indonesian freshmen at Tunghai University
              </p>
              <p>
                <span className="font-bold">Date & Time: </span>
              </p>
              <p>
                <span className="font-bold">Location: </span>
              </p>
              <h1 className="font-bold">About the Event</h1>
              <p>
                Yingxin 1 is the very first gathering of the semester, created
                to warmly welcome new Indonesian students. This orientation is
                your chance to meet fellow freshmen, connect with seniors, and
                be introduced to Tunghai University and THUISA (Tunghai
                Indonesian Student Association).
              </p>
              <h1 className="font-bold">Activities</h1>
              <p>
                Enjoy fun ice-breaking games, interactive sessions, and group
                bonding designed to help you make friends and feel part of the
                community right away.
              </p>
              <h1 className="font-bold">Why You Should Join</h1>
              <p>
                Instantly connect with fellow Indonesian students. Meet seniors
                who will guide and support you. Learn about campus life and
                opportunities. Build lasting friendships and memories.
              </p>
              <h1 className="font-bold">Important Note</h1>
              <p>
                This is a mandatory event for all new Indonesian freshmen. No
                registration needed — just come, join, and enjoy!
              </p>
              <DialogFooter className="md:mt-15 mt-10">
                <DialogClose asChild>
                  <ButtonPrimary label="Close" />
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl font-bold text-red-600">SEP</h1>
          <p className="text-md md:text-xl text-gray-600">2025</p>
        </div>
      </div>
      {eventData.map((event, index) => (
        <div
          key={index}
          className="shadow-md rounded-2xl max-w-6xl mx-5 2xl:mx-auto p-10 flex md:gap-10 gap-5 2xl:mt-15 mt-10"
        >
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-red-600">{event.day}</h1>
              <h1 className={`text-red-600 font-bold ${!event.day ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                {event.month.length > 3 ? event.month.slice(0, 3) : event.month}
              </h1>
              <h1 className="text-md md:text-xl text-gray-600">{event.year}</h1>
            </div>
            <div></div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <ButtonPrimary label="View Event" className="max-md:mt-7 my-auto" />
            </DialogTrigger>
            <DialogContent className="md:min-w-4xl max-h-[80vh] overflow-y-auto md:text-xl text-sm">
              <DialogHeader>
                <DialogTitle>YINGXIN 1</DialogTitle>
                <DialogDescription>Freshmen Welcome Event</DialogDescription>
              </DialogHeader>
              <p>
                <span className="font-bold">Event Type:</span> Orientation /
                Community Bonding
              </p>
              <p>
                <span className="font-bold">Who Must Attend:</span> All new
                Indonesian freshmen at Tunghai University
              </p>
              <p>
                <span className="font-bold">Date & Time: </span>
              </p>
              <p>
                <span className="font-bold">Location: </span>
              </p>
              <h1 className="font-bold">About the Event</h1>
              <p>
                Yingxin 1 is the very first gathering of the semester, created
                to warmly welcome new Indonesian students. This orientation is
                your chance to meet fellow freshmen, connect with seniors, and
                be introduced to Tunghai University and THUISA (Tunghai
                Indonesian Student Association).
              </p>
              <h1 className="font-bold">Activities</h1>
              <p>
                Enjoy fun ice-breaking games, interactive sessions, and group
                bonding designed to help you make friends and feel part of the
                community right away.
              </p>
              <h1 className="font-bold">Why You Should Join</h1>
              <p>
                Instantly connect with fellow Indonesian students. Meet seniors
                who will guide and support you. Learn about campus life and
                opportunities. Build lasting friendships and memories.
              </p>
              <h1 className="font-bold">Important Note</h1>
              <p>
                This is a mandatory event for all new Indonesian freshmen. No
                registration needed — just come, join, and enjoy!
              </p>
              <DialogFooter className="md:mt-15 mt-10">
                <DialogClose asChild>
                  <ButtonPrimary label="Close" />
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
}
