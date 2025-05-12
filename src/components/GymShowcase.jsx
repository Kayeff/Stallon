export default function GymShowcase({ branch }) {
  return (
    <div className="w-full flex justify-center items-center flex-col border border-strong-green/20">
      <div className="w-full flex items-center justify-start flex-col cursor-default p-4 gap-4">
        <h1 className="font-medium uppercase font-clash-grotesk text-platinium text-2xl laptop:text-4xl">
          Gym
        </h1>
        <div className="grid grid-cols-1 gap-2 tablet:grid-cols-2 laptop:grid-cols-3"></div>
      </div>
    </div>
  );
}
