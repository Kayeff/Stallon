export default function Link({ title }) {
  return (
    <li className="">
      <a
        className="text-lg font-medium hover:text-strong-green transition-colors duration-300 h-full py-1"
        href=""
      >
        {title}
      </a>
    </li>
  );
}
