import { twMerge } from "tailwind-merge";

export default function Section({ children, className }) {
  return (
    <section
      className={`${twMerge(
        "w-full flex items-center justify-center py-20 border-b border-strong-green/20",
        className
      )}`}
    >
      {children}
    </section>
  );
}
