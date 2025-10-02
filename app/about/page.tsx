"use client";
import { Glance, Priority, VisionMission } from "@/components/about-components";
import TeamMembers from "@/components/about-team";
import { Title } from "@/components/about-title";

export default function Page() {
  // const stats = [{ label: "Founded " }];
  return (
    <div className="min-h-screen">
      {/* <section className="relative w-full h-[70vh] flex items-center justify-center mt-1">
        <div className="absolute inset-0">
          <Image
            src={`/1734509480053.jpeg`}
            alt="THUISA Group Photo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">About THUISA</h1>
          <p className="mt-4 text-lg md:text-xl">
            Connecting Indonesian students at Tunghai University since 2017
          </p>
          <Link
            href="https://oir.thu.edu.tw/"
            className="m-10 inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors duration-300 hover:cursor-pointer"
            target="__block"
          >
            Learn More
          </Link>
        </div>
      </section> */}
      <Title />
      <Priority />
      <VisionMission />
      <Glance />
      <TeamMembers />
    </div>
  );
}
