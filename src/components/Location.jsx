export default function Location({ branch }) {
  return (
    <div className="flex items-center justify-center text-center p-10 text-platinium border-r border border-strong-green/20">
      <h1 className="text-3xl uppercase font-medium">{branch.name}</h1>
    </div>
  );
}
