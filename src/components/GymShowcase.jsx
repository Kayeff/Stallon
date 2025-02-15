import Images from "./Images";

export default function GymShowcase({ showcase }) {
  return (
    <div className="w-full flex justify-center items-center flex-col border border-strong-green/20 duration-300 transition-all">
      <div className="w-full flex items-center justify-start flex-col cursor-default p-4 space-y-8 laptop:py-10">
        <h1 className="max-mobile-l:text-2xl font-semibold uppercase font-clash-grotesk text-platinium text-3xl max-tablet:text-3xl laptop:text-3xl laptop-l:text-4xl max-laptop-l:text-4xl laptop-4k:text-5xl">
          Gym Showcase
        </h1>
        <div className="grid grid-cols-1 gap-4 tablet-xs:grid-cols-2 laptop:w-[100%] laptop-l:w-[90%] laptop-4k:w-[80%]">
          {showcase.map(({ src, span }, index) => (
            <Images key={index} index={index} src={src} span={span} />
          ))}
        </div>
      </div>
    </div>
  );
}
