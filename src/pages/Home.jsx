import { lazy } from "react";

import Hero from "../components/Hero";
import LocationSection from "../components/LocationSection";
const ProgramSection = lazy(() => import("../components/ProgramSection"));
const AmenitiesSection = lazy(() => import("../components/AmenitiesSection"));
const GallerySection = lazy(() => import("../components/GallerySection"));
const TestimonialSection = lazy(() =>
  import("../components/TestimonialSection")
);

export default function Home() {
  return (
    <>
      <Hero />
      <LocationSection />
      <ProgramSection />
      <AmenitiesSection />
      <GallerySection />
      {/* <TestimonialSection /> */}
    </>
  );
}
