import {
  BookOpenIcon,
  HomeIcon,
  CalendarIcon,
  ArchiveBoxIcon,
  BanknotesIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

export default function MenuIcon({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  switch (name) {
    case "home":
      return <HomeIcon className={className} />;
    case "about":
      return <BookOpenIcon className={className} />;
    case "event":
      return <CalendarIcon className={className} />;
    case "report":
      return <ArchiveBoxIcon className={className} />;
    case "resource":
      return <BanknotesIcon className={className} />;
    case "contact":
      return <ChatBubbleOvalLeftEllipsisIcon className={className} />;
    default:
      return <HomeIcon className={className} />;
  }
}
