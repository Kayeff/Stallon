export default function Amenities({ item }) {
  return (
    <div className="w-full flex items-center justify-start flex-col text-platinium border border-strong-green/20 ">
      <div className="w-full flex items-start justify-center">
        <img className="w-full h-80 object-cover" src={item.src} alt="" />
      </div>
      <div className="w-full space-y-2 flex items-start justify-center flex-col p-8">
        <h1 className="font-clash-grotesk font-semibold text-4xl uppercase text-strong-green">
          {item.title}
        </h1>
        <p className="w-full font-clash-grotesk font-medium text-lg">
          {item.para}
        </p>
      </div>
    </div>
  );
}
