import { motion } from "framer-motion";

export default function Para({ text }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-platinium font-clash-grotesk text-start text-sm tablet-xs:text-sm tablet:text-base laptop:text-lg laptop-l:text-xl laptop-4k:text-2xl"
    >
      {text}
    </motion.p>
  );
}
