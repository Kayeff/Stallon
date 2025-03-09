export default function Images({ index, src }) {
  return (
    <img
      className="w-full h-full object-cover will-change-transform"
      src={src}
      alt={`Gym ${index + 1}`}
      loading="lazy"
    />
  );
}
