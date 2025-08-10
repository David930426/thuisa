import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <div className="max-w-5xl mx-10 md:mx-auto mt-20 flex items-center">
        <div>
          <Image
            src={"/homePage1.JPG"}
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
          <div className="mt-6 md:mt-10">
            <Link
              href={""}
              className="text-sm md:text-xl bg-red-600 text-white p-3 rounded-full mr-2 md:mr-5 hover:cursor-pointer hover:bg-red-700 transition-colors"
            >
              Join Us
            </Link>
            <Link
              href={"/events"}
              className="text-sm md:text-xl bg-blue-700 text-white p-3 rounded-full hover:cursor-pointer hover:bg-blue-800 transition-colors"
            >
              Our Events
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-10 md:mx-auto mt-10 md:mt-20 py-10 items-center">
        <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-red-600">
          About THUISA
        </h1>
        <p className="text-sm md:text-xl">
          The Tunghai University Indonesian Student Association (THUISA) is a
          student-led community dedicated to supporting and connecting
          Indonesian students in Taiwan. We create a friendly environment to
          celebrate our heritage, help newcomers adapt, and strengthen bonds
          between members through cultural, academic, and social activities.
        </p>
      </div>
      <div className="max-w-5xl mx-10 md:mx-auto py-10 md:py-20 flex">
        <div className="max-w-md mr-3">
          <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-red-600">
            What’s Happening Next?
          </h1>
          <p className="text-sm md:text-xl">
            There’s always something to look forward to at THUISA. Here’s what’s
            coming up:
          </p>
        </div>
        <div className="flex w-full border-gray border-3 p-6 rounded-4xl">
          <div className="mr-6">
            <Image src="/yingxin1.JPG" alt="yingxin1" width={200} height={300} className="rounded-xl"/>
          </div>
          <div>
            <h1 className="text-center text-xl md:text-2xl font-bold mb-4 md:mb-8 text-red-600">YingXin 1</h1>
          </div>
        </div>
      </div>
    </>
  );
}
