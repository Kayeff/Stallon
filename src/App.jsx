import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ReactLenis } from "lenis/react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        smooth: true,
        duration: 1.2, // Adjust for better smoothness
        easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing
        syncTouch: true,
      }}
    >
      <main className="w-full min-h-screen bg-black relative antialiased flex items-center justify-between flex-col">
        <Navbar />
        <Suspense
          fallback={
            <div className="text-white text-center py-10">Loading...</div>
          }
        >
          <Outlet />
        </Suspense>
        <Footer />
      </main>
    </ReactLenis>
  );
}
