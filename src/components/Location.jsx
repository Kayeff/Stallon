export default function Location({ branch }) {
  return (
    <div
      key={branch.id}
      className="h-full flex items-center justify-center py-8 px-3 border-r border-strong-green/20 text-platinium duration-300"
    >
      <h1 className="text-3xl uppercase font-clash-grotesk font-medium text-center">
        {branch.title}
      </h1>
    </div>
  );
}
