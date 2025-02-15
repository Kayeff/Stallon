export default function TeamComponent({ team }) {
  return (
    <div className="w-full grid grid-cols-1 border border-strong-green/20 duration-300 transition-all gap-4 tablet-xs:grid-cols-2">
      <div className="w-full flex items-start justify-start flex-col p-6 laptop:p-8 space-y-1.5 laptop:space-y-4 cursor-default">
        <h1 className="max-mobile-l:text-2xl font-semibold uppercase font-clash-grotesk text-platinium text-3xl max-tablet:text-3xl laptop:text-3xl laptop-l:text-4xl max-laptop-l:text-4xl laptop-4k:text-5xl">
          Our Team
        </h1>
        <div className="flex items-start justify-start flex-col space-y-0.5 laptop:space-y-1.5">
          {team.frontDesk !== "" && (
            <h1 className="text-base laptop:text-lg laptop-l:text-xl laptop-4k:text-3xl">
              Front Desk :{" "}
              <span className="text-strong-green font-medium">
                {team.frontDesk}
              </span>
            </h1>
          )}
          <h1 className="text-base laptop:text-lg laptop-l:text-xl laptop-4k:text-3xl">
            General Trainer :{" "}
            <span className="text-strong-green font-medium">
              {team.generalTrainer}
            </span>
          </h1>
          <h1 className="text-base laptop:text-lg laptop-l:text-xl laptop-4k:text-3xl">
            Personal Trainer :{" "}
            <span className="text-strong-green font-medium">
              {team.personalTrainer}
            </span>
          </h1>
          <h1 className="text-base laptop:text-lg laptop-l:text-xl laptop-4k:text-3xl">
            Branch Manager :{" "}
            <span className="text-strong-green font-medium">
              {team.branchManager.name}
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full flex items-center justify-center p-4">
        <img
          className="w-full object-cover"
          src={team.pic}
          alt={"Team pic"}
          loading="lazy"
        />
      </div>
    </div>
  );
}
