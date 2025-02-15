import { images } from "../gallery-data";
import Images from "./Images";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 gap-4 tablet-xs:grid-cols-2 laptop:w-[80%] laptop-l:w-[70%] laptop-4k:w-[60%] grid-flow-dense">
      {images.map(({ src, span }, index) => (
        <Images key={index} index={index} src={src} span={span} />
      ))}
    </div>
  );
}
