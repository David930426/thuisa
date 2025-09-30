import Image from "next/image";
import { ButtonPrimary, ButtonSecondary } from "@/components/ui/button";

export default function Intro() {
  return (
    <div className="max-w-5xl mx-7 md:mx-auto mt-20 md:flex">
      <div className="max-md:hidden">
        <Image
          src={"./homePage1.JPG"}
          alt="homePage1"
          width={600}
          height={650}
          className="w-63 h-100 rounded-md"
        />
      </div>
      <div className="md:max-w-2xl md:mx-10 mx-7 max-sm:mx-4">
        <div className="max-md:flex max-md:gap-5 max-md:items-center max-md:text-center">
          <Image
            src={"./homePage1.JPG"}
            alt="homePage1"
            width={125}
            height={175}
            className="rounded-md md:hidden"
          />
          <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-red-600">
            Your Home Away from Home at Tunghai University
          </h1>
        </div>
        <p className="text-md md:text-xl max-md:mt-7 max-md:text-center">
          THUISA is where Indonesian students connect, share our rich culture,
          and support each other while building unforgettable memories in
          Taiwan.
        </p>
        <div className="mt-6 md:mt-10 flex max-md:justify-center">
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
