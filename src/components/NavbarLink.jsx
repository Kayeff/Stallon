export default function NavbarLink({ href, title }) {
  return (
    <li className="xl:text-lg">
      <a
        href={href}
        className="text-4xl tracking-tighter hover:text-strong-green transition-colors duration-300 uppercase tablet:capitalize tablet:text-base laptop:text-lg laptop-l:text-xl laptop-4k:text-2xl cursor-pointer"
      >
        {title}
      </a>
    </li>
  );
}
