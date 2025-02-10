export default function Images({ index, span, src }) {
  return (
    <div className={`${span}`}>
      <img
        className="w-full h-96 object-cover will-change-transform translate-z-0"
        src={src}
        alt={`Gym ${index + 1}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
