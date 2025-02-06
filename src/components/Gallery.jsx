import { images } from "../gallery-data";

export default function Gallery() {
  return (
    <div className="grid grid-cols-4 gap-4 grid-flow-dense">
      {images.map(({ src, span }, index) => (
        <div key={index} className={`${span} overflow-hidden`}>
          <img
            className="w-full h-96 object-cover"
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
