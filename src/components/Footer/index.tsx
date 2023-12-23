import Link from "next/link";

import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";

import "./styles/index.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div id='footerTop' className='footerSection'>
        <div id='footerLogoContainer'>
          <Logo id="footerLogo" light />
          <p id='footerLogoText'>Internet for Everyone, Everywhere</p>
        </div>
        <NavMenu id="footerNavMenu" isFooter />
      </div>
      <hr />
      <div id='footerBottom' className='footerSection'>
        <p id='footerRights'>© {new Date().getFullYear()} Civitas Networks, All Rights Reserved</p>
        <div id='footerInfoContainer'>
          <Link href="/privacy" id='footerPrivacy'>
            Privacy Policy
          </Link>
          <Link href="/terms" id='footerTerms'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
