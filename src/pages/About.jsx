import founder from "../assets/founder.webp";
import Para from "../components/Para";

export default function About() {
  return (
    <main className="w-full h-[calc(100vh-96px)] flex items-center justify-center flex-col gap-10 font-inter p-4">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-20 text-platinium laptop:w-[70%]">
        <img
          className="w-full h-80 object-cover border border-platinium/20 justify-self-center tablet:justify-self-end mobile-l:w-96 laptop:w-[100%] laptop:h-full"
          src={founder}
          alt="founders-img"
          loading="lazy"
        />
        <div className="w-full flex flex-col justify-end items-start gap-6">
          <div className="w-full flex items-center justify-between">
            <p className="tracking-tighter uppercase">About</p>
            <p className="tracking-tighter uppercase">Stallon Gym</p>
          </div>
          <div className="flex flex-col gap-2">
            <Para
              text={
                <>
                  Founded by{" "}
                  <span className="text-strong-green">Mr. Percy Surty</span> and{" "}
                  <span className="text-strong-green">Mrs. Kashmira Surty</span>
                  , Stallon Gym began its journey in 1995 in Navsari and
                  expanded to Surat in 2008, with branches in Vesu, GhodDod
                  Road, Althan, Adajan, and Varacha. From the very beginning,
                  our mission has been to provide world-class fitness solutions
                  under one roof, helping individuals transform not just their
                  bodies but their lives.
                </>
              }
            />
            <Para
              text="At Stallon Gym, we don’t just build strength, we build confidence,
              endurance, and a community driven by the passion for fitness. Join
              us on the journey to a fitter, healthier India!"
            />
          </div>
          <div className="w-full flex items-center justify-end">
            <p className="tracking-tighter uppercase">-Thank You</p>
          </div>
        </div>
        <div className="w-full">
          <Para
            text={
              <>
                With state-of-the-art equipment, expert trainers, and innovative
                programs, we are dedicated to delivering measurable results that
                empower our members to reach their full potential.
              </>
            }
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-[1px] bg-platinium/50" />
        </div>
      </div>
    </main>
  );
}
