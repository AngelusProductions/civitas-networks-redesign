"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import NavLink from "@/components/NavLink";
import navLinks from "@/constants/navLinks";
import i from "@/constants/assets";
import useWindowDimensions from "@/hooks/useWindowDimensions";

import "./styles/index.scss";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(width < 640);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuVisible(width < 640);
  }, [width]);

  return (
    <nav id="navbar">
      <Image
        id="logo"
        src="/images/logo.png"
        alt="Civitas Logo"
        width={50}
        height={50}
        onClick={() => router.push("/")}
      />
      {isMobileMenuVisible ? (
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <ul
            id="navbarMobileMenu"
            className={`navbarMobileLink ${isMobileMenuOpen ? "open" : ""}`}
          >
            {navLinks.map((link) => (
              <NavLink {...link} pathname={pathname} key={link.name} />
            ))}
          </ul>
        </div>
      ) : (
        <>
          <ul>
            {navLinks.map((link) => (
              <NavLink key={link.name} pathname={pathname} {...link} />
            ))}
          </ul>
          <Link href="/contact" id="navbarContactButton">
            Contact Us
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
