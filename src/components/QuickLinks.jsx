export default function QuickLinks({ title, children }) {
  return (
    <div className="flex items-center justify-start flex-col font-clash-grotesk text-platinium cursor-default">
      <div className="space-y-4">
        <h1 className="uppercase font-medium tracking-wide text-platinium">
          {title}
        </h1>
        <div className="space-y-2 flex items-start justify-start flex-col font-medium tracking-wide">
          {children}
        </div>
      </div>
    </div>
  );
}
