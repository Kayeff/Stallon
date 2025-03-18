export default function Images({ img }) {
  return (
    <img
      className="h-50 w-full object-cover will-change-transform"
      src={img.src}
      alt={`Gym ${img.id}}`}
      loading="lazy"
    />
  );
}
