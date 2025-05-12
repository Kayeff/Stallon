import QuickLinks from "./QuickLinks";
import Logo from "./Logo";
import FooterCopyright from "./FooterCopyright";
import { branches } from "../branches";
import { navLink } from "../navbar_links";
import { Link } from "react-router-dom";

function FooterLinks({ href, title, security }) {
  return (
    <a
      className="hover:text-strong-green hover:underline tracking-tight"
      href={href}
      target="_blank"
      rel={security && "noopener noreferrer"}
    >
      {title}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="w-full flex items-start justify-center flex-col gap-10 border-t border-strong-green/20 laptop:items-center font-inter">
      <div className="laptop:w-[90%] w-full grid grid-cols-1 tablet:grid-cols-2 gap-5 p-5">
        <div className="flex items-center justify-start flex-col gap-4 tablet-xs:items-start">
          <Logo />
          <QuickLinks title="Connect">
            <FooterLinks
              title="+91 7096004208"
              href="tel:7096004208"
              security
            />
            <FooterLinks
              title="stallongym111@gmail.com"
              href="mailto:stallongym111@gmail.com"
              security
            />
          </QuickLinks>
        </div>
        <div className="w-full grid grid-cols-1 tablet:grid-cols-3 gap-4 sm:gap-8">
          <QuickLinks title="Quick Links">
            <ul>
              {navLink.map((link) => (
                <li key={link.linkTitle}>
                  <Link
                    className="hover:underline hover:text-strong-green"
                    to={link.to}
                  >
                    {link.linkTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </QuickLinks>
          <QuickLinks title="Our Branches">
            {branches.map((branch) => (
              <FooterLinks key={branch.id} title={branch.name} href="#" />
            ))}
          </QuickLinks>
          <QuickLinks title="Socials">
            <FooterLinks
              title="Instagram"
              href="https://www.instagram.com/stallon_gym_official/"
              security
            />
            <FooterLinks
              title="Facebook"
              href="https://www.facebook.com/stallongymindia.mediablock.india/"
              security
            />
            <FooterLinks
              title="YouTube"
              href="https://www.youtube.com/@StallonGym/featured"
              security
            />
          </QuickLinks>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}
