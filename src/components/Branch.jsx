import { twMerge } from "tailwind-merge";

export default function Branch({ branch, handleClick, selectedBranchID }) {
  return (
    <button
      onClick={() => handleClick(branch.id)}
      className={`${twMerge(
        "border border-strong-green/20 text-platinium p-4 flex items-center justify-center hover:bg-strong-green hover:text-black duration-300 cursor-pointer laptop:p-6",
        selectedBranchID === branch.id ? "bg-strong-green text-black" : "",
        branch.id === 5 ? "max-mobile-l:col-span-2" : ""
      )}`}
    >
      <h1 className="text-xl font-clash-grotesk font-semibold uppercase text-center laptop:text-3xl">
        {branch.name}
      </h1>
    </button>
  );
}
