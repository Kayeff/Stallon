import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ReactLenis } from "lenis/react";
import ScrollToTop from "./components/ScrollToTop";
import AnimateRoutes from "./components/AnimateRoutes";

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        smooth: true,
        duration: 0.7,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        autoRaf: true,
      }}
    >
      <main className="w-full min-h-screen bg-black relative flex items-center justify-between flex-col">
        <ScrollToTop />
        <Navbar />
        <AnimateRoutes />
        <Footer />
      </main>
    </ReactLenis>
  );
}
