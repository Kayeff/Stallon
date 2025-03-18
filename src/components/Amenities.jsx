export default function Amenities({ item }) {
  return (
    <div className="w-full flex items-center justify-start flex-col text-platinium border border-strong-green/20">
      <div className="w-full flex items-start justify-center">
        <img
          className="w-full h-80 object-cover will-change-transform"
          src={item.src}
          alt={item.title}
          loading="lazy"
        />
      </div>
      <div className="w-full gap-1 flex justify-center flex-col p-2">
        <h1 className="font-semibold text-2xl uppercase text-strong-green">
          {item.title}
        </h1>
        <p className="w-full font-clash-grotesk text-sm">{item.para}</p>
      </div>
    </div>
  );
}
