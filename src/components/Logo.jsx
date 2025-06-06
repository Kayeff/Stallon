import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { twMerge } from "tailwind-merge";

export default function Logo({ size }) {
  return (
    <Link
      to=""
      className="hover:text-strong-green duration-300 flex items-center justify-center tablet:justify-start w-full"
    >
      <img
        className={twMerge("h-12 object-cover", size)}
        src={logo}
        alt="gym_logo"
        loading="lazy"
      />
    </Link>
  );
}
