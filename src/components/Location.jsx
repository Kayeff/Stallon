import { motion } from "framer-motion";

export default function Location({ branch, index }) {
  return (
    <div className="h-full w-full flex items-center justify-start p-6 border border-strong-green/20 text-platinium duration-300 laptop:justify-center laptop-l:p-8 laptop-l:px-10">
      <motion.span
        animate={{ y: [200, 0] }}
        transition={{ duration: 1, delay: 0.1 * index }}
        className="text-xl uppercase font-clash-grotesk font-medium text-start mobile-l:text-2xl laptop:text-center laptop-l:text-3xl"
      >
        {branch.name}
      </motion.span>
    </div>
  );
}
