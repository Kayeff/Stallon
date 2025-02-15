export default function Location({ branch }) {
  return (
    <div
      key={branch.id}
      className="h-full w-full flex items-center justify-start p-6 border border-strong-green/20 text-platinium duration-300 laptop:justify-center laptop-l:p-8 laptop-l:px-10"
    >
      <h1 className="text-xl uppercase font-clash-grotesk font-medium text-start mobile-l:text-2xl laptop:text-center laptop-l:text-3xl">
        {branch.name}
      </h1>
    </div>
  );
}
