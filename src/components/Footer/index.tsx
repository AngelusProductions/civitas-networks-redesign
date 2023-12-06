import Link from "next/link";

import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";

import "./styles/index.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div id='footerTop' className='footerSection'>
        <Logo id="footerLogo" light={false} />
        <NavMenu id="footerNavMenu" />
      </div>
      <hr />
      <div id='footerBottom' className='footerSection'>
        <p id='footerRights'>© {new Date().getFullYear()} Civitas Networks, All Rights Reserved</p>
        <div id='footerInfoContainer'>
          <Link href="/privacy" id='footerPrivacy' className='clickable'>
            Privacy Policy
          </Link>
          <Link href="/terms" id='footerTerms' className='clickable'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
