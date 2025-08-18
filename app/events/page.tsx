import { ButtonPrimary, ButtonSecondary } from "@/components/ui/button";
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
  return (
    <div className="w-full min-h-screen">
      <div className="w-full bg-red-600 text-white text-center py-15 md:py-25">
        <h1 className="text-4xl md:text-6xl font-bold">Our Events</h1>
      </div>
      <h1>Upcoming Events</h1>
      <div className="shadow-md rounded-2xl max-w-6xl mx-auto p-10 flex">
        <div>
          <Image
            src="/yingxin1.JPG"
            alt="yingxin1"
            width={200}
            height={220}
            className="rounded-xl md:min-w-50 mr-6 min-w-30"
          />
        </div>
        <div>
          <h1>YINGXIN 1</h1>
          <h3>Freshmen Welcome Event</h3>
          <span>
            Kick off your journey at Tunghai with Yingxin 1! 🎉 A must-join
            orientation for all new Indonesian students, where you’ll meet
            seniors, bond with fellow freshmen, and discover Tunghai and THUISA
            through fun games and activities.
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <ButtonPrimary label="View Event" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>YINGXIN 1</DialogTitle>
                <DialogDescription>Freshmen Welcome Event</DialogDescription>
              </DialogHeader>
              <span><span>Event Type:</span> Orientation / Community Bonding</span>
              <span><span>Who Must Attend:</span> All new Indonesian freshmen at Tunghai University</span>
              <DialogFooter>
                <DialogClose asChild>
                  <ButtonSecondary label="Close" />
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
