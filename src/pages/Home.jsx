import { lazy, Suspense } from "react";

import Hero from "../components/Hero";
import LocationSection from "../components/LocationSection";
const ProgramSection = lazy(() => import("../components/ProgramSection"));
const AmenitiesSection = lazy(() => import("../components/AmenitiesSection"));
const GallerySection = lazy(() => import("../components/GallerySection"));
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start gap-20 font-clash-grotesk overflow-x-hidden p-4">
      <Hero />
      <LocationSection />
      <Suspense fallback={<div>Loading</div>}>
        <ProgramSection />
        <AmenitiesSection />
        <GallerySection />
      </Suspense>
      <TestimonialSection />
    </main>
  );
}
