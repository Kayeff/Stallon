export default function QuickLinks({ title, children }) {
  return (
    <div className="flex items-start justify-start flex-col font-clash-grotesk text-platinium cursor-default w-full">
      <div className="space-y-1 lg:space-y-2">
        <h1 className="uppercase font-medium tracking-wide text-strong-green/80 text-sm laptop:text-base laptop-l:text-lg laptop-4k:text-2xl">
          {title}
        </h1>
        <div className="space-y-0.5 flex items-start justify-start flex-col tracking-wide laptop:text-base text-sm laptop-l:text-lg laptop-4k:text-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
