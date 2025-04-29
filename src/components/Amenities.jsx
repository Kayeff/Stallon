export default function Amenities({ item }) {
  return (
    <div className="w-full flex items-center justify-start flex-col text-platinium border border-strong-green/20">
      <div className="w-full flex items-start justify-center">
        <img
          className="w-full h-80 object-cover"
          src={item.src}
          alt={item.title}
          loading="lazy"
          rel="preload"
        />
      </div>
      <div className="w-full gap-1 flex justify-center flex-col p-2">
        <h1 className="font-medium tracking-tight text-3xl text-strong-green">
          {item.title}
        </h1>
        <p className="tracking-tight text-platinium/90">{item.para}</p>
      </div>
    </div>
  );
}
