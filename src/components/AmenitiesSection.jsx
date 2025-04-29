import Heading from "./Heading";
import { membership_data } from "../membership";
import Membership from "./Membership";

export default function AmenitiesSection() {
  return (
    <section className="w-full gap-8 cursor-default flex items-center justify-center p-10">
      <div className="w-[80%] flex items-center justify-center flex-col gap-5">
        <div className="w-full flex items-center justify-center flex-col gap-2 text-center">
          <h1 className="tracking-tight">Find</h1>
          <Heading title="your perfect" spanText="Plan" />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-cols-4 gap-3">
            {membership_data.map((data) => (
              <Membership key={`membership-plan-${data.id}`} plan={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
