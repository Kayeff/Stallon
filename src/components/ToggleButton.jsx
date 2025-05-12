import { motion } from "motion/react";

export default function ToggleButton({ toggleMenu, isOpen }) {
  return (
    <button
      onClick={toggleMenu}
      className="p-4 w-16 cursor-pointer relative z-50"
    >
      <motion.span
        initial={{ top: "0.5rem", rotate: 0 }}
        animate={{
          top: isOpen ? "50%" : "0.5rem",
          rotate: isOpen ? 45 : 0,
        }}
        transition={{ ease: "easeInOut" }}
        className="inline-block w-full h-[2px] bg-strong-green absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.span
        initial={{ top: "1.5rem", rotate: 0 }}
        animate={{
          top: isOpen ? "50%" : "1.5rem",
          rotate: isOpen ? -45 : 0,
        }}
        transition={{ ease: "easeInOut" }}
        className="inline-block w-full h-[2px] bg-strong-green absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </button>
  );
}
