import { useState } from "react";
import Heading from "../components/Heading";
import SelectedBranch from "../components/SelectedBranch";
import { branches } from "../branches";
import Branch from "../components/Branch";
import { motion } from "framer-motion";

export default function Branches() {
  const [selectedBranchID, setSelectedBranchID] = useState(null);

  const selectedBranch = branches.find(
    (branch) => branch.id === selectedBranchID
  );

  function handleClick(branchID) {
    setSelectedBranchID(branchID);
  }

  return (
    <main className="w-full min-h-screen flex items-center justify-start flex-col py-10">
      <div className="w-[90%] space-y-4">
        <div className="w-full flex items-start justify-center flex-col">
          <Heading title={"our"} spanText={"Branches"} />
        </div>
        <div className="w-full grid grid-cols-5 gap-4">
          {branches.map((branch) => (
            <Branch
              selectedBranchID={selectedBranchID}
              handleClick={handleClick}
              key={branch.id}
              branch={branch}
            />
          ))}
        </div>
        <motion.div
          className="w-full py-10 font-clash-grotesk text-platinium flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {selectedBranch ? (
            <motion.div
              key={selectedBranch.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full flex items-center justify-center flex-col"
            >
              <SelectedBranch branch={selectedBranch} />
            </motion.div>
          ) : (
            <h1 className="text-xl font-medium cursor-default">
              Select a branch to see details
            </h1>
          )}
        </motion.div>
      </div>
    </main>
  );
}
