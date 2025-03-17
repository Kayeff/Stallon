import { twMerge } from "tailwind-merge";
import { memo } from "react";

export default function Section({ children, className }) {
  return (
    <section
      className={`${twMerge(
        "w-full flex items-start justify-center max-w-full overflow-x-hidden",
        className
      )}`}
    >
      {children}
    </section>
  );
}
