export default function Location({ branch }) {
  return (
    <div className="h-full w-full flex items-center justify-center text-center p-6 laptop:py-10 border border-strong-green/20 text-platinium duration-300">
      <h1 className="text-xl laptop:text-2xl uppercase font-clash-grotesk font-medium">
        {branch.name}
      </h1>
    </div>
  );
}
