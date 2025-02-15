import calcStars from "../calcStars";

export default function Testimonial({ item }) {
  const stars = calcStars(item.stars);

  return (
    <div className="w-[100%] font-clash-grotesk px-8 py-10 text-platinium flex items-start justify-between flex-col space-y-6 gradient-background border border-strong-green/20 h-96">
      <div className="w-full space-y-1">
        <div className="w-full flex items-start justify-start -space-x-1">
          {stars.map((star, index) => (
            <img className="h-6" key={index} src={star} />
          ))}
        </div>
        <h1 className="text-base laptop:text-xl laptop-4k:text-2xl">
          "{item.para}"
        </h1>
      </div>
      <div className="w-full flex items-center justify-start space-x-3">
        <div>
          <img
            className="h-10 w-10 rounded-full laptop-4k:h-16 laptop-4k:w-16"
            src={item.imgAdd}
            alt=""
          />
        </div>
        <div className="flex items-start justify-center flex-col -space-y-1">
          <h1 className="font-medium text-strong-green text-lg laptop:text-xl laptop-4k:text-2xl">
            {item.name}
          </h1>
          <p className="text-platinium/70 tracking-wider text-sm laptop-4k:text-xl">
            {item.time}
          </p>
        </div>
      </div>
    </div>
  );
}
