import Link from "next/link";
import Image from "next/image";

export default function Social() {
  const socials = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/thuisa_official",
      img: "./instagram.png",
    },
    {
      name: "Tiktok",
      link: "https://www.tiktok.com/@thuisa_official",
      img: "./tiktok.png",
    },
    {
      name: "Line",
      link: "",
      img: "./line.png",
    },
  ];

  return (
    <div className="w-full bg-red-600 md:mt-20 mt-5 md:pt-20 md:pb-30 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 md:mb-8 text-white text-center">
        Follow Us
      </h1>
      <div className="flex justify-center gap-5 md:gap-10">
        {socials.map((social) => (
          <Link
            href={social.link}
            className="hover:shadow-2xl hover:cursor-pointer"
            target="_blank"
            key={social.name}
          >
            <Image
              src={social.img}
              alt="instagram"
              width={70}
              height={70}
              className="md:w-20 rounded-2xl"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
