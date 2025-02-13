import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function NavbarLink({ href, title }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <li className="">
      <NavLink
        className={twMerge(
          "text-lg font-medium hover:text-strong-green transition-colors duration-300 h-full py-1",
          isActive && "text-strong-green"
        )}
        to={href}
      >
        {title}
      </NavLink>
    </li>
  );
}
