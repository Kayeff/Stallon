import { motion } from "framer-motion";
import { navbar_links } from "../navbar_links";
import { socials } from "../socials";
import { NavLink } from "react-router-dom";

const menuVariants = {
  hidden: { top: "-100vh" },
  visible: {
    top: "0vh",
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    top: "-100vh",
    delay: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const listVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3, // Delay each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -30 },
};

export default function MobileMenu({ onClick }) {
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen w-full bg-[#252525] absolute left-0 z-20 flex items-center justify-between flex-col tablet:hidden"
    >
      <div className="w-full"></div>
      <div className="w-full p-4 flex items-center justify-center">
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="w-full font-clash-grotesk flex items-start justify-center flex-col space-y-2 px-2"
        >
          {navbar_links.map((link, index) => (
            <motion.li
              className="overflow-hidden"
              key={index}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
              onClick={onClick}
            >
              <NavLink to={link.href}>{link.title}</NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <motion.div
        variants={listVariants}
        className="w-full p-4 flex items-center justify-center space-x-5"
      >
        {socials.map(({ Icon, href }, i) => {
          return (
            <motion.a
              key={i}
              variants={itemVariants}
              className="hover:text-strong-green duration-300 transition-colors"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClick}
            >
              <Icon className="h-6 w-6 tablet-xs:h-7 tablet-xs:w-7" />
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
