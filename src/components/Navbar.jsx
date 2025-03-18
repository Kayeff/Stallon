import logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import NavbarLink from "./NavbarLink";
import { socials } from "../socials";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  function closeMenu() {
    setIsVisible(false);
  }

  function toggleMenu() {
    setIsVisible((prev) => !prev);
  }

  return (
    <nav className="w-full text-platinium bg-black/90 flex items-center justify-center backdrop-blur-sm sticky top-0 left-0 z-10">
      <div className="w-full mx-auto p-4 flex items-center justify-between z-30">
        <NavLink to={"/"} className="">
          <img
            className="h-8 object-cover xs:h-10 md:h-8 laptop:h-10"
            src={logo}
            alt=""
          />
        </NavLink>
        <ul className="hidden font-clash-grotesk items-center justify-center">
          <NavbarLink href="/" title="Home" />
          <NavbarLink href="/about" title="About" />
          <NavbarLink href="/branches" title="Branches" />
          <NavbarLink href="/pricing" title="Pricing" />
          <NavbarLink href="/blog" title="Blog" />
          <NavbarLink href="/contact" title="Contact" />
        </ul>
        <div className="items-center justify-center md:space-x-2 hidden tablet:flex tablet:space-x-2 laptop:space-x-3">
          {socials.map(({ Icon, href }, i) => {
            return (
              <motion.a
                key={i}
                className="hover:text-strong-green duration-300 transition-colors"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <Icon className="h-6 w-6 laptop:h-5 laptop:w-5 tablet:h-5 tablet:w-5 laptop-l:h-6 laptop-l:w-6" />
              </motion.a>
            );
          })}
        </div>
        <Menu isVisible={isVisible} toggleMenu={toggleMenu} />
      </div>
      <AnimatePresence mode="wait">
        {isVisible && <MobileMenu onClick={closeMenu} />}
      </AnimatePresence>
    </nav>
  );
}
