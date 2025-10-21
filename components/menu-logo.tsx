import Link from "next/link";
import Image from "next/image";

export default function MenuLogo({ dark }: { dark: boolean }) {
  return (
    <Link href={`/`}>
      <Image
        src={!dark ? "./logoThuisa.PNG" : "./logoDarkThuisa.PNG"}
        width={70}
        alt="THUISA Logo"
        height={70}
      ></Image>
    </Link>
  );
}
