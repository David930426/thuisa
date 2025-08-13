import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

export default function ComingSoon() {
  return (
    <div className="w-full h-100 md:h-200 items-center flex flex-col">
      <WrenchScrewdriverIcon className="size-40 text-gray-400 mt-20 md:mb-5 mb-3 md:size-80" />
      <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-8 text-gray-400 text-center">
        Coming Soon
      </h1>
    </div>
  );
}
