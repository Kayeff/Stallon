import { images } from "../gallery-data";

export default function Gallery() {
  return (
    <div className="w-[90%] grid grid-cols-4 gap-4 grid-flow-dense">
      {images.map(({ src, span }, index) => (
        <div key={index} className={`${span}`}>
          <img
            className="w-full h-96 object-cover will-change-transform translate-z-0"
            src={src}
            alt={`Gym ${index + 1}`}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
