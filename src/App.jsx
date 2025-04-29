import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";

export default function App() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-[100lvh] bg-black text-platinium relative flex items-center flex-col font-inter">
        <Navbar />
        <div className="w-full flex flex-col gap-20 p-4">
          <Home />
        </div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}
