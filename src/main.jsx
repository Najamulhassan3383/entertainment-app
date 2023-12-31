import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx";
import MoviesPage from "./components/MoviesPage.jsx";
import Series from "./components/Series.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "series",
        element: <Series />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
