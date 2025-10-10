import Link from "next/link";
import Image from "next/image";

export default function MenuLogo() {
  return (
    <Link href={`/`}>
      <Image
        src={`./logoThuisa.PNG`}
        width={70}
        alt="THUISA Logo"
        height={70}
      ></Image>
    </Link>
  );
}
