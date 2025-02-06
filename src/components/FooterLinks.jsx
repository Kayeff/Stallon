export default function FooterLinks({ Icon, title, href }) {
  return (
    <a
      href={href}
      className="flex items-center justify-start space-x-2 text-platinium font-clash-grotesk group"
    >
      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-strong-green">
        <Icon size={20} className="text-black" />
      </span>
      <h1 className="group-hover:text-strong-green group-hover:underline duration-300">
        {title}
      </h1>
    </a>
  );
}
