function Team({ title, name }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 border border-strong-green/20">
      <h1 className="text-base laptop:text-lg laptop-l:text-xl laptop-4k:text-3xl text-strong-green font-medium text-center">
        {name}
      </h1>
      <h1>{title}</h1>
    </div>
  );
}

export default function TeamComponent({ team }) {
  return (
    <div className="w-full border border-strong-green/20 duration-300 transition-all p-4 space-y-4">
      <h1 className="max-mobile-l:text-2xl font-semibold uppercase font-clash-grotesk text-platinium text-3xl max-tablet:text-3xl laptop:text-3xl laptop-l:text-4xl max-laptop-l:text-4xl laptop-4k:text-5xl text-center">
        Our Team
      </h1>
      <div className="w-full">
        <div className="w-full flex items-center justify-center">
          <img
            className="w-full tablet-xs:w-[80%] laptop:h-96 laptop:w-1/2 object-cover object-top"
            src={team.pic}
            alt={"Team pic"}
            loading="lazy"
          />
        </div>
        <div className="w-full flex items-center justify-center flex-col p-6 laptop:p-8 space-y-1.5 laptop:space-y-4 cursor-default">
          <div className="w-full laptop:w-[80%] grid grid-cols-1 tablet-xs:grid-cols-2 gap-2 laptop:space-y-1.5">
            {team.frontDesk !== "" && (
              <Team title="Front Desk" name={team.frontDesk} />
            )}
            <Team title="General Trainer" name={team.generalTrainer} />
            <Team title="Personal Trainer/s" name={team.personalTrainer} />
            <Team title="Branch Manager" name={team.branchManager.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
