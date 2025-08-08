import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-10 md:gap-8 text-sm">
          <div className="flex flex-col md:flex-row gap-3 md:gap-8 mb-2">
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
          <div className="flex flex-col md:flex-row md:gap-8 gap-3">
            <Link
              href="/informations"
              className="hover:text-gray-700 transition"
            >
              Information
            </Link>
            <Link href="/resources" className="hover:text-gray-700 transition">
              Resources
            </Link>
            <Link href="/support" className="hover:text-gray-700 transition">
              Support
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-warp gap-4 mb-4 max-md:justify-center max-md:items-center">
            <Image
              src="/android-chrome-192x192.png"
              alt="thuisaLogo"
              width={50}
              height={50}
            />
            <Image src="/oirLogo.png" alt="oirLogo" width={50} height={50} />
            <div className="w-px bg-gray-300 max-md:hidden" />
            <div>
              <h3 className="text-white font-semibold text-sm md:text-base mb-2">
                Follow Our Social Media
              </h3>
              <div>
                {/* sosmed logo by using simple icons */}
              </div>
            </div>
          </div>
          <p className="text-sm mb-1 max-md:text-center">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">THUISA</span>. All rights
            reserved.
          </p>
          <p className="text-sm max-md:text-center">
            Made by the Double U Team
          </p>
        </div>
      </div>
    </footer>
  );
}
