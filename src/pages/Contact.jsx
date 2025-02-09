import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "@remixicon/react";
import Heading from "../components/Heading";
import SmallSection from "../components/SmallSection";
import { branches } from "../branches";
import LocationLink from "../components/LocationLink";
import Form from "../components/Form";

export default function Contact() {
  return (
    <main className="w-full min-h-screen flex items-center justify-start flex-col py-10 space-y-4 font-clash-grotesk text-platinium cursor-default">
      <div className="w-[90%] grid grid-cols-2 gap-8">
        <div className="flex items-start justify-start flex-col space-y-4 p-4">
          <div className="w-[90%] flex items-start justify-center flex-col">
            <Heading title={"Get in"} spanText={"Touch"} />
          </div>
          <p className="text-xl tracking-wide">
            We're here to help you on your fitness journey! Whether you have
            questions about our memberships, training programs, or facilities,
            feel free to reach out.
          </p>
          <div className="w-full space-y-4">
            <SmallSection
              title="Our Branches"
              className="w-full grid grid-cols-3 gap-2 px-2"
            >
              {branches.map((branch) => {
                return <LocationLink branch={branch} key={branch.id} />;
              })}
            </SmallSection>
            <div className="w-full flex items-start justify-start gap-8">
              <SmallSection title="Phone or Mail us">
                <div className="flex items-start justify-start flex-col px-2 space-y-1">
                  <a
                    className="hover:text-strong-green duration-300 transition-colors"
                    href="tel:7096004208"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-clash-grotesk font-normal">
                      +91 7096004208
                    </span>
                  </a>
                  <a
                    className="font-medium hover:text-strong-green duration-300 transition-colors"
                    href="mailto:stallongym111@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-clash-grotesk font-normal">
                      stallongym111@gmail.com
                    </span>
                  </a>
                </div>
              </SmallSection>
              <SmallSection title="Follow us">
                <div className="flex items-start justify-start space-x-3">
                  <a
                    className="hover:text-strong-green duration-300 transition-colors"
                    href="https://www.instagram.com/stallon_gym_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiInstagramFill />
                  </a>
                  <a
                    className="hover:text-strong-green duration-300 transition-colors"
                    href="https://www.facebook.com/stallongymindia.mediablock.india/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiFacebookCircleFill />
                  </a>
                  <a
                    className="hover:text-strong-green duration-300 transition-colors"
                    href="https://www.youtube.com/@StallonGym/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiYoutubeFill />
                  </a>
                </div>
              </SmallSection>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-start flex-col space-y-8 p-4">
          <div className="w-full space-y-4">
            <Heading title="Send us a" spanText="Message" />
            <p className="text-xl tracking-wide">
              Have a question? Fill out the form below, and we'll get back to
              you as soon as possible!
            </p>
          </div>
          <Form />
        </div>
      </div>
    </main>
  );
}
