export default function LocationLink({ branch }) {
  return (
    <div key={branch.id} className="flex items-start justify-start flex-col">
      <h1 className="font-medium text-strong-green">
        <span className="text-platinium">Stallon</span> {branch.name}
      </h1>
      <a
        href={branch.link}
        target="_blank"
        className="font-medium space-x-1 hover:underline"
      >
        <span className="font-normal">{branch.address}</span>
      </a>
    </div>
  );
}
