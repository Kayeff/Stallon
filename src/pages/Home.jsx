import { lazy } from "react";

import Hero from "../components/Hero";
import LocationSection from "../components/LocationSection";
import Contact from "./Contact";
const AboutGym = lazy(() => import("../components/AboutGym"));
const ProgramSection = lazy(() => import("../components/ProgramSection"));
const AmenitiesSection = lazy(() => import("../components/AmenitiesSection"));
const TestimonialSection = lazy(() =>
  import("../components/TestimonialSection")
);

export default function Home() {
  return (
    <>
      <Hero />
      <AboutGym />
      <LocationSection />
      <ProgramSection />
      <AmenitiesSection />
      <TestimonialSection />
      <Contact />
    </>
  );
}
