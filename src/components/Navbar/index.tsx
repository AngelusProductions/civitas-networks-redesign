'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'; 

import NavLink from "@/components/NavLink";
import navLinks from "@/constants/navLinks";

import "./styles/index.scss";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav id="navbar">
      <Image
        id="logo"
        src="/images/logo.png"
        alt="Civitas Logo"
        width={50}
        height={50}
      />
      <ul>
        {navLinks.map((link) => (
          <NavLink key={link.name} name={link.name} link={link.link} pathname={pathname} />
        ))}
      </ul>
      <Link href="/contact" id="navbarContactButton">
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
