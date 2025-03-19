import { membership_data } from "../membership";
import Membership from "./Membership";

export default function MembershipPricing() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="text-2xl uppercase font-semibold">Membership Plans</h1>
        <p className="text-sm">Choose the plan that suits you best</p>
      </div>
      <div className="w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-2">
        {membership_data.map((data) => (
          <Membership key={`membership-plan-${data.id}`} plan={data} />
        ))}
      </div>
    </div>
  );
}
