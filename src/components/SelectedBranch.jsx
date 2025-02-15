import TeamComponent from "./TeamComponent";
import GymShowcase from "./GymShowcase";
import BranchManager from "./BranchManager";

export default function SelectedBranch({ branch }) {
  return (
    <section className="w-full space-y-10 flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="max-mobile-l:text-2xl font-semibold uppercase font-clash-grotesk text-platinium text-3xl max-tablet:text-3xl laptop:text-3xl laptop-l:text-5xl max-laptop-l:text-4xl">
          Stallon <span className="text-strong-green">{branch.name}</span>{" "}
          branch
        </h1>
        <a
          href={branch.link}
          target="_blank"
          className="font-medium tracking-wide hover:underline text-sm text-center"
        >
          <span className="font-normal block laptop:text-base">
            {branch.address}
          </span>
        </a>
      </div>
      <div className="w-full flex items-center justify-center laptop:w-[80%]">
        <div className="w-full flex items-center justify-center flex-col space-y-4">
          <div className="w-full ">
            <GymShowcase showcase={branch.showcase} />
          </div>
          <div className="w-full">
            <TeamComponent team={branch.team} />
          </div>
          <div className="w-full">
            <BranchManager bm={branch.team.branchManager} />
          </div>
        </div>
      </div>
    </section>
  );
}
