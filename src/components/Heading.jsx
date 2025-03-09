import SpanText from "./SpanText.jsx";
import { motion } from "framer-motion";

export default function Heading({ title, spanText }) {
  return (
    <div className="overflow-hidden">
      <div className="px-0.5">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-semibold uppercase font-clash-grotesk text-platinium max-tablet:text-3xl laptop:text-4xl laptop-l:text-6xl max-laptop-l:text-4xl text-center"
        >
          {title} <SpanText text={spanText} />
        </motion.h1>
      </div>
    </div>
  );
}
