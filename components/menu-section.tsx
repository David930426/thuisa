import { MenuType } from "@/lib/types";
import Link from "next/link";

export default function MenuDesktop({
  menuLabel,
  pathname,
}: {
  menuLabel: MenuType[];
  pathname: string;
}) {
  return (
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
  );
}
