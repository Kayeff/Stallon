import star from "../assets/star.svg";
import tick from "../assets/tick.svg";

export default function BranchManager({ bm }) {
  return (
    <div className="w-full border border-strong-green/20 duration-300 transition-all flex items-start justify-start flex-col p-3 space-y-4">
      <div className="w-full flex items-center justify-start flex-col laptop:p-2 space-y-1.5 laptop:space-y-4 cursor-default">
        <h1 className="max-mobile-l:text-2xl font-semibold uppercase font-clash-grotesk text-platinium text-3xl max-tablet:text-3xl laptop:text-3xl laptop-l:text-4xl max-laptop-l:text-4xl laptop-4k:text-5xl">
          Branch Manager
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 duration-300 transition-all gap-4 tablet-xs:grid-cols-2 ">
        <div className="flex items-center justify-center">
          <img
            className={`h-96 laptop:h-[30rem] laptop-4k:h-[40rem] object-cover will-change-transform translate-z-0`}
            src={bm.pic}
            alt={`${bm.name}`}
            loading="lazy"
          />
        </div>
        <div className="w-full flex items-center tablet-xs:items-start justify-start flex-col space-y-2">
          <h1 className="text-2xl font-medium text-strong-green tablet:text-3xl laptop-4k:text-4xl">
            {bm.name}
          </h1>
          <div className="w-full space-y-4 p-2">
            <div className="w-full flex flex-col space-y-1 ">
              <h1 className="text-sm font-medium mobile-l:text-base laptop-4k:text-2xl laptop:text-lg">
                Achievements :{" "}
              </h1>
              <ul className="space-y-1">
                {bm.achievements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start justify-start space-x-2"
                  >
                    <img
                      className="h-6 laptop:h-7 laptop-4k:h-10"
                      src={star}
                      alt=""
                    />
                    <span className="text-sm mobile-l:text-base laptop:text-lg laptop-4k:text-2xl">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex flex-col space-y-1 laptop:space-y-1.5">
              <h1 className="text-sm font-medium mobile-l:text-base laptop-4k:text-2xl laptop:text-lg">
                Area of Expertise :{" "}
              </h1>
              <ul className="space-y-1">
                {bm.areaOfExpertise.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start space-x-2"
                  >
                    <img
                      className="h-6 laptop:h-7 laptop-4k:h-10"
                      src={tick}
                      alt=""
                    />
                    <span className="text-sm mobile-l:text-base laptop-4k:text-2xl laptop:text-lg">
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
  );
}
