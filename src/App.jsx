import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ReactLenis } from "lenis/react";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import AnimateRoutes from "./components/AnimateRoutes";

export default function App() {
  return (
    <Router>
      <ReactLenis
        root
        options={{
          smooth: true,
          duration: 0.4,
          easing: (t) => 1 - Math.pow(1 - t, 2),
          syncTouch: true,
          smoothTouch: true,
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
    </Router>
  );
}
