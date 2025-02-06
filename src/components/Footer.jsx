import { RiMailFill, RiPhoneFill } from "@remixicon/react";
import logo from "../assets/logo.webp";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-strong-green/20 flex items-center justify-center">
      <div className="w-[90%] grid grid-cols-2">
        <div className="flex items-start justify-start flex-col">
          <img className="h-24 object-cover" src={logo} alt="" />
          <div className="w-full py-4 px-2 flex items-start justify-start flex-col gap-2">
            <FooterLinks href={"#"} Icon={RiPhoneFill} title="+91 7096004208" />
            <FooterLinks
              href={"#"}
              Icon={RiMailFill}
              title="stallongym111@gmail.com"
            />
          </div>
        </div>
        <div className="border border-white grid grid-cols-3">
          <div></div>
        </div>
      </div>
    </footer>
  );
}
