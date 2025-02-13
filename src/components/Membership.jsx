import { RiCheckboxCircleFill, RiCloseCircleFill } from "@remixicon/react";
import formatCurrency from "../formatCurrency";

export default function Membership({ plan }) {
  const totalMonth = plan.extra + plan.duration;
  const totalPrice = Math.ceil(((plan.price / totalMonth) * 100) / 100);
  return (
    <div className="border border-strong-green/20 gradient-background min-h-96 space-y-10 flex items-center justify-between flex-col ">
      <div className="w-full flex flex-col items-center justify-center space-y-2 p-6">
        <img className="h-20" src={plan.src} alt="" />
        <h1 className="uppercase font-semibold text-4xl  text-strong-green ">
          {plan.title}
        </h1>
        <p className="tracking-wide text-center">{plan.about}</p>
      </div>
      <div className="w-full px-6 space-y-8">
        <div className="w-full flex items-start justify-center flex-col">
          <h1 className="text-5xl tracking-tighter font-medium">
            {formatCurrency(plan.price)} / -
          </h1>
          <h1 className="text-2xl font-medium ">
            for{" "}
            <span className="text-strong-green">
              {plan.extra !== 0 ? totalMonth : plan.duration} month
              {plan.duration > 1 ? "s" : ""}{" "}
            </span>
          </h1>
          <h1 className="text-platinium/60 text-sm">
            {formatCurrency(totalPrice)} / month{" "}
            {plan.extra !== 0 ? `( extra ${plan.extra} months )` : ""}
          </h1>
        </div>
      </div>
      <div className="w-full p-6 space-y-2">
        <h1 className="w-full text-xl font-medium">What's included : </h1>
        <ul className="space-y-1">
          {plan.facilities.map((item) => {
            return (
              <li
                key={item.id}
                className="flex items-center justify-start space-x-1 border-b border-strong-green/20 hover:text-platinium/80 duration-300 pb-0.5"
              >
                <span>
                  {item.availableWithPackage ? (
                    <RiCheckboxCircleFill className="text-strong-green" />
                  ) : (
                    <RiCloseCircleFill className="text-red-500" />
                  )}
                </span>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full p-6 space-y-4 flex items-center justify-center flex-col">
        <button className="px-6 py-4 border border-strong-green bg-strong-green text-black cursor-pointer hover:bg-strong-green/15 hover:text-platinium transition-all duration-300 font-medium w-full">
          Buy Plan
        </button>
        <button className="cursor-pointer text-platinium underline hover:text-strong-green">
          Book a call
        </button>
      </div>
    </div>
  );
}
