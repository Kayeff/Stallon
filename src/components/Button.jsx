import { twMerge } from "tailwind-merge";

export default function Button({ text, className }) {
  return (
    <button
      className={twMerge(
        "p-4 px-8 tracking-tight font-inter cursor-pointer transition-all duration-300 border-[0.5px] font-medium flex items-center gap-2 relative",
        className
      )}
    >
      {text}
    </button>
  );
}
