import Link from "next/link";

export function ButtonPrimary({
  label,
  link,
  className,
}: {
  label: string;
  link?: string;
  className?: string;
}) {
  return (
    <div className={`text-white ${className}`}>
      {link ? (
        <Link
          href={link}
          className="shadow bg-red-600 hover:bg-red-700 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors"
        >
          <span>{label}</span>
        </Link>
      ) : (
        <span className="shadow bg-red-600 hover:bg-red-700 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors">
          {label}
        </span>
      )}
    </div>
  );
}

export function ButtonSecondary({
  link,
  label,
  className,
}: {
  link?: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      {link ? (
        <Link
          href={link}
          className="shadow bg-white hover:bg-gray-100 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors"
        >
          <span>{label}</span>
        </Link>
      ) : (
        <span className="shadow bg-white hover:bg-gray-100 p-3 rounded-full text-sm md:text-xl hover:cursor-pointer transition-colors">
          {label}
        </span>
      )}
    </div>
  );
}
