"use client";
import { Target, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="w-full text-white bg-red-600 text-center py-15 md:py-25 ">
        <h1 className="text-4xl md:text-6xl font-bold">About THUISA</h1>
        <p className="mt-4 text-lg md:text-xl">
          Connecting Indonesian students at Tunghai University since 2017
        </p>
        <Link
          href="https://oir.thu.edu.tw/"
          className="m-10 inline-block bg-gray-700 hover:bg-gray-500 text-white px-6 py-3 rounded-md transition-colors duration-300 hover:cursor-pointer"
          target="__block"
        >
          Learn More
        </Link>
      </div>
      <div className="max-w-5xl mx-10 md:mx-auto mt-20 flex">
        <div className="max-w-5xl md:mx-10 mx-7 max-sm:mx-4">
          <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-8 text-red-600">
            Our Priorities
          </h1>
          <p className="text-sm md:text-xl text-gray-700 ">
            Founded in 2017, THUISA has steadily empowered Indonesian students
            at Tunghai University. We&apos;ve hosted hundreds of events, fostering a
            vibrant community that connects beyond campus. As a dynamic
            organization, we adapt to evolving trends and needs, constantly
            striving for improvement. In 2023, our focus is on strengthening our
            community through collaboration and achieving carbon neutrality in
            all events by 2030. Our annual THUISA CUP showcases Indonesian
            culture and unites Indonesians in Taiwan, while sports and
            non-sports activities promote fun and friendly competition. Active
            collaboration with companies and media partners will further amplify
            our reach and impact.
          </p>
          <div className="mt-6 md:mt-10"></div>
        </div>
        {/* <div className="flex-shrink-0 w-30 md:w-72 aspect-square overflow-hidden rounded-xl">
          <Image
            src="/1735222779300.jpeg"
            alt="THUISA Group Photo"
            width={500}
            height={500}
            className="object-cover"
          />
        </div> */}
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-4">
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

      <div className="max-w-5xl mx-10 md:mx-auto mt-20 flex">
        <div className="max-w-5xl md:mx-10 mx-7 max-sm:mx-4">
          <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-red-600">
            THUISA at a Glance
          </h1>
          <p className="text-xl md:text-xl mb-4 md:mb-8 text-gray-700">
            Welcoming every Indonesian student at Tunghai is our core mission.
            Through our annual membership plan, were able to operate
            independently and deliver valuable community services that enrich
            the lives of all members.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 divide-x divide-gray-300">
        <div className="px-6 text-center">
          <p className="text-sm text-gray-500">Founded since</p>
          <h2 className="text-3xl font-bold">2017</h2>
        </div>

        <div className="px-6 text-center">
          <p className="text-sm text-gray-500">Our community</p>
          <h2 className="text-3xl font-bold">400</h2>
        </div>

        <div className="px-6 text-center">
          <p className="text-sm text-gray-500">Active members</p>
          <h2 className="text-3xl font-bold">42</h2>
        </div>

        <div className="px-6 text-center">
          <p className="text-sm text-gray-500">Annual events</p>
          <h2 className="text-3xl font-bold">7</h2>
        </div>
      </div>
      <div className="max-w-5xl mx-10 md:mx-auto mt-20 flex">
        <div className="max-w-5xl md:mx-10 mx-7 max-sm:mx-4">
          <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-8 text-red-600">
            Our teams
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Leadership</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Image
                src="/images/member1.jpg"
                alt="Leader 1"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold">Abraham Rusli</p>
              <p className="text-sm text-gray-500">President</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member2.jpg"
                alt="Leader 2"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold">Evelyn</p>
              <p className="text-sm text-gray-500">Vice-President</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold">Leon</p>
              <p className="text-sm text-gray-500 font-medium">Advisor</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold">David</p>
              <p className="text-sm text-gray-500 font-medium">Advisor</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Operation - Event Director</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Image
                src="/images/member1.jpg"
                alt="Leader 1"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member2.jpg"
                alt="Leader 2"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Operation - General Affairs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Image
                src="/images/member1.jpg"
                alt="Leader 1"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member2.jpg"
                alt="Leader 2"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Program</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Image
                src="/images/member1.jpg"
                alt="Leader 1"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member2.jpg"
                alt="Leader 2"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Finance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Image
                src="/images/member1.jpg"
                alt="Leader 1"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member2.jpg"
                alt="Leader 2"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Communications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Image
                src="/images/member1.jpg"
                alt="Leader 1"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member2.jpg"
                alt="Leader 2"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Design & Documentation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Image
                src="/images/member1.jpg"
                alt="Leader 1"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member2.jpg"
                alt="Leader 2"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/member3.jpg"
                alt="Leader 3"
                width={160}
                height={160}
                className="w-50 h-50 object-cover rounded-xl shadow-md"
              />
              <p className="mt-2 font-semibold"></p>
              <p className="text-sm text-gray-500 font-medium"></p>
            </div>
          </div>
        </div>
      </div>

      {/* <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item</>-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Information</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Our Member</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
}
