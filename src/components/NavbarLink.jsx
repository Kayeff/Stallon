import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const itemVariants = {
  hidden: { y: -30 },
  visible: { y: 0, transition: { duration: 0.2 } },
};

export default function NavbarLink({ href, title }) {
  const location = useLocation();
  const isActive = location.pathname === href;
  console.log(location.pathname);

  return (
    <AnimatePresence>
      <motion.h1 variants={itemVariants} className="xl:text-lg">
        <NavLink
          to={href}
          className={twMerge(
            "text-4xl font-semibold hover:text-strong-green transition-colors duration-300 uppercase tablet:capitalize tablet:text-base tablet:font-medium laptop:text-lg laptop-l:text-xl laptop-4k:text-2xl",
            isActive && "text-strong-green"
          )}
          end
        >
          {title}
        </NavLink>
      </motion.h1>
    </AnimatePresence>
  );
}
