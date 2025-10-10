import { MenuType } from "@/lib/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import MenuIcon from "@/components/menu-icon";

export default function MenuMobile({
  menuLabel,
  pathname,
  menu,
  setMenu,
}: {
  menuLabel: MenuType[];
  pathname: string;
  menu: boolean;
  setMenu: (value: boolean) => void;
}) {
  return (
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
        className={`fixed h-screen w-1/2 top-20 bg-white ${
          menu ? "left-0" : "-left-1/2"
        } transition-all ease-in-out duration-300`}
      >
        <h1 className="text-center text-red-600 font-bold text-3xl my-10">
          THUISA
        </h1>
        <div className="mt-10">
          {menuLabel.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              onClick={() => setMenu(false)}
            >
              <div
                className={`w-full h-15 px-5 rounded-xl hover:text-zinc-100 hover:bg-gradient-to-r hover:from-zinc-400 hover:to-zinc-300 transition-all duration-300 capitalize text-xl flex items-center mb-1 ${
                  pathname === item.href ? "text-zinc-100 bg-gradient-to-r from-zinc-400 to-zinc-300" : "text-red-600"
                }`}
              >
                <MenuIcon name={item.name} className="size-7 mr-3" />

                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
