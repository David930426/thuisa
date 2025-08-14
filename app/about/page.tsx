"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[70vh] flex items-center justify-center mt-1">
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
      </section>
      <div className="max-w-5xl mx-10 md:mx-auto mt-20 flex">
        <div className="max-w-2xl md:mx-10 mx-7 max-sm:mx-4">
          <h1 className="text-xl md:text-5xl font-bold mb-4 md:mb-8 text-red-600">
            Our Story
          </h1>
          <p className="text-sm md:text-xl">
            THUISA, an integral part of Tunghai University Office of
            International Relations, is dedicated to serving and empowering
            Indonesian students at Tunghai. We cultivate a collaborative
            environment, inspiring our community to thrive academically and
            contribute meaningfully to both Taiwanese and Indonesian societies.
          </p>
          <div className="mt-6 md:mt-10"></div>
        </div>
        <div className="flex-shrink-0 w-full md:w-72 aspect-square overflow-hidden rounded-xl">
        <Image
          src="/1735222779300.jpeg"
          alt="THUISA Group Photo"
          width={500}
          height={500}
          className="object-cover"
        />
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
