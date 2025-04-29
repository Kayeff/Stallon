export default function QuickLinks({ title, children }) {
  return (
    <div className="w-full flex items-start justify-start flex-col gap-1.5 cursor-default">
      <h1 className="text-lg tracking-tight text-platinium/80">{title}</h1>
      <div className="gap-1 flex items-start justify-start flex-col tracking-tight">
        {children}
      </div>
    </div>
  );
}
