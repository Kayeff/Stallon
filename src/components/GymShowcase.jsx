import Images from "./Images";

export default function GymShowcase({ branch }) {
  return (
    <div className="w-full flex justify-center items-center flex-col border border-strong-green/20">
      <div className="w-full flex items-center justify-start flex-col cursor-default p-4 gap-4">
        <h1 className="font-semibold uppercase font-clash-grotesk text-platinium text-2xl laptop:text-3xl">
          Gym Showcase
        </h1>
        <div className="grid grid-cols-1 gap-2 tablet:grid-cols-2 laptop:grid-cols-3">
          {branch.showcase.map((item, index) => (
            <Images key={`branchshowcase-${index + 1}`} img={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
