import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ReactLenis } from "lenis/react";
import { Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const location = useLocation();

  return (
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
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="text-white text-center py-10">Loading...</div>
            }
          >
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full"
            >
              <Outlet />
            </motion.div>
          </Suspense>
        </AnimatePresence>
        <Footer />
      </main>
    </ReactLenis>
  );
}
