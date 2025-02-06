import logo from "../assets/logo.webp";
import NavbarLink from "./NavbarLink";
import { NavLink } from "react-router-dom";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "@remixicon/react";

export default function Navbar() {
  return (
    <nav className="w-full text-platinium bg-black/90 flex items-center justify-center backdrop-blur-sm sticky top-0 left-0 z-10">
      <div className="w-[90%] py-4 flex items-center justify-between">
        <NavLink to={"/"} className="">
          <img className="h-12 object-cover" src={logo} alt="" />
        </NavLink>
        <ul className="font-clash-grotesk flex items-center justify-center space-x-8">
          <NavbarLink href="/about" title="About" />
          <NavbarLink href="/branches" title="Branches" />
          <NavbarLink href="/membership" title="Membership" />
          <NavbarLink href="/blog" title="Blog" />
          <NavbarLink href="/contact" title="Contact" />
        </ul>
        <div className="flex items-center justify-center space-x-4">
          <a
            className="hover:text-strong-green duration-300 transition-colors"
            href="https://www.instagram.com/stallon_gym_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramFill />
          </a>
          <a
            className="hover:text-strong-green duration-300 transition-colors"
            href="https://www.facebook.com/stallongymindia.mediablock.india/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFacebookCircleFill />
          </a>
          <a
            className="hover:text-strong-green duration-300 transition-colors"
            href="https://www.youtube.com/@StallonGym/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiYoutubeFill />
          </a>
        </div>
      </div>
    </nav>
  );
}
