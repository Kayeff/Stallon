import star from "../assets/star.svg";
import tick from "../assets/tick.svg";

export default function BranchManager({ bm }) {
  return (
    <div className="w-full flex justify-center items-center flex-col border border-strong-green/20 duration-300 transition-all">
      <div className="w-full flex items-center justify-start flex-col cursor-default p-4 gap-4">
        <h1 className="font-medium uppercase font-clash-grotesk text-platinium text-2xl laptop:text-4xl">
          Branch Manager
        </h1>
        <div className="w-full grid grid-cols-1 tablet:grid-cols-2 duration-300 transition-all gap-4">
          <div className="flex items-center justify-center flex-col gap-4">
            <img
              className="w-full mobile-l:w-80 object-cover"
              src={bm.pic}
              alt={`${bm.name}`}
              loading="lazy"
            />
            <h1 className="w-full text-2xl font-medium text-strong-green uppercase text-center">
              {bm.name}
            </h1>
          </div>
          <div className="w-full flex items-center justify-start flex-col gap-2">
            <div className="w-full flex flex-col gap-4 p-2">
              <div className="w-full flex flex-col gap-1">
                <h1 className="text-sm laptop:text-lg tablet:text-base font-medium tracking-wide">
                  Achievements :{" "}
                </h1>
                <ul className="flex flex-col gap-1">
                  {bm.achievements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start justify-start gap-2"
                    >
                      <img className="h-6" src={star} alt="" />
                      <span className="laptop:text-lg tablet:text-base text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full flex flex-col gap-1">
                <h1 className="text-sm laptop:text-lg tablet:text-base font-medium tracking-wide">
                  Area of Expertise :{" "}
                </h1>
                <ul className="flex flex-col gap-1">
                  {bm.areaOfExpertise.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-start gap-2"
                    >
                      <img className="h-6" src={tick} alt="ticks" />
                      <span className="laptop:text-lg tablet:text-base text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
