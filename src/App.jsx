import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import { AnimatePresence } from "motion/react";
import PageTransition from "./components/PageTransition";

export default function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <main className="w-full min-h-[100svh] bg-black text-platinium relative flex items-center flex-col font-inter">
        <Navbar />
        <AnimatePresence mode="wait" key={location.pathname}>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
