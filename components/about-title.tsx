import { ButtonSecondary } from "@/components/ui/button";

export function Title() {
  return (
    <div className="w-full text-white bg-red-600 text-center py-15 md:py-25 ">
      <h1 className="text-4xl md:text-6xl font-bold">About THUISA</h1>
      <p className="mt-4 text-lg md:text-2xl md:mb-10 mb-5">
        Connecting Indonesian students at Tunghai University since 2017
      </p>
      <ButtonSecondary
        link="https://oir.thu.edu.tw/"
        className="text-black shadow"
        target={true}
      >
        Learn More
      </ButtonSecondary>
    </div>
  );
}
