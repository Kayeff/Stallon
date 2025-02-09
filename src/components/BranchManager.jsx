import star from "../assets/star.svg";
import tick from "../assets/tick.svg";

export default function BranchManager({ bm }) {
  return (
    <div className="w-full border border-strong-green/20 duration-300 transition-all flex items-center justify-center flex-col py-10 space-y-5">
      <div className="w-full flex items-center justify-center flex-col cursor-default">
        <h1 className="text-4xl uppercase font-semibold">Branch Manager</h1>
      </div>
      <div className="w-[90%] grid grid-cols-2">
        <div className="flex items-center justify-center">
          <img
            className={`w-96 h-full object-cover will-change-transform translate-z-0`}
            src={bm.pic}
            alt={`${bm.name}`}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="w-full flex items-start justify-start flex-col space-y-2">
          <h1 className="text-4xl font-medium text-strong-green">{bm.name}</h1>
          <div className="w-full space-y-4 p-2">
            <div className="w-full flex flex-col space-y-1 ">
              <h1 className="text-xl font-medium">Achievements : </h1>
              <ul className="space-y-1 ">
                {bm.achievements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start space-x-2"
                  >
                    <img className="h-8" src={star} alt="" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex flex-col space-y-1">
              <h1 className="text-xl font-medium">Area of Expertise : </h1>
              <ul className="space-y-1">
                {bm.areaOfExpertise.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start space-x-2"
                  >
                    <img className="h-8" src={tick} alt="" />
                    <span className="text-lg">{item}</span>
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
