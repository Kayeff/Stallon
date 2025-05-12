import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { navLink } from "../navbar_links";
import { AnimatePresence, motion } from "motion/react";
import { socials } from "../socials";

export default function SlideMenu({ onClose, isOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigateTo(path) {
    onClose();
    setTimeout(() => {
      navigate(path);
    }, 500);
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={onClose}
            animate={{ opacity: isOpen ? 1 : 0 }}
            className="w-full h-screen fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-end"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.article
            initial={{ right: "-30vw" }}
            animate={{ right: isOpen && 0 }}
            exit={{ right: "-30vw" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full fixed top-0 w-[30vw] bg-black z-40 p-20 flex items-center justify-around flex-col gap-20"
          >
            <p className="flex flex-col gap-2 w-full">
              <h1 className="tracking-tighter uppercase border-b border-strong-green/20 py-2">
                Navigation
              </h1>
              <ul className="w-full flex flex-col items-start gap-1">
                {navLink.map((link, index) => (
                  <li key={link.linkTitle} className="">
                    <motion.button
                      initial={{ x: 200 }}
                      animate={{ x: isOpen ? 0 : 200 }}
                      exit={{ x: 200 }}
                      transition={{ duration: 0.5, delay: 0.07 * index }}
                      onClick={() => handleNavigateTo(link.to)}
                      className={twMerge(
                        "text-platinium tracking-tighter text-7xl cursor-pointer uppercase font-medium hover:text-platinium/80",
                        location.pathname === `/${link.to}` &&
                          "text-strong-green hover:text-strong-green"
                      )}
                    >
                      {link.linkTitle}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </p>
            <p className="flex flex-col gap-2 w-full">
              <h1 className="tracking-tighter uppercase border-b border-strong-green/20 py-1">
                Socials
              </h1>
              <ul className="w-full flex flex-col gap-2">
                {socials.map((link) => (
                  <li key={link.linkText}>
                    <a
                      href={link.href}
                      target="_blank"
                      className="hover:text-strong-green tracking-tighter flex gap-2 w-max"
                    >
                      <span>
                        <link.Icon />
                      </span>
                      <span>{link.linkText}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </p>
          </motion.article>
        )}
      </AnimatePresence>
    </>
  );
}
