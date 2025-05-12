import Logo from "./Logo";
import { useEffect, useState } from "react";
import SlideMenu from "./SlideMenu";
import ToggleButton from "./ToggleButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <nav className="w-full text-platinium flex items-center justify-center sticky top-0 left-0 z-20 bg-black">
      <div className="w-[90%] p-5 flex items-center justify-between z-30">
        <div>
          <Logo size="h-14" />
        </div>
        <SlideMenu isOpen={isOpen} onClose={handleClose} />
        <ToggleButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}
