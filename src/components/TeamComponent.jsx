export default function TeamComponent({ team }) {
  return (
    <div className="w-full grid grid-cols-2 border border-strong-green/20 duration-300 transition-all">
      <div className="w-full flex items-start justify-start flex-col p-8 space-y-8 cursor-default">
        <h1 className="text-4xl uppercase font-semibold">Our Team</h1>
        <div className="flex items-start justify-start flex-col space-y-1">
          {team.frontDesk !== "" && (
            <h1 className="text-xl">
              Front Desk :{" "}
              <span className="text-strong-green font-medium">
                {team.frontDesk}
              </span>
            </h1>
          )}
          <h1 className="text-xl">
            General Trainer :{" "}
            <span className="text-strong-green font-medium">
              {team.generalTrainer}
            </span>
          </h1>
          <h1 className="text-xl">
            Personal Trainer :{" "}
            <span className="text-strong-green font-medium">
              {team.personalTrainer}
            </span>
          </h1>
          <h1 className="text-xl">
            Branch Manager :{" "}
            <span className="text-strong-green font-medium">
              {team.branchManager}
            </span>
          </h1>
        </div>
      </div>
      <img
        className="w-full object-cover"
        src={team.pic}
        alt={"Team pic"}
        loading="lazy"
      />
    </div>
  );
}
