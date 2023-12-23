'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

import navLinks from "@/constants/navLinks";

import "./styles/index.scss";

type NavMenuProps = { 
  id: string, 
  closed?: boolean, 
  isMobile?: boolean,
  isFooter?: boolean,
  isNavbar?: boolean,
  setIsMenuOpen?: Function
};

const NavMenu = ({ 
  id, 
  closed = false, 
  isMobile = false, 
  isFooter = false,
  isNavbar = false,
  setIsMenuOpen = () => {} 
}: NavMenuProps) => {
  const pathname = usePathname();
  const navLinkList = isNavbar ? navLinks.filter(({ name }) => name !== 'Contact') : navLinks;
  return (
    <ul id={id} className={`navMenu${closed ? ' closed' : ''}${isMobile ? ' mobile' : ''}${isFooter ? ' footer' : ''}`}>
      {navLinkList.map(({ url, name }) => <>
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
