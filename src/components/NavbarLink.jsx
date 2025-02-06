import { NavLink } from "react-router-dom";

export default function NavbarLink({ href, title }) {
  return (
    <li className="">
      <NavLink
        className="text-lg font-medium hover:text-strong-green transition-colors duration-300 h-full py-1"
        to={href}
      >
        {title}
      </NavLink>
    </li>
  );
}
