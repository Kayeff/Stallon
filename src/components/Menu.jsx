import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLargeLine, RiMenu3Fill } from "@remixicon/react";

export default function Menu({ isVisible, toggleMenu }) {
  return (
    <button
      className="flex items-center justify-center text-strong-green p-1 tablet:hidden"
      onClick={toggleMenu}
    >
      <AnimatePresence mode="wait">
        {!isVisible ? (
          <motion.span
            key="menu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <RiMenu3Fill className="h-5 w-5 xs:w-6 xs:h-6" />
          </motion.span>
        ) : (
          <motion.span
            key="close"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <RiCloseLargeLine className="w-5 h-5 xs:w-6 xs:h-6 text-strong-green" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
