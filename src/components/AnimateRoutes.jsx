import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy } from "react";
import PageWrapper from "./PageWrapper.jsx";

const Home = lazy(() => import("../pages/Home.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const Branches = lazy(() => import("../pages/Branches.jsx"));
const Pricing = lazy(() => import("../pages/Pricing.jsx"));
const Blog = lazy(() => import("../pages/Blog.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));

export default function AnimateRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" key={location.pathname}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          index={true}
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/branches"
          element={
            <PageWrapper>
              <Branches />
            </PageWrapper>
          }
        />
        <Route
          path="/pricing"
          element={
            <PageWrapper>
              <Pricing />
            </PageWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
