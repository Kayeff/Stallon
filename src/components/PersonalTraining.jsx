import { useState } from "react";
import formatCurrency from "../formatCurrency";
import { twMerge } from "tailwind-merge";

export default function PersonalTraining({ plan }) {
  const [trainerLVL, setTrainerLVL] = useState({});

  function handleClick(level, price) {
    setTrainerLVL((prev) => {
      return {
        ...prev,
        level: level,
        price: price,
      };
    });
  }

  return (
    <div className="border border-strong-green/20 gradient-background gap-10 flex flex-col min-h-96 w-full">
      <div className="w-full h-full flex items-center justify-between flex-col gap-10 p-4">
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <img className="h-20" src={plan.img} alt="" />
          <div className="w-full flex flex-col">
            <h1 className="text-2xl font-medium text-center text-strong-green">
              {plan.title}
            </h1>
            <p className="text-center">{plan.about}</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center flex-col">
          <h1>Duration</h1>
          <h1 className="font-medium text-4xl">
            {plan.duration} month{plan.duration > 1 ? "s" : ""}
          </h1>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-lg font-medium">Trainer Level</h1>
          <div className="grid grid-cols-1 gap-1 tablet:grid-cols-2">
            {plan.trainer.map((lvl) => (
              <button
                onClick={() => handleClick(lvl.level, lvl.price)}
                key={lvl.level}
                className={twMerge(
                  "w-full flex items-center justify-start flex-col border border-strong-green/20 cursor-pointer hover:bg-strong-green/10",
                  trainerLVL.level === lvl.level
                    ? "bg-strong-green/20 border-strong-green"
                    : ""
                )}
              >
                <h1 className="w-full text-center uppercase p-1 text-strong-green border-b border-strong-green/20 font-semibold">
                  {lvl.level}
                </h1>
                <h1 className="font-medium text-2xl text-platinium text-center p-2">
                  {formatCurrency(lvl.price)} /-
                </h1>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col">
          <button className="px-2 py-3 border border-strong-green bg-strong-green text-black cursor-pointer hover:bg-strong-green/15 hover:text-platinium transition-all duration-300 font-medium w-full">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
