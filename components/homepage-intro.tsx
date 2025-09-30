import Image from "next/image";
import { ButtonPrimary, ButtonSecondary } from "@/components/ui/button";

export default function Intro() {
  return (
    <div className="max-w-5xl mx-10 md:mx-auto mt-20 flex">
      <div>
        <Image
          src={"./homePage1.JPG"}
          alt="homePage1"
          width={600}
          height={650}
          className="md:w-63 md:h-100 rounded-md"
        />
      </div>
      <div className="max-w-2xl md:mx-10 mx-7 max-sm:mx-4">
        <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-red-600">
          Your Home Away from Home at Tunghai University
        </h1>
        <p className="text-sm md:text-xl">
          THUISA is where Indonesian students connect, share our rich culture,
          and support each other while building unforgettable memories in
          Taiwan.
        </p>
        <div className="mt-6 md:mt-10 flex">
          <ButtonPrimary
            link="https://forms.gle/E8Z1zxySec2gXEs18"
            target={true}
          >
            Join Us
          </ButtonPrimary>
          <ButtonSecondary link="/events" className="ml-2 md:ml-5">
            Events
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
}
