export default function Images({ img }) {
  return (
    <img
      className="w-full h-96 object-cover"
      src={img.src}
      alt="gym_img"
      loading="lazy"
      rel="preload"
    />
  );
}
