import Image from "next/image";
import Link from "next/link";

import i from "@/constants/assets";

import "./styles/index.scss";

const Logo = ({ id, light = false }: { id: string, light: boolean }) => {
  const src = light ? i.logos.white : i.logos.blue;
  return (
    <Link href='/'>
      <Image
        id={id}
        width={104}
        height={60}
        alt="Civitas Logo"
        className='logo clickable'
        src={src}
      />
    </Link>
  )
};

export default Logo;
