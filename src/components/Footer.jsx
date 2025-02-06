import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import QuickLinks from "./QuickLinks";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "@remixicon/react";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center flex-col space-y-10">
      <div className="w-[90%] grid grid-cols-2 py-10">
        <div className="flex items-start justify-start flex-col space-y-4">
          <img className="h-24 object-cover" src={logo} alt="" />
        </div>
        <div className="grid grid-cols-3">
          <QuickLinks title="Connect">
            <a
              className="font-medium hover:text-strong-green duration-300 transition-colors"
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

          <QuickLinks title="Socials">
            <div className="flex items-start justify-center space-x-2">
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
          </QuickLinks>
        </div>
      </div>
      <div className="border-t border-strong-green/20 w-[90%] py-4">
        <div className="flex items-center justify-between cursor-default">
          <h1 className="font-clash-grotesk text-platinium">
            ©2025 Stallon Gym.
          </h1>
        </div>
      </div>
    </footer>
  );
}
