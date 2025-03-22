function Team({ title, name }) {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 border border-strong-green/20">
      <h1 className="text-base text-strong-green font-medium text-center laptop:text-lg">
        {name}
      </h1>
      <h1 className="text-sm">{title}</h1>
    </div>
  );
}

export default function TeamComponent({ team }) {
  return (
    <div className="w-full flex justify-center items-center flex-col border border-strong-green/20">
      <div className="w-full flex items-center justify-start flex-col p-4 gap-4">
        <h1 className="text-2xl laptop:text-4xl font-medium uppercase font-clash-grotesk text-platinium text-center">
          Our Team
        </h1>
        <div className="w-full flex items-center justify-center">
          <img
            className="w-full mobile-l:h-60 tablet:w-96 laptop:w-[60%] laptop:h-96 object-cover"
            src={team.pic}
            alt={"Team pic"}
            loading="lazy"
          />
        </div>
        <div className="w-full flex items-center justify-center flex-col">
          <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-2">
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
