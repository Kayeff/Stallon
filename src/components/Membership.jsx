import { RiCheckboxCircleFill, RiCloseCircleFill } from "@remixicon/react";
import formatCurrency from "../formatCurrency";

export default function Membership({ plan }) {
  const totalMonth = plan.extra + plan.duration;
  const totalPrice = Math.ceil(((plan.price / totalMonth) * 100) / 100);
  return (
    <div className="border border-strong-green/20 gradient-background gap-10 flex flex-col min-h-96 w-full rounded-2xl">
      <div className="w-full h-full flex items-center justify-between flex-col gap-10 p-4">
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <img className="h-20" src={plan.src} alt="logo" loading="lazy" />
          <h1 className="uppercase font-semibold text-3xl text-strong-green ">
            {plan.title}
          </h1>
          <p className="tracking-tight text-center text-sm ">{plan.about}</p>
        </div>
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex items-start justify-center flex-col">
            <h1 className="text-5xl tracking-tight font-medium">
              {formatCurrency(plan.price)} / -
            </h1>
            <h1 className="text-2xl font-medium tracking-tight">
              for{" "}
              <span className="text-strong-green tracking-tight">
                {plan.extra !== 0 ? totalMonth : plan.duration} month
                {plan.duration > 1 ? "s" : ""}{" "}
              </span>
            </h1>
            <h1 className="text-platinium/60 text-sm tracking-tight">
              {formatCurrency(totalPrice)} / month{" "}
              {plan.extra !== 0 ? `( extra ${plan.extra} months )` : ""}
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h1 className="w-full text-xl font-medium tracking-tight">
            What's included :{" "}
          </h1>
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
                  <span className="tracking-tight">{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full gap-1 flex items-center justify-center flex-col">
          <button className="px-6 py-3 border border-strong-green bg-strong-green text-black cursor-pointer hover:bg-strong-green/15 hover:text-platinium transition-all duration-300 font-medium w-full tracking-tight rounded-full">
            Buy Plan
          </button>
        </div>
      </div>
    </div>
  );
}
