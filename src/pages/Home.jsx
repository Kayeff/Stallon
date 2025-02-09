import { lazy } from "react";
import Section from "../components/Section";

const Hero = lazy(() => import("../components/Hero"));
const LocationSection = lazy(() => import("../components/LocationSection"));
const ProgramSection = lazy(() => import("../components/ProgramSection"));
const GallerySection = lazy(() => import("../components/GallerySection"));
const AmenitiesSection = lazy(() => import("../components/AmenitiesSection"));
const TestimonialSection = lazy(() =>
  import("../components/TestimonialSection")
);

export default function Home() {
  return (
    <>
      <Section className="py-10 flex items-start justify-center border-0">
        <Hero />
      </Section>
      <Section className="border-0">
        <LocationSection />
      </Section>
      <Section>
        <ProgramSection />
      </Section>
      <Section>
        <AmenitiesSection />
      </Section>
      <Section>
        <GallerySection />
      </Section>
      <Section>
        <TestimonialSection />
      </Section>
    </>
  );
}
