export default function Images({ index, span, src }) {
  return (
    <div className={`${span}`}>
      <img
        className="w-full h-80 laptop:h-96 object-cover will-change-transform translate-z-0 laptop-4k:h-[30rem]"
        src={src}
        alt={`Gym ${index + 1}`}
        loading="lazy"
      />
    </div>
  );
}
