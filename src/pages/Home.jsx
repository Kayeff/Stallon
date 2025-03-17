import { lazy } from "react";
import Section from "../components/Section";

const Hero = lazy(() => import("../components/Hero"));
const ProgramSection = lazy(() => import("../components/ProgramSection"));
const AmenitiesSection = lazy(() => import("../components/AmenitiesSection"));
const GallerySection = lazy(() => import("../components/GallerySection"));
const TestimonialSection = lazy(() =>
  import("../components/TestimonialSection")
);

export default function Home() {
  return (
    <>
      <Section className="laptop:py-10 max-laptop:py-5">
        <Hero />
      </Section>
      <Section className="min-h-screen py-10">
        <ProgramSection />
      </Section>
      <Section className="min-h-screen py-10">
        <AmenitiesSection />
      </Section>
      <Section className="min-h-screen py-10">
        <GallerySection />
      </Section>
      <Section className="min-h-screen flex items-center justify-center">
        <TestimonialSection />
      </Section>
    </>
  );
}
