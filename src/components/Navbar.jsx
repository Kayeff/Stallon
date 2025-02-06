import logo from "../assets/logo.webp";
import Link from "./Link";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "@remixicon/react";

export default function Navbar() {
  return (
    <nav className="w-full text-platinium bg-black/90 flex items-center justify-center backdrop-blur-sm sticky top-0 left-0 z-10">
      <div className="w-[90%] py-4 flex items-center justify-between">
        <a href="#" className="">
          <img className="h-12 object-cover" src={logo} alt="" />
        </a>
        <ul className="font-clash-grotesk flex items-center justify-center space-x-8">
          <Link href="#" title="About" />
          <Link href="#" title="Branches" />
          <Link href="#" title="Membership" />
          <Link href="#" title="Blog" />
          <Link href="#" title="Contact" />
        </ul>
        <div className="flex items-center justify-center space-x-4">
          <a
            className="hover:text-strong-green duration-300 transition-colors"
            href=""
          >
            <RiInstagramFill />
          </a>
          <a
            className="hover:text-strong-green duration-300 transition-colors"
            href=""
          >
            <RiFacebookCircleFill />
          </a>
          <a
            className="hover:text-strong-green duration-300 transition-colors"
            href=""
          >
            <RiYoutubeFill />
          </a>
        </div>
      </div>
    </nav>
  );
}
