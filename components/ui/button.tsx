import Link from "next/link";

export function ButtonPrimary({
  children,
  disabled = false,
  link,
  className,
  target,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  link?: string;
  className?: string;
  target?: boolean;
}) {
  if (link) {
    return (
      <Link
        href={disabled ? "#" : link}
        className={`text-white whitespace-nowrap shadow bg-red-600 hover:bg-red-700 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors ${className}`}
        target={target ? "_blank" : ""}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type="submit"
        disabled={disabled}
        className={`text-white whitespace-nowrap shadow bg-red-600 hover:bg-red-700 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors ${className}`}
      >
        {children}
      </button>
    );
  }
}

export function ButtonSecondary({
  children,
  disabled = false,
  link,
  className,
  target,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  link?: string;
  className?: string;
  target?: boolean;
}) {
  if (link) {
    return (
      <Link
        href={disabled ? "#" : link}
        className={`whitespace-nowrap shadow bg-white hover:bg-gray-100 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors ${className}`}
        target={target ? "_blank" : ""}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type="submit"
        disabled={disabled}
        className={`whitespace-nowrap shadow bg-white hover:bg-gray-100 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors ${className}`}
      >
        {children}
      </button>
    );
  }
}
