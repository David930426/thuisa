import Link from "next/link";
import Image from "next/image";

export default function Events() {
  return (
    <>
      <div className="mt-30 md:mb-10 mb-2 text-center mx-5">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-red-600">
          What’s Happening Next?
        </h1>
        <p className="text-md md:text-xl">
          There’s always something to look forward to at THUISA. Here’s what’s
          coming up:
        </p>
      </div>
      <div className="max-w-7xl md:mx-auto mx-1 py-10 md:py-10 md:shadow rounded-4xl md:px-20 px-5">
        <div className="md:flex">
          <div className="w-full border-gray border-1 p-5 md:p-6 rounded-4xl shadow mr-10 max-md:mb-5">
            <h1 className="text-center text-xl md:text-2xl font-bold mb-4 md:mb-8 text-red-600">
              YINGXIN 1
            </h1>
            <div className="flex">
              <div className="md:mr-5 mr-3">
                <Image
                  src="/yingxin1.JPG"
                  alt="yingxin1"
                  width={200}
                  height={220}
                  className="rounded-xl md:min-w-50 mr-6 min-w-30"
                />
              </div>
              <div className="md:mt-5 mb-5">
                <p>Date: TBD</p>
                <p>Location: TBD</p>
                <p className="md:my-5 mb-3">
                  Meet fellow Indonesian students, connect with seniors, and get
                  to know the THUISA family.
                </p>
                <LearnMore />
              </div>
            </div>
          </div>
          <div className="w-full border-gray border-1 md:p-6 p-5 rounded-4xl shadow mr-10 max-md:mb-5">
            <h1 className="text-center text-xl md:text-2xl font-bold mb-4 md:mb-8 text-red-600">
              YINGXIN 2
            </h1>
            <div className="flex">
              <div className="md:mr-5 mr-3">
                <Image
                  src="/yingxin2.jpeg"
                  alt="yingxin2"
                  width={200}
                  height={300}
                  className="rounded-xl md:min-w-50 mr-6 min-w-30"
                />
              </div>
              <div className="md:mt-5 mb-5">
                <p>Date: TBD</p>
                <p>Location: TBD</p>
                <p className="md:my-5 mb-3">
                  Step away from the books and join us for an unforgettable day
                  of fun, laughter, and friendship!
                </p>
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/events"
          className="mt-10 block w-fit mx-auto md:text-xl hover:text-red-600 text-center"
        >
          <span>VIEW ALL EVENTS</span>
        </Link>
      </div>
    </>
  );
}

export function LearnMore({ className }: { className?: string }) {
  return (
    <Link
      href={"/events"}
      className={`text-gray-500 hover:text-gray-600 hover:cursor-pointer ${className}`}
    >
      Learn More
    </Link>
  );
}
