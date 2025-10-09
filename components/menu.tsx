"use client";

import Image from "next/image";
import Link from "next/link";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      const currentYScroll = Math.max(0, window.scrollY);

      if (currentYScroll <= 65) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
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

  // const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur-sm ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-white/50 flex h-20 items-center justify-between px-10 shadow`}
    >
      <Link href={`/`}>
        <Image
          src={`./logoThuisa.PNG`}
          width={70}
          alt="THUISA Logo"
          height={70}
        ></Image>
      </Link>
      <div
        className={`max-md:hidden flex h-full items-center text-gray-700 font-medium text-sm md:text-base`}
      >
        {menuLabel.map((item, i) => (
          <div key={i} className="group">
            <Link
              href={item.href}
              // hover:border-b-red-600
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

      <div className="md:hidden flex justify-end">
        <button popoverTarget="menu">
          <Bars3Icon className="size-10 p-2 rounded-md shadow hover:bg-gray-200 transition delay-100" />
        </button>
        <div
          className="fixed left-1/3 h-full w-2/3 bg-red-600 starting:open:left-full transition-all"
          popover="auto"
          id="menu"
        >
          <h1 className="text-center text-gray-200 font-bold text-3xl my-10">THUISA</h1>
          <div className="divide-y divide-gray-200 mt-10">
            {menuLabel.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="w-full h-20 px-5 text-gray-100 hover:text-gray-700 hover:bg-gray-200 transition duration-300 capitalize text-xl flex items-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
