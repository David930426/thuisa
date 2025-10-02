import { Target, Globe2 } from "lucide-react";

export function Priority() {
  return (
    <div className="max-w-5xl md:mx-auto mx-10 mt-20 max-md:mb-10 max-md:text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8 text-red-600">
        Our Priorities
      </h1>
      <p className="text-xl md:text-xl text-gray-700 max-md:hidden">
        Founded in 2017, THUISA has steadily empowered Indonesian students at
        Tunghai University. We&apos;ve hosted hundreds of events, fostering a
        vibrant community that connects beyond campus. As a dynamic
        organization, we adapt to evolving trends and needs, constantly striving
        for improvement. In 2023, our focus is on strengthening our community
        through collaboration and achieving carbon neutrality in all events by
        2030. Our annual THUISA CUP showcases Indonesian culture and unites
        Indonesians in Taiwan, while sports and non-sports activities promote
        fun and friendly competition. Active collaboration with companies and
        media partners will further amplify our reach and impact.
      </p>
      <p className="text-xl md:text-xl text-gray-700 md:hidden">
        Since 2017, THUISA has supported Indonesian students at Tunghai with
        events that connect and inspire. We value collaboration, innovation, and
        sustainability, aiming for carbon-neutral events by 2030. The annual
        THUISA CUP celebrates our culture and unites Indonesians in Taiwan.
      </p>
      <div className="mt-6 md:mt-10"></div>
    </div>
  );
}

export function VisionMission() {
  return (
    <div className="max-w-5xl mx-auto md:flex gap-6 max-md:mx-5">
      <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4 max-md:mb-5">
        <Target className="text-red-600 w-9 h-9 flex-shrink-0" />
        <div>
          <h3 className="text-2xl font-bold text-red-600">Our Mission</h3>
          <p className="text-gray-700 mt-2 text-xl">
            Support, connect, and empower Indonesian students in Tunghai
            University
          </p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
        <Globe2 className="text-yellow-500 w-9 h-9 flex-shrink-0" />
        <div>
          <h3 className="text-2xl font-bold text-yellow-600">Our Vision</h3>
          <p className="text-gray-700 mt-2 text-xl">
            Create a home away from home for every Indonesian student.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Glance() {
  const information = [
    {
      title: "founded since",
      num: 2017,
    },
    {
      title: "our community",
      num: 400,
    },
    {
      title: "active members",
      num: 42,
    },
    {
      title: "annual events",
      num: 7,
    },
  ];
  return (
    <>
      {/* <div className="max-w-5xl mx-10 md:mx-auto flex"> */}
      <div className="max-w-5xl mx-10 md:mx-auto mt-20 mb-10 max-md:text-center">
        <h1 className="text-3xl md:text-3xl font-bold mb-4 md:mb-8 text-red-600">
          THUISA at a Glance
        </h1>
        <p className="text-xl md:text-xl mb-4 md:mb-8 text-gray-700">
          Welcoming every Indonesian student at Tunghai is our core mission.
          Through our annual membership plan, were able to operate independently
          and deliver valuable community services that enrich the lives of all
          members.
        </p>
      </div>

      <div className="md:flex justify-center items-center md:gap-8 md:divide-x md:divide-gray-300">
        {information.map((info) => (
          <div
            className="px-6 text-center capitalize max-md:mt-5"
            key={info.title}
          >
            <p className="text-xl text-gray-500">{info.title}</p>
            <h2 className="text-3xl font-bold">{info.num}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
