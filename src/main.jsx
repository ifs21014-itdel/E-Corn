import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/user/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Edukasi from "./pages/user/Edukasi";
import Berita from "./pages/user/Berita";
import Login from "./pages/Auth/Login";
import DetailEdukasi from "./pages/user/DetailEdukasi";
import TentangKami from "./pages/user/TentangKami";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/edukasi",
    element: (
      <>
        <Navbar />
        <Edukasi />
        <Footer />
      </>
    ),
  },
  {
    path: "/detail-edukasi",
    element: (
      <>
        <Navbar />
        <DetailEdukasi />
        <Footer />
      </>
    ),
  },
  {
    path: "/berita",
    element: (
      <>
        <Navbar />
        <Berita />
        <Footer />
      </>
    ),
  },
  {
    path: "/tentang-kami",
    element: (
      <>
        <Navbar />
        <TentangKami />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
