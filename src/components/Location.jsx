export default function Location({ branch }) {
  return (
    <div className="h-full w-full flex items-center justify-center text-center p-4 border border-strong-green/20 text-platinium duration-300 nth-[5]:col-span-2">
      <span className="text-xl uppercase font-clash-grotesk font-medium">
        {branch.name}
      </span>
    </div>
  );
}
