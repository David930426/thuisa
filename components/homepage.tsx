import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="max-w-5xl mx-10 md:mx-auto mt-20 flex">
      <div>
        <Image src={"/homePage1.JPG"} alt="homePage1" width={600} height={650} className="md:w-63 md:h-100 rounded-md"/>
      </div>
      <div className="max-w-2xl mx-10 md:mt-3">
        <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8">
          Your Home Away from Home at Tunghai University
        </h1>
        <h3 className="text-sm md:text-xl">
          THUISA is where Indonesian students connect, share our rich culture,
          and support each other while building unforgettable memories in
          Taiwan.
        </h3>
        <div className="mt-4 md:mt-10">
            <Link href={""} className="md:text-xl bg-red-500 text-white p-3 rounded-full mr-5 hover:cursor-pointer hover:bg-red-700 transition-colors">
                Join Us
            </Link>
            <Link href={"/events"} className="md:text-xl bg-blue-700 text-white p-3 rounded-full hover:cursor-pointer hover:bg-blue-800 transition-colors">
                Events
            </Link>
        </div>
      </div>
    </div>
  );
}
