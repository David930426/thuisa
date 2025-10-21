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
      className={`max-md:hidden flex h-full items-center font-medium text-sm md:text-base text-neutral-600 dark:text-neutral-400`}
    >
      {menuLabel.map((item, i) => (
        <div key={i} className="group">
          <Link
            href={item.href}
            className={`flex items-center lg:px-5 px-3 py-6 ${
              pathname === item.href && "text-neutral-900 dark:text-neutral-100"
            } hover:text-neutral-900 dark:hover:text-neutral-100`}
          >
            {item.label}
          </Link>
          <div
            className={`${
              pathname === item.href
                ? "w-full min-h-1"
                : "group-hover:w-full min-h-1 w-0"
            } bg-red-600 rounded-full transition-all duration-300`}
          ></div>
        </div>
      ))}
    </div>
  );
}
