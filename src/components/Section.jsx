import { twMerge } from "tailwind-merge";

export default function Section({ children, className }) {
  return (
    <section
      className={`${twMerge(
        "w-full flex items-center justify-center",
        className
      )}`}
    >
      {children}
    </section>
  );
}
