"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import NavLink from "@/components/NavLink";
import navLinks from "@/constants/navLinks";
import i from "@/constants/assets";

import "./styles/index.scss";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav id="navbar">
      <Image
        id="logo"
        src="https://www.civitasnetworks.com/static/media/logoBlue.d0b5fe85.png"
        alt="Civitas Logo"
        width={50}
        height={50}
        onClick={() => router.push("/")}
      />

      <ul>
        {navLinks.map((link) => (
          <NavLink key={link.name} pathname={pathname} {...link} />
        ))}
      </ul>
      <div id="navbarMobileContainer">
        <Image
          id="navbarContactIcon"
          className="clickable"
          src={i.icons.contact}
          alt="Contact Icon"
          width={50}
          height={50}
          onClick={() => router.push("/contact")}
        />
        <Image
          id="navbarMobileMenuIcon"
          className="clickable"
          src={i.icons.burger}
          alt="Menu Icon"
          width={50}
          height={50}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
         <ul
          id="navbarMobileMenu"
          className={`navbarMobileLink ${isMenuOpen ? "open" : ""}`}
        >
          {navLinks.map((link) => (
            <NavLink {...link} pathname={pathname} key={link.name} />
          ))}
        </ul>
      </div>
      <Link href="/contact" id="navbarContactButton">
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
