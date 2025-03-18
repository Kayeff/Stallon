import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import QuickLinks from "./QuickLinks";

export default function Footer() {
  return (
    <footer className="w-full flex items-start justify-center flex-col gap-10 border-t border-strong-green/20 laptop:items-center">
      <div className="laptop:w-[90%] w-full grid grid-cols-1 tablet:grid-cols-2 gap-5 p-4">
        <div className="flex items-center justify-start flex-col gap-4 tablet-xs:items-start">
          <NavLink
            to="/"
            className="hover:text-strong-green duration-300 flex items-center justify-center tablet:justify-start w-full"
          >
            <img
              className="h-12 object-cover laptop:h-20 laptop-4k:h-32"
              src={logo}
              alt=""
              loading="lazy"
            />
          </NavLink>
          <QuickLinks title="Connect">
            <a
              className="hover:text-strong-green duration-300 transition-colors"
              href="tel:7096004208"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-clash-grotesk">+91 7096004208</span>
            </a>
            <a
              className="font-medium hover:text-strong-green duration-300 transition-colors"
              href="mailto:stallongym111@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-clash-grotesk">
                stallongym111@gmail.com
              </span>
            </a>
          </QuickLinks>
        </div>
        <div className="w-full grid grid-cols-1 tablet:grid-cols-3 gap-4 sm:gap-8">
          <QuickLinks title="Quick Links">
            <NavLink
              to="/about"
              className="hover:text-strong-green duration-300"
            >
              About
            </NavLink>
            <NavLink
              to="/branches"
              className="hover:text-strong-green duration-300"
            >
              Branches
            </NavLink>
            <NavLink
              to="/membership"
              className="hover:text-strong-green duration-300"
            >
              Membership
            </NavLink>
            <NavLink
              to="/blog"
              className="hover:text-strong-green duration-300"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-strong-green duration-300"
            >
              Contact
            </NavLink>
          </QuickLinks>
          <QuickLinks title="Branches">
            <NavLink
              to="/branches"
              className="hover:text-strong-green duration-300"
            >
              Vesu
            </NavLink>
            <NavLink
              to="/branches"
              className="hover:text-strong-green duration-300"
            >
              Ghod Dod Road
            </NavLink>
            <NavLink
              to="/branches"
              className="hover:text-strong-green duration-300"
            >
              Adajan
            </NavLink>
            <NavLink
              to="/branches"
              className="hover:text-strong-green duration-300"
            >
              VIP Road
            </NavLink>
            <NavLink
              to="/branches"
              className="hover:text-strong-green duration-300"
            >
              Mota Varacha
            </NavLink>
          </QuickLinks>
          <QuickLinks title="Socials">
            <div className="flex items-start justify-center flex-col space-y-1">
              <a
                className="hover:text-strong-green duration-300 transition-colors"
                href="https://www.instagram.com/stallon_gym_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="hover:text-strong-green duration-300 transition-colors"
                href="https://www.facebook.com/stallongymindia.mediablock.india/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                className="hover:text-strong-green duration-300 transition-colors"
                href="https://www.youtube.com/@StallonGym/featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </QuickLinks>
        </div>
      </div>
      <div className="bg-strong-green w-full px-6 py-4 flex items-center justify-center">
        <div className="laptop:w-[90%] w-full flex items-center justify-center flex-col tablet-xs:flex-row space-y-1 cursor-default xs:space-y-0 tablet-xs:justify-between">
          <h1 className="font-clash-grotesk text-black font-medium">
            ©2025 Stallon Gym
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <h1 className="font-clash-grotesk text-black font-medium text-sm laptop:text-base">
              Privacy Policy
            </h1>
            <h1 className="font-clash-grotesk text-black font-medium text-sm laptop:text-base">
              Cookies
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
