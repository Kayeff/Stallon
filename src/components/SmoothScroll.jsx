import { ReactLenis } from "lenis/react";
import { useRef } from "react";

function SmoothScroll({ children }) {
  const lenisRef = useRef();

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1.2,
        normalizeWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
