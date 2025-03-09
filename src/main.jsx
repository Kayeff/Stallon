import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Branches = lazy(() => import("./pages/Branches.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

const router = createHashRouter([
  {
    path: "/",
    element: <App />, // App is the layout
    children: [
      { index: true, element: <Home /> }, // Default page
      { path: "about", element: <About /> },
      { path: "branches", element: <Branches /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
