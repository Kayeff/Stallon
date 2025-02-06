import SpanText from "./SpanText";

const branches = [
  { id: "b1", title: "Ghod Dod Road" },
  { id: "b2", title: "Mota Varacha" },
  { id: "b3", title: "VIP Road" },
  { id: "b4", title: "Adajan" },
  { id: "b5", title: "Vesu" },
];

export default function LocationSection() {
  return (
    <div className="flex items-center justify-center cursor-default border-y border-strong-green/20">
      <div className="w-[90%] flex items-center justify-center ">
        <div className="flex items-center justify-end px-10">
          <h1 className="text-platinium text-3xl uppercase font-clash-grotesk font-medium text-end">
            Our Locations in <SpanText text="Surat" />
          </h1>
        </div>
        <div className="w-[75%] grid grid-cols-5 border-l border-strong-green/20">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="h-full flex items-center justify-center py-8 px-3 border-r border-strong-green/20 text-platinium duration-300"
            >
              <h1 className="text-3xl uppercase font-clash-grotesk font-medium text-center">
                {branch.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
