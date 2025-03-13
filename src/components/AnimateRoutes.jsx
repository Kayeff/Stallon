import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageWrapper from "./PageWrapper.jsx";

const Home = lazy(() => import("../pages/Home.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const Branches = lazy(() => import("../pages/Branches.jsx"));
const Pricing = lazy(() => import("../pages/Pricing.jsx"));
const Blog = lazy(() => import("../pages/Blog.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));

function NotFound() {
  return <h1 className="text-platinium">404 not found</h1>;
}

export default function AnimateRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          index={true}
          element={
            <Suspense>
              <PageWrapper>
                <Home />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/about"
          element={
            <Suspense>
              <PageWrapper>
                <About />
              </PageWrapper>
            </Suspense>
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
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
