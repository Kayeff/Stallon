import Classes from "./Classes";
import Heading from "./Heading";

export default function ClassesSection() {
  return (
    <div className="w-[90%] min-h-screen space-y-8 cursor-default">
      <div className="w-full text-center flex items-center justify-center flex-col space-y-2">
        <Heading title="Our" spanText="Classes" />
        <p className="text-platinium font-clash-grotesk text-lg font-medium w-[50%]">
          On over 5000 m² carpet area, we offer you a broad spectrum of fitness,
          and recovery classes. You decide for yourself whether it's weight
          gain, weight loss or muscle gain. At Stallon Gym, you'll find
          everything a fit person could wish for. Whether it's for a first trial
          training or as an ambitious competitor, we have the right course for
          you. For your active recovery, you can also attend our yoga classes or
          consult a trainer.
        </p>
      </div>
      <Classes />
    </div>
  );
}
