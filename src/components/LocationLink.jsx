export default function LocationLink({ branch }) {
  return (
    <div className="flex items-start justify-start flex-col">
      <h1 className="font-medium text-strong-green uppercase">
        <span className="text-platinium">Stallon</span> {branch.name}
      </h1>
      <a
        href={branch.link}
        target="_blank"
        className="font-medium gap-1 hover:underline"
      >
        <span className="font-normal">{branch.address}</span>
      </a>
    </div>
  );
}
