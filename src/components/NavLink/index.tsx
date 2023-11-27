import Link from "next/link";

import "./styles/index.scss";

interface NavLinkProps {
  name: string;
  link: string;
  pathname: string;
}
const NavLink: React.FC<NavLinkProps> = ({ name, link, pathname }) => {
  return (
    <li className='navLink'>
      <Link href={link} className={pathname === link ? 'active' : ''}>
        {name}
      </Link>
    </li>
  );
};

export default NavLink;