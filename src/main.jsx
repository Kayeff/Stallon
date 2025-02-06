import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Membership from "./pages/Membership.jsx";
import Branches from "./pages/Branches.jsx";
import Blog from "./pages/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is the layout
    children: [
      { index: true, element: <Home /> }, // Default page
      { path: "about", element: <About /> },
      { path: "branches", element: <Branches /> },
      { path: "membership", element: <Membership /> },
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
