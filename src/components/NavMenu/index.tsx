'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

import navLinks from "@/constants/navLinks";

import "./styles/index.scss";

type NavMenuProps = { id: string, closed?: boolean };

const NavMenu = ({ id, closed = false }: NavMenuProps) => {
  const pathname = usePathname();
  
  return (
    <ul id={id} className={`navMenu${closed ? ' closed' : ''}`}>
      {navLinks.map(({ url, name }) => (
        <li className='navLink clickable' key={name}>
          <Link 
            href={url} 
            className={pathname === url ? 'active' : ''}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
