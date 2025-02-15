import { twMerge } from "tailwind-merge";

export default function Branch({ branch, handleClick, selectedBranchID }) {
  return (
    <div
      onClick={() => handleClick(branch.id)}
      className={`${twMerge(
        "border border-strong-green/20 text-platinium p-4 flex items-start justify-start hover:bg-strong-green hover:text-black duration-300 cursor-pointer",
        selectedBranchID === branch.id ? "bg-strong-green text-black" : "",
        branch.id === "branch5" ? "max-laptop:col-span-2" : ""
      )}`}
    >
      <h1 className="text-xl font-clash-grotesk font-semibold uppercase laptop:text-2xl laptop-l:text-4xl">
        {branch.name}
      </h1>
    </div>
  );
}
