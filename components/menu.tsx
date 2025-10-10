"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { menuLabel } from "@/lib/menu";
import MenuLogo from "@/components/menu-logo";
import MenuDesktop from "@/components/menu-section";
import MenuMobile from "@/components/menu-mobile";
import { SunIcon } from "@heroicons/react/24/outline";

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

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur-sm ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-white/75 flex h-20 items-center justify-between shadow md:px-10`}
    >
      <div className="flex items-center gap-4">
        <MenuMobile
          menuLabel={menuLabel}
          pathname={pathname}
          menu={menu}
          setMenu={setMenu}
        />
        <MenuLogo />
      </div>
      <div className="flex items-center">
        <MenuDesktop menuLabel={menuLabel} pathname={pathname} />
        <SunIcon className="size-13 p-3 mx-3 md:mx-1 hover:bg-gray-200 rounded-full transition hover:cursor-pointer duration-300 ease-in-out active:bg-gray-300" />
      </div>
    </div>
  );
}
