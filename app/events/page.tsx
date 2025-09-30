import ComingSoon from "@/components/coming-soon";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Page() {
  const eventData = [
    {
      title: "YINGXIN 2",
      day: 13,
      month: "OCTOBER",
      year: 2025,
      subInfo: "Trip & Bonding Adventure",
      type: "Student Trip / Bonding",
      who: "All Indonesian students at Tunghai",
      location: "",
      about:
        "Yingxin 2 is our follow-up event that takes you outside the classroom! This trip is all about bonding with fellow Indonesian students through fun activities in an exciting location.",
      activities: [
        "Group games & bonding sessions",
        "Exploring the destination (e.g., theme park, sightseeing)",
        "Team-building activities",
      ],
      reasons: [
        "Strengthen friendship with fellow Indonesians",
        "Experience fun outside campus",
        "Create unforgettable memories together",
      ],
      note: undefined,
    },
    {
      title: "HALLOWEEN",
      day: 31,
      month: "OCTOBER",
      year: 2025,
      subInfo: "Costume & Spooky Fun",
      type: "Holiday Celebration",
      who: "All Indonesian students at Tunghai",
      location: "Tunghai University Campus",
      about:
        "Celebrate the spooky season with THUISA! The Halloween event is filled with costumes, games, and themed activities that let students express creativity and enjoy a festive atmosphere together.",
      activities: [
        "Costume showcase",
        "Halloween-themed games",
        "Spooky snacks and fun",
      ],
      reasons: [
        "Enjoy a seasonal celebration",
        "Express your creativity",
        "Relax and have fun mid-semester",
      ],
      note: undefined,
    },
    {
      title: "CHRISTMAS DINNER",
      day: 24,
      month: "DECEMBER",
      year: 2025,
      subInfo: "Warm & Joyful Gathering",
      type: "Holiday Dinner",
      who: "All Indonesian students at Tunghai",
      location: "Tunghai University",
      about:
        "A cozy Christmas celebration where Indonesian students gather to enjoy food, games, and festive vibes together. This event brings warmth during the holiday season, fostering a sense of family away from home.",
      activities: [
        "Christmas dinner",
        "Games and sharing",
        "Holiday celebration",
      ],
      reasons: [
        "Celebrate Christmas together",
        "Feel at home with your peers",
        "Build warm memories",
      ],
      note: undefined,
    },
    {
      title: "GALA DINNER",
      day: 15,
      month: "FEBRUARY",
      year: 2026,
      subInfo: "Cultural Exchange & Formal Celebration",
      type: "Formal Dinner / Cultural Showcase",
      who: "Indonesian & International students, OIR, and guests",
      location: "Tunghai University (Formal Hall)",
      about:
        "The Gala Dinner is a formal evening co-hosted with Tunghai’s OIR and other international student associations. It includes performances, cultural showcases, and networking opportunities while representing Indonesia with pride.",
      activities: [
        "Formal dinner",
        "Cultural performances",
        "Networking with international students",
      ],
      reasons: [
        "Represent Indonesia in a formal event",
        "Connect with OIR and other associations",
        "Celebrate diversity and culture",
      ],
      note: "Formal attire required.",
    },
    {
      title: "THUISA CUP",
      day: 15,
      month: "MARCH",
      year: 2026,
      subInfo: "Sports & Unity Challenge",
      type: "Sports Competition",
      who: "All Indonesian students in Taiwan",
      location: "Tunghai University",
      about:
        "A large-scale sports event that unites Indonesian students across Taiwan. The THUISA Cup allows participants to compete, build sportsmanship, and create connections beyond their own campus.",
      activities: [
        "Sports tournaments",
        "Team competitions",
        "Bonding with Indonesian students across Taiwan",
      ],
      reasons: [
        "Show your skills in sports",
        "Strengthen unity among Indonesians",
        "Connect beyond your own university",
      ],
      note: undefined,
    },
    {
      title: "INTERNATIONAL WEEK",
      day: 20,
      month: "APRIL",
      year: 2026,
      subInfo: "Culture & Flavors Festival",
      type: "Cultural Event",
      who: "Open to all Tunghai students and faculty",
      location: "Tunghai University",
      about:
        "A week-long cultural festival hosted by OIR where THUISA represents Indonesia. Students prepare booths with Indonesian food and traditions, sharing culture with the wider Tunghai community.",
      activities: [
        "Indonesian food booth",
        "Cultural display",
        "Cross-cultural exchange",
      ],
      reasons: [
        "Promote Indonesian culture",
        "Be part of a global event",
        "Celebrate diversity together",
      ],
      note: undefined,
      noTicket: true,
    },
    {
      title: "GRADUATION",
      day: 15,
      month: "JUNE",
      year: 2026,
      subInfo: "Honoring Our Seniors",
      type: "Graduation Ceremony",
      who: "Graduating Indonesian students, families, and friends",
      location: "Tunghai University (Organized by OIR)",
      about:
        "The graduation ceremony is the closing chapter of the academic journey. THUISA contributes to OIR’s official event to celebrate the achievements of graduating seniors, honoring their hard work and success.",
      activities: [
        "Graduation ceremony",
        "Celebration with peers and families",
        "Farewell to seniors",
      ],
      reasons: [
        "Celebrate achievements of seniors",
        "Support fellow Indonesians",
        "Mark a new beginning",
      ],
      note: undefined,
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
      <div className="shadow-xl rounded-2xl max-w-6xl mx-5 2xl:mx-auto p-5 md:p-10 flex justify-between">
        <div className="flex md:gap-10 gap-5">
          <div>
            <Image
              src="./yingxin1.JPG"
              alt="yingxin1"
              width={200}
              height={220}
              className="rounded-xl md:min-w-50 min-w-30"
            />
          </div>
          <div>
            <h1 className="text-red-600 text-xl md:text-2xl font-bold max-md:mt-5 whitespace-nowrap">
              YINGXIN 1
            </h1>
            <h3 className="text-gray-400 md:text-xl text-md md:mb-5 mb-2">
              Freshmen Welcome Event
            </h3>
            <p className="md:text-xl text-md md:my-10 mb-5 max-md:hidden">
              Kick off your journey at Tunghai with Yingxin 1! 🎉 A must-join
              orientation for all new Indonesian students, where you’ll meet
              seniors, bond with fellow freshmen, and discover Tunghai and
              THUISA through fun games and activities.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <ButtonPrimary className="max-md:mt-7">
                  View Event
                </ButtonPrimary>
              </DialogTrigger>
              <DialogContent className="2xl:min-w-4xl max-h-[80vh] overflow-y-auto md:text-xl text-sm">
                <DialogHeader>
                  <DialogTitle className="md:text-3xl text-red-600">
                    YINGXIN 1
                  </DialogTitle>
                  <DialogDescription className="md:text-xl">
                    Freshmen Welcome Event
                  </DialogDescription>
                </DialogHeader>
                <Tabs>
                  <TabsList className="md:py-6 md:my-3 md:mb-5 my-2">
                    <TabsTrigger
                      value="about"
                      className="md:text-xl md:p-5 hover:cursor-pointer"
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger
                      value="ticket"
                      className="md:text-xl md:p-5 hover:cursor-pointer"
                      disabled
                    >
                      Ticketing
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="about" className="space-y-5">
                    <p>
                      <span className="font-bold">Event Type:</span> Orientation
                      / Community Bonding
                    </p>
                    <p>
                      <span className="font-bold">Who Must Attend:</span> All
                      new Indonesian freshmen at Tunghai University
                    </p>
                    <p>
                      <span className="font-bold">Date & Time: </span>
                    </p>
                    <p>
                      <span className="font-bold">Location: </span>
                    </p>
                    <h1 className="font-bold">About the Event</h1>
                    <p>
                      Yingxin 1 is the very first gathering of the semester,
                      created to warmly welcome new Indonesian students. This
                      orientation is your chance to meet fellow freshmen,
                      connect with seniors, and be introduced to Tunghai
                      University and THUISA (Tunghai Indonesian Student
                      Association).
                    </p>
                    <h1 className="font-bold">Activities</h1>
                    <p>
                      Enjoy fun ice-breaking games, interactive sessions, and
                      group bonding designed to help you make friends and feel
                      part of the community right away.
                    </p>
                    <h1 className="font-bold">Why You Should Join</h1>
                    <p>
                      Instantly connect with fellow Indonesian students. Meet
                      seniors who will guide and support you. Learn about campus
                      life and opportunities. Build lasting friendships and
                      memories.
                    </p>
                    <h1 className="font-bold">Important Note</h1>
                    <p>
                      This is a mandatory event for all new Indonesian freshmen.
                      No registration needed — just come, join, and enjoy!
                    </p>{" "}
                    <DialogFooter className="md:mt-15 mt-10">
                      <DialogClose asChild>
                        <ButtonPrimary>Close</ButtonPrimary>
                      </DialogClose>
                    </DialogFooter>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-md ml-5 max-md:hidden">
          <h1 className="text-2xl md:text-4xl font-bold text-red-600">SEP</h1>
          <p className="text-md md:text-xl text-gray-600">2025</p>
        </div>
      </div>
      {eventData.map((event, index) => (
        <div
          key={index}
          className="shadow-md rounded-2xl max-w-6xl mx-5 2xl:mx-auto py-5 px-6 md:p-10 flex md:gap-10 gap-5 2xl:mt-15 mt-10 justify-between"
        >
          <div className="flex items-center gap-10">
            <div className="md:w-20 w-5 flex flex-col items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-red-600">
                {event.day}
              </h1>
              <h1
                className={`text-red-600 font-bold ${
                  !event.day ? "text-2xl md:text-4xl" : "text-md md:text-2xl"
                }`}
              >
                {event.month.length > 3 ? event.month.slice(0, 3) : event.month}
              </h1>
              <h1 className="text-md md:text-xl text-gray-600">{event.year}</h1>
            </div>
            <div>
              <h1
                className={`text-red-600 font-bold text-sm md:text-2xl ${
                  event.title.length < 11 && "whitespace-nowrap"
                }`}
              >
                {event.title}
              </h1>
              <p className="text-gray-400 md:text-xl text-sm md:mb-5 mb-2">
                {event.subInfo ? event.subInfo : "THUISA Event"}
              </p>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <ButtonPrimary className="max-md:mt-7 my-auto">
                View Event
              </ButtonPrimary>
            </DialogTrigger>
            <DialogContent className="2xl:min-w-4xl max-h-[80vh] overflow-y-auto md:text-xl text-sm">
              <DialogHeader>
                <DialogTitle className="text-red-600 md:text-3xl">
                  {event.title}
                </DialogTitle>
                <DialogDescription className="md:text-xl">
                  {event.subInfo ? event.subInfo : "THUISA Event"}
                </DialogDescription>
              </DialogHeader>
              <Tabs defaultValue="about">
                <TabsList className="md:py-6 md:my-3 md:mb-5 my-2">
                  <TabsTrigger
                    value="about"
                    className="md:text-xl md:p-5 hover:cursor-pointer"
                  >
                    About
                  </TabsTrigger>
                  <TabsTrigger
                    value="ticket"
                    className="md:text-xl md:p-5 hover:cursor-pointer"
                    disabled={event.noTicket}
                  >
                    Ticketing
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="space-y-5">
                  <p>
                    <span className="font-bold">Event Type: </span>
                    {event.type ? event.type : "TBD"}
                  </p>
                  <p>
                    <span className="font-bold">Who Must Attend: </span>
                    {event.who ? event.who : "TBD"}
                  </p>
                  <p>
                    <span className="font-bold">Date & Time: </span>
                    {!(!event.day && !event.month && !event.year)
                      ? `${event.day} ${event.month} ${event.year}`
                      : "TBD"}
                  </p>
                  <p>
                    <span className="font-bold">Location: </span>
                    {event.location ? event.location : "TBD"}
                  </p>
                  {event.about && (
                    <>
                      <h1 className="font-bold">About the Event</h1>
                      <p>{event.about}</p>
                    </>
                  )}
                  {event.activities && (
                    <>
                      <h1 className="font-bold">Activities</h1>
                      {event.activities.length > 1 ? (
                        <ul className="list-disc list-inside">
                          {event.activities.map((e, index) => (
                            <li key={index}>{e}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{event.activities}</p>
                      )}
                    </>
                  )}
                  {event.reasons && (
                    <>
                      <h1 className="font-bold">Why you should join</h1>
                      {event.reasons.length > 1 ? (
                        <ul className="list-disc list-inside">
                          {event.reasons.map((e, index) => (
                            <li key={index}>{e}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{event.reasons}</p>
                      )}
                    </>
                  )}
                  {event.note && (
                    <>
                      <h1 className="font-bold">Important Note</h1>
                      <p>{event.note}</p>
                    </>
                  )}
                  <DialogFooter className="md:mt-15 mt-10">
                    <DialogClose asChild>
                      <ButtonPrimary>Close</ButtonPrimary>
                    </DialogClose>
                  </DialogFooter>
                </TabsContent>
                <TabsContent value="ticket">
                  <ComingSoon />
                  <DialogFooter className="md:mt-15 mt-10">
                    <DialogClose asChild>
                      <ButtonPrimary>Close</ButtonPrimary>
                    </DialogClose>
                  </DialogFooter>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
}
