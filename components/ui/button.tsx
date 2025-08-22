import Link from "next/link";

export function ButtonPrimary({
  children,
  link,
  className,
}: {
  children: React.ReactNode;
  link?: string;
  className?: string;
}) {
  if (link) {
    return (
      <Link
        href={link}
        className={`text-white whitespace-nowrap shadow bg-red-600 hover:bg-red-700 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors ${className}`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`text-white whitespace-nowrap shadow bg-red-600 hover:bg-red-700 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors ${className}`}
      >
        {children}
      </button>
    );
  }
}

export function ButtonSecondary({
  children,
  link,
  className,
}: {
  children: React.ReactNode;
  link?: string;
  className?: string;
}) {
  if (link) {
    return (
      <Link
        href={link}
        className={`whitespace-nowrap shadow bg-white hover:bg-gray-100 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors ${className}`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`whitespace-nowrap shadow bg-white hover:bg-gray-100 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors ${className}`}
      >
        {children}
      </button>
    );
  }
}
