import SpanText from "./SpanText";
import { motion } from "framer-motion";

export default function Classes({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="border border-strong-green/20 flex items-end justify-start flex-col space-y-2"
    >
      <img
        className="object-cover h-80 w-full tablet-xs:h-80 laptop:h-72 laptop-l:h-80 laptop-4k:h-80 will-change-transform"
        src={item.src}
        alt={item.title}
      />
      <div className="w-full flex items-center justify-end p-2 overflow-hidden">
        <h1 className="uppercase font-semibold text-3xl font-clash-grotesk text-platinium text-end flex items-end justify-center flex-col laptop:text-4xl laptop-l:text-4xl laptop-4k:text-6xl">
          <SpanText text={item.spanText} />
          {item.title}
        </h1>
      </div>
    </motion.div>
  );
}
