import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ReactLenis } from "lenis/react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function App() {
  return (
    <ReactLenis root>
      <main className="w-full min-h-screen bg-black relative">
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
