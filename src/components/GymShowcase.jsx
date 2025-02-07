export default function GymShowcase({ showcase }) {
  return (
    <div className="w-full flex justify-center items-center flex-col border border-strong-green/20 duration-300 transition-all">
      <div className="w-full flex items-center justify-center flex-col p-8 space-y-8 cursor-default">
        <h1 className="text-4xl uppercase font-semibold">Gym Showcase</h1>
        <div className="w-full grid grid-cols-3 gap-2">
          {showcase.map(({ src, span }, index) => (
            <img
              key={index}
              className={`w-full h-96 object-cover will-change-transform translate-z-0 ${span}`}
              src={src}
              alt={`Gym ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
