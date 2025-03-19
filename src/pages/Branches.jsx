import { useState } from "react";
import Heading from "../components/Heading";
import SelectedBranch from "../components/SelectedBranch";
import { branches } from "../branches";
import Branch from "../components/Branch";

export default function Branches() {
  const [selectedBranchID, setSelectedBranchID] = useState(null);
  const selectedBranch = branches.find(
    (branch) => branch.id === selectedBranchID
  );

  function handleClick(branchID) {
    setSelectedBranchID(branchID);
  }

  return (
    <main className="w-full min-h-screen flex items-start justify-center">
      <div className="w-full flex items-center flex-col gap-8 p-4 tablet:w-[80%] laptop:w-[90vw] laptop-l:w-[70vw]">
        <Heading title={"our"} spanText={"Branches"} />
        <div className="w-full font-clash-grotesk text-platinium flex items-center justify-center flex-col gap-8">
          <div className="w-full grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 gap-1">
            {branches.map((branch) => (
              <Branch
                selectedBranchID={selectedBranchID}
                handleClick={handleClick}
                key={branch.id}
                branch={branch}
              />
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            {selectedBranch ? (
              <SelectedBranch key={selectedBranch.id} branch={selectedBranch} />
            ) : (
              <h1 className="text-sm text-platinium/80 cursor-default">
                Select a branch to see details
              </h1>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
