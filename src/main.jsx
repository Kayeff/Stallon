import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Branches from "./pages/Branches.jsx";
import Blog from "./pages/Blog.jsx";
import Pricing from "./pages/Pricing.jsx";

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
    <RouterProvider router={router} />
  </StrictMode>
);
