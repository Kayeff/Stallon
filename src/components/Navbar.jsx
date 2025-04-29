import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import NavbarLink from "./NavbarLink";
import Logo from "./Logo";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  function closeMenu() {
    setIsVisible(false);
  }

  function toggleMenu() {
    setIsVisible((prev) => !prev);
  }

  return (
    <nav className="w-full text-platinium bg-black flex items-center justify-center sticky inset-0 z-10 border-b border-platinium/20">
      <div className="w-[90%] p-5 flex items-center justify-between z-30">
        <Logo size="h-14" />
        <ul className="hidden font-clash-grotesk items-center justify-center tablet:flex gap-4 laptop:gap-8">
          <NavbarLink href="/" title="Home" />
          <NavbarLink href="/about" title="About" />
          <NavbarLink href="/branches" title="Branches" />
          <NavbarLink href="/pricing" title="Pricing" />
          <NavbarLink href="/contact" title="Contact" />
        </ul>
        {/* <div className="items-center justify-center md:space-x-2 hidden tablet:flex tablet:space-x-2 laptop:space-x-3">
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
        </div> */}
        <Menu isVisible={isVisible} toggleMenu={toggleMenu} />
      </div>
      <AnimatePresence mode="wait">
        {isVisible && <MobileMenu onClick={closeMenu} />}
      </AnimatePresence>
    </nav>
  );
}
