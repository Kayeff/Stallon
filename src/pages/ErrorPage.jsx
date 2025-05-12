import { Link } from "react-router-dom";
import { RiArrowLeftLongLine } from "@remixicon/react";

export default function ErrorPage() {
  return (
    <main className="w-full min-h-screen font-inter bg-black text-platinium">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="tracking-tighter text-5xl">404</h1>
          <h1 className="tracking-tighter text-3xl">
            The page you are looking for does not exists.
            <span className="text-strong-green flex items-center gap-2">
              <RiArrowLeftLongLine />
              <Link to="">Go back home</Link>
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
