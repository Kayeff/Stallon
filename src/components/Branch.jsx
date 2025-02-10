import { twMerge } from "tailwind-merge";

export default function Branch({ branch, handleClick, selectedBranchID }) {
  return (
    <div
      onClick={() => handleClick(branch.id)}
      className={`${twMerge(
        "border border-strong-green/20 text-platinium p-4 flex items-start justify-start hover:bg-strong-green hover:text-black duration-300 cursor-pointer",
        selectedBranchID === branch.id ? "bg-strong-green text-black" : ""
      )}`}
    >
      <h1 className="text-4xl font-clash-grotesk font-semibold uppercase">
        {branch.name}
      </h1>
    </div>
  );
}
