import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col xl:flex-row items-center justify-between gap-4">
        <div className="flex gap-10 md:gap-8 text-sm">
          <div className="flex flex-col xl:flex-row gap-3 xl:gap-8 mb-2">
            <Link href="/" className="hover:text-gray-700 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-700 transition">
              About
            </Link>
            <Link href="/events" className="hover:text-gray-700 transition">
              Events
            </Link>
          </div>
          <div className="flex flex-col xl:flex-row xl:gap-8 gap-3">
            <Link
              href="/report"
              className="hover:text-gray-700 transition"
            >
              Report
            </Link>
            <Link href="/resources" className="hover:text-gray-700 transition">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-gray-700 transition">
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-warp gap-4 mb-7 max-xl:justify-center max-xl:items-center">
            <Image
              src="./android-chrome-192x192.png"
              alt="thuisaLogo"
              width={60}
              height={60}
            />
            <Image src="./oirLogo.png" alt="oirLogo" width={60} height={60} />
            <div className="w-px bg-gray-300" />
            <div>
              <h3 className="text-white font-semibold text-sm xl:text-base mb-2">
                Follow Our Social Media
              </h3>
              <div className="flex">
                <Link href={"https://www.instagram.com/thuisa_official"} className="hover:cursor-pointer" target="__blank">
                  <Image
                    src={"./instagram.png"}
                    alt="instagramLogo"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href={"https://www.tiktok.com/@thuisa_official"} className="hover:cursor-pointer" target="__blank">
                  <Image
                    src={"./tiktok.png"}
                    alt="tiktokLogo"
                    width={30}
                    height={30}
                    className="mx-3 border-1 border-white rounded-md p-1"
                  />
                </Link>
                <Link href={""} className="hover:cursor-pointer" target="__blank">
                  <Image
                    src={"./line.png"}
                    alt="lineLogo"
                    width={30}
                    height={30}
                    className="rounded-sm"
                  />
                </Link>
              </div>
            </div>
          </div>
          <p className="text-sm mb-2 max-xl:text-center">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">THUISA</span>. All rights
            reserved.
          </p>
          <p className="text-sm max-xl:text-center">
            Made by the Gunawan Team
          </p>
        </div>
      </div>
    </footer>
  );
}
