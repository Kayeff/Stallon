export default function Images({ img }) {
  return (
    <img
      className="w-full h-full laptop:h-72 object-cover will-change-transform"
      src={img.src}
      alt="Gym Showcase"
    />
  );
}
