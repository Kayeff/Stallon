import Heading from "../components/Heading";
import Membership from "../components/Membership";
import PersonalTraining from "../components/PersonalTraining";
import { membership_data } from "../membership";
import { pt_data } from "../personal_training";

export default function Pricing() {
  return (
    <main className="w-full min-h-screen flex items-center flex-col py-10 font-clash-grotesk">
      <div className="w-[90%] text-platinium cursor-default flex items-center justify-center flex-col space-y-8">
        <div className="w-full flex items-start justify-center flex-col">
          <Heading title={"Our"} spanText={"Pricing"} />
        </div>
        <div className="w-full p-4 space-y-4">
          <div className="w-full flex items-center justify-center flex-col">
            <h1 className="text-5xl uppercase font-semibold">
              Membership Plans
            </h1>
            <p className="text-lg">Choose the plan that suits you best</p>
          </div>
          <div className="w-full grid grid-cols-4 gap-4 p-4">
            {membership_data.map((data) => (
              <Membership key={data.id} plan={data} />
            ))}
          </div>
        </div>
        <div className="w-full p-4 space-y-4">
          <div className="w-full flex items-center justify-center flex-col">
            <h1 className="text-5xl uppercase font-semibold">
              Personal Training Charges
            </h1>
            <p className="text-lg">
              Take your fitness to the next level with expert guidance
            </p>
          </div>
          <div className="w-full grid grid-cols-4 gap-4 p-4">
            {pt_data.map((data) => (
              <PersonalTraining key={data.id} plan={data} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
