"use client"
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Menu() {
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
    <div className="sticky top-0 z-50 bg-white flex h-20 items-center justify-between px-10 shadow">
      <Link href={`/`}>
        <Image
          src={`/logoThuisa.jpeg`}
          width={70}
          alt="THUISA Logo"
          height={70}
        ></Image>
      </Link>
      <div className="max-md:hidden flex h-full items-center text-black font-medium text-sm md:text-base">
        {menuLabel.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="flex items-center lg:px-5 px-3 hover:text-gray-400 transition duration-300"
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
              <DropdownMenuItem key={index} className="hover:cursor-pointer" asChild onSelect={() =>setOpen(false)}>
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
