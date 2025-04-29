import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";

export default function App() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-[100lvh] bg-black text-platinium relative flex items-center flex-col font-inter">
        <Navbar />
        <Home />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
