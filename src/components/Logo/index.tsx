import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "./styles/index.scss";

const Logo = ({ id }: { id: string }) => {
  return (
    <Link href='/'>
      <Image
        id={id}
        width={104}
        height={60}
        alt="Civitas Logo"
        className='logo clickable'
        src="https://www.civitasnetworks.com/static/media/logoBlue.d0b5fe85.png"
      />
    </Link>
  )
};

export default Logo;
