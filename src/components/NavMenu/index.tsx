'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

import navLinks from "@/constants/navLinks";

import "./styles/index.scss";

type NavMenuProps = { 
  id: string, 
  closed?: boolean, 
  isMobile?: boolean,
  setIsMenuOpen?: Function
};

const NavMenu = ({ 
  id, 
  closed = false, 
  isMobile = false, 
  setIsMenuOpen = () => {} 
}: NavMenuProps) => {
  const pathname = usePathname();
  
  return (
    <ul id={id} className={`navMenu${closed ? ' closed' : ''}${isMobile ? ' mobile' : ''}`}>
      {navLinks.map(({ url, name }) => <>
        <li className='navLink' key={name}>
          <Link 
            href={url} 
            className={pathname === url ? 'active' : ''}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            {name}
          </Link>
        </li>
        {isMobile && <hr className='navLinkDivider' />}
      </>)}
    </ul>
  );
};

export default NavMenu;
