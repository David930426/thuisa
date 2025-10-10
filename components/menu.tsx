"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const controlNavbar = () => {
      const currentYScroll = Math.max(0, window.scrollY);

      if (currentYScroll <= 65) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        // scrolling down
        setShow(false);
        setMenu(false);
      } else {
        // scrolling up
        setShow(true);
        setMenu(false);
      }
      setLastScrollY(currentYScroll);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  const pathname = usePathname();
  const menuLabel = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Events", href: "/events" },
    { label: "Report", href: "/report" },
    { label: "Resources", href: "/resources" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur-sm ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-white/75 flex h-20 items-center justify-between shadow md:px-10`}
    >
      <div className="flex items-center gap-4 overflow-y-auto">
        <div className="md:hidden ml-5">
          <button onClick={() => setMenu(!menu)}>
            {!menu ? (
              <Bars3Icon className="size-13 p-3 hover:bg-gray-200 rounded-full transition hover:cursor-pointer duration-300 ease-in-out active:bg-gray-300" />
            ) : (
              <XMarkIcon className="size-13 p-3 hover:bg-gray-200 rounded-full transition hover:cursor-pointer duration-200 ease-in-out active:bg-gray-300" />
            )}
          </button>
          <div
            className={`fixed top-20 left-0 bg-zinc-900/60 w-screen h-screen transition-all ease-in-out duration-300 ${
              !menu && "opacity-0"
            }`}
            onClick={() => setMenu(false)}
          ></div>
          <div
            className={`fixed h-screen w-1/2 top-20 bg-red-600 ${
              menu ? "left-0" : "-left-1/2"
            } transition-all ease-in-out duration-300`}
          >
            <h1 className="text-center text-gray-200 font-bold text-3xl my-10">
              THUISA
            </h1>
            <div className="divide-y divide-gray-200 mt-10">
              {menuLabel.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full h-20 px-5 text-gray-100 hover:text-gray-700 hover:bg-gray-200 transition duration-300 capitalize text-xl flex items-center"
                  onClick={() => setMenu(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link href={`/`}>
          <Image
            src={`./logoThuisa.PNG`}
            width={70}
            alt="THUISA Logo"
            height={70}
          ></Image>
        </Link>
      </div>
      <div
        className={`max-md:hidden flex h-full items-center text-gray-700 font-medium text-sm md:text-base`}
      >
        {menuLabel.map((item, i) => (
          <div key={i} className="group">
            <Link
              href={item.href}
              className={`flex items-center lg:px-5 px-3 py-6 ${
                pathname === item.href && "text-gray-900"
              } group-hover: text-gray-900`}
            >
              {item.label}
            </Link>
            <div
              className={`${
                pathname === item.href
                  ? "w-full min-h-1"
                  : "group-hover:w-full group-hover:min-h-1 w-0"
              } bg-red-600 rounded-full transition-all duration-300`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
