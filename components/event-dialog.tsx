import { EventData } from "@/lib/types";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ButtonPrimary } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ComingSoon from "@/components/coming-soon";

export default function EventDialog({ event }: { event: EventData }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtonPrimary className="max-md:mt-7 my-auto">
          View Event
        </ButtonPrimary>
      </DialogTrigger>
      <DialogContent className="2xl:min-w-6xl md:min-w-3xl max-h-[85vh] overflow-y-auto md:text-xl text-md">
        <DialogHeader>
          <DialogTitle className="text-red-600 md:text-3xl uppercase">
            {event.name}
          </DialogTitle>
          <DialogDescription className="md:text-xl text-md">
            {event.subInfo ? event.subInfo : "THUISA Event"}
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="about">
          <TabsList className="md:py-6 md:my-3 md:mb-5 my-2">
            <TabsTrigger
              value="about"
              className="md:text-xl md:p-5 hover:cursor-pointer text-md"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="ticket"
              className="md:text-xl md:p-5 hover:cursor-pointer text-md"
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
            <p className="capitalize">
              <span className="font-bold">Date & Time: </span>
              {!(!event.day && !event.month && !event.year)
                ? `${event.day ? event.day : ""} ${event.month} ${event.year}`
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
  );
}
