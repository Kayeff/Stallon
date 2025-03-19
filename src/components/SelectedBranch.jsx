import TeamComponent from "./TeamComponent";
import GymShowcase from "./GymShowcase";
import BranchManager from "./BranchManager";

export default function SelectedBranch({ branch }) {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-8">
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="text-2xl laptop:text-4xl font-semibold uppercase font-clash-grotesk text-platinium text-center">
          Stallon <span className="text-strong-green">{branch.name}</span>{" "}
          branch
        </h1>
        <a
          href={branch.link}
          target="_blank"
          className="font-medium tracking-wide hover:underline text-sm text-center"
        >
          <span className="font-normal block">{branch.address}</span>
        </a>
      </div>
      <div className="w-full grid grid-cols-1 gap-4">
        <GymShowcase branch={branch} />
        <TeamComponent team={branch.team} />
        <BranchManager bm={branch.team.branchManager} />
      </div>
    </div>
  );
}
