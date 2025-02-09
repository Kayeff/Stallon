import fullSvg from "./assets/rating-5.svg";
import halfSvg from "./assets/rating-half.svg";

export default function calcStars(noOfStars) {
  let stars = [];
  if (noOfStars === 5) {
    for (let i = 0; i < 5; i++) {
      stars.push(fullSvg);
    }
  } else if (noOfStars === 4.5) {
    for (let i = 0; i < 4; i++) {
      stars.push(fullSvg);
    }
    stars.push(halfSvg);
  }

  return stars;
}
