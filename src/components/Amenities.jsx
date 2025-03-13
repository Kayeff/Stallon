import { motion } from "framer-motion";

export default function Amenities({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 * index }}
      className="w-full flex items-center justify-start flex-col text-platinium border border-strong-green/20 "
    >
      <div className="w-full flex items-start justify-center">
        <img
          className="w-full h-80 object-cover laptop-4k:h-[30rem]"
          src={item.src}
          alt={item.title}
          loading="lazy"
        />
      </div>
      <div className="w-full space-y-2 flex items-start justify-center flex-col p-5">
        <h1 className="font-clash-grotesk font-semibold text-2xl uppercase text-strong-green laptop-l:text-3xl laptop-4k:text-4xl">
          {item.title}
        </h1>
        <p className="w-full font-clash-grotesk font-medium text-sm laptop-l:text-base laptop-4k:text-xl">
          {item.para}
        </p>
      </div>
    </motion.div>
  );
}
