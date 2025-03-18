import calcStars from "../calcStars";

export default function Testimonial({ item }) {
  const stars = calcStars(item.stars);

  return (
    <div className="w-full font-clash-grotesk p-4 text-platinium flex items-start justify-between flex-col gap-6 gradient-background border border-strong-green/20 h-96">
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex items-start justify-start">
          {stars.map((star, index) => (
            <img className="h-6" key={index} src={star} />
          ))}
        </div>
        <h1 className="text-base laptop:text-xl laptop-4k:text-2xl">
          "{item.para}"
        </h1>
      </div>
      <div className="w-full flex items-center justify-start gap-3">
        <img className="h-10 w-10 rounded-full" src={item.imgAdd} alt="" />
        <div className="flex items-start justify-center flex-col">
          <h1 className="font-medium text-strong-green text-lg leading-5">
            {item.name}
          </h1>
          <p className="text-platinium/70 tracking-wider text-sm">
            {item.time}
          </p>
        </div>
      </div>
    </div>
  );
}
