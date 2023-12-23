"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";

import i from "@/constants/assets";

import "./styles/index.scss";

const Navbar = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: Function }) => {
  const router = useRouter();

  return (
    <nav id="navbar">
      <Logo id='navbarLogo' light />
      <NavMenu id='navbarMenu' isNavbar />
      <Link 
        href="/contact" 
        id="navbarContactButton"
        className="clickable"
      >
        Contact Us
      </Link>
      <div id="navbarMobileContainer" className={isMenuOpen ? 'open' : ''}>
        {!isMenuOpen && <Image
          id="navbarContactIcon"
          className="clickable"
          src={i.icons.contact}
          alt="Contact Icon"
          width={50}
          height={50}
          onClick={() => router.push("/contact")}
        />}
        {!isMenuOpen && <Image
          id="navbarMobileMenuIcon"
          className="clickable"
          src={i.icons.burger}
          alt="Menu Icon"
          width={50}
          height={50}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />}
        {isMenuOpen && <Image
          id="navbarMobileMenuCloseIcon"
          className="clickable"
          src={i.icons.close}
          alt="Close Icon"
          width={50}
          height={50}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />}
        <NavMenu 
          id='navbarMobileMenu' 
          closed={!isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isMobile
        /> 
      </div>
    </nav>
  );
};

export default Navbar;
