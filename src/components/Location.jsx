export default function Location({ branch }) {
  return (
    <a
      href={branch.link}
      className="w-full flex items-center justify-center text-center p-5 py-10 text-platinium border-r border-strong-green/20 nth-[5]:border-0"
      target="_blank"
    >
      <h1 className="text-3xl uppercase font-bold tracking-tight">
        {branch.name}
      </h1>
    </a>
  );
}
