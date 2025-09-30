"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
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

  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-white flex h-20 items-center justify-between px-10 shadow`}
    >
      <Link href={`/`}>
        <Image
          src={`./logoThuisa.jpeg`}
          width={70}
          alt="THUISA Logo"
          height={70}
        ></Image>
      </Link>
      <div
        className={`max-md:hidden flex h-full items-center text-gray-400 font-medium text-sm md:text-base`}
      >
        {menuLabel.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`flex items-center lg:px-5 px-3 py-6 hover:text-black hover:border-b-red-600 hover:border-b-4 transition duration-300 ${
              pathname === item.href && "text-black border-b-4 border-b-red-600"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild className="hover:cursor-pointer">
            <Bars3Icon className="size-10 p-2 rounded-md shadow hover:bg-gray-200 transition delay-100" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-6 mt-1">
            {menuLabel.map((item, index) => (
              <DropdownMenuItem
                key={index}
                className="hover:cursor-pointer"
                asChild
                onSelect={() => setOpen(false)}
              >
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 hover:text-gray-400 transition duration-300"
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
