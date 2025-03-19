import Heading from "../components/Heading";
import MembershipPricing from "../components/MembershipPricing";
import PersonalTrainingPricing from "../components/PersonalTrainingPricing";

export default function Pricing() {
  return (
    <main className="w-full min-h-screen flex items-center flex-col font-clash-grotesk mb-10">
      <div className="w-full text-platinium cursor-default flex items-center justify-center flex-col gap-8 p-4 laptop:w-[80%]">
        <Heading title={"Our"} spanText={"Pricings"} />
        <MembershipPricing />
        <PersonalTrainingPricing />
      </div>
    </main>
  );
}
