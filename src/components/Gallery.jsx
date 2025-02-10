import { images } from "../gallery-data";
import Images from "./Images";

export default function Gallery() {
  return (
    <div className="w-[90%] grid grid-cols-4 gap-4 grid-flow-dense">
      {images.map(({ src, span }, index) => (
        <Images key={index} index={index} src={src} span={span} />
      ))}
    </div>
  );
}
