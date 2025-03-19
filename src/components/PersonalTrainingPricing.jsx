import PersonalTraining from "../components/PersonalTraining";
import { pt_data } from "../personal_training";

export default function PersonalTrainingPricing() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="text-2xl uppercase font-semibold">
          Personal Training Plans
        </h1>
        <p className="text-sm">
          Take your fitness to the next level with expert guidance
        </p>
      </div>
      <div className="w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-2">
        {pt_data.map((data) => (
          <PersonalTraining
            key={`personal-training-plan-${data.id}`}
            plan={data}
          />
        ))}
      </div>
    </div>
  );
}
