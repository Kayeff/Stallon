import { useState } from "react";
import Heading from "../components/Heading";
import SelectedBranch from "../components/SelectedBranch";
import { twMerge } from "tailwind-merge";
import { branches } from "../branches";

export default function Branches() {
  const [selectedBranchID, setSelectedBranchID] = useState(null);
  const selectedBranch = branches.find(
    (branch) => branch.id === selectedBranchID
  );

  return (
    <main className="w-full min-h-screen flex items-center justify-start flex-col py-10">
      <div className="w-[90%] space-y-4">
        <div className="w-full flex items-start justify-center flex-col">
          <Heading title={"our"} spanText={"Branches"} />
        </div>
        <div className="w-full grid grid-cols-5 gap-4">
          {branches.map((branch) => (
            <div
              onClick={() => setSelectedBranchID(branch.id)}
              key={branch.id}
              className={`${twMerge(
                "border border-strong-green/20 text-platinium p-4 flex items-start justify-start hover:bg-strong-green hover:text-black duration-300 cursor-pointer",
                selectedBranchID === branch.id
                  ? "bg-strong-green text-black"
                  : ""
              )}`}
            >
              <h1 className="text-4xl font-clash-grotesk font-semibold uppercase">
                {branch.name}
              </h1>
            </div>
          ))}
        </div>
        <div className="w-full py-10 font-clash-grotesk text-platinium flex items-center justify-center">
          {selectedBranch ? (
            <SelectedBranch branch={selectedBranch} />
          ) : (
            "Select a branch to see details"
          )}
        </div>
      </div>
    </main>
  );
}
