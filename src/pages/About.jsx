import founder from "../assets/founder.webp";
import Heading from "../components/Heading";

export default function About() {
  return (
    <main className="w-full min-h-screen flex items-center justify-start flex-col py-10">
      <div className="w-[90%] text-strong-green cursor-default flex items-center justify-center flex-col space-y-4">
        <div className="w-full flex items-center justify-center flex-col">
          <Heading title={"About"} spanText={"Us"} />
        </div>
        <div className="w-[80%] text-platinium tracking-wide grid grid-cols-2 gap-10 py-4">
          <div className="space-y-3">
            <p className="text-xl font-medium font-clash-grotesk">
              Founded by Mr. Percy Surty and Mrs. Kashmira Surty, Stallon Gym
              began its journey in 1995 in Navsari and expanded to Surat in
              2008, with branches in Vesu, GhodDod Road, Althan, Adajan, and
              Varacha. From the very beginning, our mission has been to provide
              world-class fitness solutions under one roof, helping individuals
              transform not just their bodies but their lives.
            </p>
            <p className="text-xl font-medium font-clash-grotesk">
              Our tagline{" "}
              <span className="text-strong-green">
                A GOOD COACH CAN CHANGE YOUR BODY, A GREAT COACH CAN CHANGE YOUR
                LIFE
              </span>{" "}
              embodies our commitment to a holistic approach to health and
              fitness. With state-of-the-art equipment, expert trainers, and
              innovative programs, we are dedicated to delivering measurable
              results that empower our members to reach their full potential.
            </p>
            <p className="text-xl font-medium font-clash-grotesk">
              At Stallon Gym, we don’t just build strength, we build confidence,
              endurance, and a community driven by the passion for fitness. Join
              us on the journey to a fitter, healthier India!
            </p>
            <p className="text-end font-clash-grotesk text-xl font-medium pt-2">
              - Thank you , Percy & Kashmira
            </p>
          </div>
          <img
            className="w-full h-[55vh] object-cover object-top"
            loading="lazy"
            src={founder}
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-10">
        <a className="px-6 py-3 border border-strong-green bg-strong-green text-black cursor-pointer hover:bg-strong-green/15 hover:text-platinium transition-all duration-300 font-clash-grotesk font-medium">
          Explore Our Branches
        </a>
      </div>
    </main>
  );
}
