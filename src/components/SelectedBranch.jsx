import TeamComponent from "./TeamComponent";
import GymShowcase from "./GymShowcase";

export default function SelectedBranch({ branch }) {
  return (
    <section className="w-[80%] space-y-10 flex items-center justify-center flex-col">
      <div className="w-full cursor-default">
        <h1 className="text-5xl uppercase font-semibold text-start">
          Stallon <span className="text-strong-green">{branch.name}</span>{" "}
          branch
        </h1>
        <a
          href={branch.link}
          target="_blank"
          className="font-medium tracking-wide hover:underline text-lg"
        >
          <span className="font-normal">{branch.address}</span>
        </a>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-center flex-col space-y-4">
          <div className="w-full">
            <GymShowcase showcase={branch.showcase} />
          </div>
          <div className="w-full">
            <TeamComponent team={branch.team} />
          </div>
        </div>
      </div>
    </section>
  );
}
