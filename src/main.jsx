import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/user/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Edukasi from "./pages/user/Edukasi";
import Berita from "./pages/user/Berita";
import Komunitas from "./pages/user/Komunitas";
import DetailDiskusi from "./pages/user/DetailDiskusi";
import Login from "./pages/Auth/Login";
import DetailEdukasi from "./pages/user/DetailEdukasi";
import DetailBerita from "./pages/user/DetailBerita";
import TentangKami from "./pages/user/TentangKami";
import AuthGuard from "./utils/AuthGuard"; // Import AuthGuard

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
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
    path: "/komunitas",
    element: (
      <AuthGuard>
        <>
          <Navbar />
          <Komunitas />
          <Footer />
        </>
      </AuthGuard>
    ),
  },
  {
    path: "/komunitas/:id",
    element: (
      <AuthGuard>
        <>
          <Navbar />
          <DetailDiskusi />
          <Footer />
        </>
      </AuthGuard>
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
    path: "/detail-berita",
    element: (
     
        <>
          <Navbar />
          <DetailBerita />
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
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
