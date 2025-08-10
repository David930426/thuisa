import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <div className="w-full bg-red-600 text-center my-20 py-20 text-white">
        <h1 className="text-5xl md:text-9xl font-bold mb-3">THUISA</h1>
        <p className="text-md md:text-3xl">
          Tunghai Univeristy Indonesian Student Association
        </p>
      </div>
      <div className="max-w-5xl mx-10 md:mx-auto mt-20 flex">
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
              className="shadow text-sm md:text-xl bg-red-600 text-white p-3 rounded-2xl mr-2 md:mr-5 hover:cursor-pointer hover:bg-red-700 transition-colors"
            >
              Join Us
            </Link>
            <Link
              href={"/events"}
              className="text-sm md:text-xl shadow p-3 rounded-2xl hover:cursor-pointer hover:bg-gray-100 transition-colors"
            >
              Events
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="max-w-5xl mx-10 md:mx-auto mt-10 md:mt-20 py-10 items-center">
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
      </div> */}
      <div className="mt-30 mb-10 text-center mx-5">
        <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-red-600">
          What’s Happening Next?
        </h1>
        <p className="text-sm md:text-xl">
          There’s always something to look forward to at THUISA. Here’s what’s
          coming up:
        </p>
      </div>
      <div className="max-w-7xl md:mx-10 md:mx-auto py-10 md:py-10 md:shadow rounded-4xl md:px-20 px-5">
        <div className="md:flex">
          <div className="w-full border-gray border-1 p-5 md:p-6 rounded-4xl shadow mr-10 max-md:mb-5">
            <h1 className="text-center text-md md:text-xl md:text-2xl font-bold mb-4 md:mb-8 text-red-600">
              YingXin 1
            </h1>
            <div className="flex">
              <Image
                src="/yingxin1.JPG"
                alt="yingxin1"
                width={200}
                height={220}
                className="rounded-xl md:min-w-50 mr-6 min-w-30"
              />
              <div className="md:mt-5">
                <p>Date: TBD</p>
                <p>Location: TBD</p>
                <p className="md:mt-5">
                  Meet fellow Indonesian students, connect with seniors, and get
                  to know the THUISA family.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border-gray border-1 md:p-6 p-5 rounded-4xl shadow mr-10 max-md:mb-5">
            <h1 className="text-center text-md md:text-xl md:text-2xl font-bold mb-4 md:mb-8 text-red-600">
              YingXin 2
            </h1>
            <div className="flex">
              <Image
                src="/yingxin1.JPG"
                alt="yingxin1"
                width={200}
                height={300}
                className="rounded-xl md:min-w-50 mr-6 min-w-30"
              />
              <div className="mt-5">
                <p>Date: TBD</p>
                <p>Location: TBD</p>
                <p className="mt-5">
                  Step away from the books and join us for an unforgettable day
                  of fun, laughter, and friendship!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link href="/events">
          <p className="mt-10 text-center md:text-xl hover:cursor-pointer hover:red-600">
            VIEW ALL EVENTS
          </p>
        </Link>
      </div>
    </>
  );
}
