import { twMerge } from "tailwind-merge";
import { memo } from "react";

const Section = memo(function Section({ children, className }) {
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
});

export default Section;
