import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { ReactLenis } from "lenis/react";
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/Hero"));
const LocationSection = lazy(() => import("./components/LocationSection"));
const ClassesSection = lazy(() => import("./components/ClassesSection"));
const GallerySection = lazy(() => import("./components/GallerySection"));
const AmenitiesSection = lazy(() => import("./components/AmenitiesSection"));

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
          <Section className="py-10 flex items-start justify-center">
            <Hero />
          </Section>
          <Section className="border-y border-strong-green/20">
            <LocationSection />
          </Section>
          <Section className="py-20 border-b border-strong-green/20">
            <AmenitiesSection />
          </Section>
          <Section className="py-20 border-b border-strong-green/20">
            <ClassesSection />
          </Section>
          <Section className="py-20 border-b border-strong-green/20">
            <GallerySection />
          </Section>
        </Suspense>
        <Footer />
      </main>
    </ReactLenis>
  );
}
