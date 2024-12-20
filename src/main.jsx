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

import Sidebar from "./pages/admin/components/Sidebar";
import User from "./pages/admin/pages/User";
import AdminLogin from "./pages/admin/pages/AdminLogin";
import About from "./pages/admin/pages/About";
import Education from "./pages/admin/pages/Education";
import Features from "./pages/admin/pages/Features";
import News from "./pages/admin/pages/News";


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
    path: "/detail-edukasi/:id",
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
    path: "/detail-berita/:id",
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
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: (
      
        <Sidebar>
          <User />
        </Sidebar>
      
    ),
  },
  {
    path: "/admin/users",
    element: (
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <User/>
        </div>
      </div>
    ),
  },
  {
    path: "/admin/features",
    element: (
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Features/>
        </div>
      </div>
    ),
  },
  {
    path: "/admin/berita",
    element: (
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <News/>
        </div>
      </div>
    ),
  },
  {
    path: "/admin/about",
    element: (
      <div className="flex">
        <Sidebar /> {/* Sidebar untuk navigasi admin */}
        <div className="flex-grow">
          <About /> {/* Komponen Admin About */}
        </div>
      </div>
    ),
  },
  {
    path: "/admin/edukasi",
    element: (
      <div className="flex">
        <Sidebar /> {}
        <div className="flex-grow">
          <Education /> {}
        </div>
      </div>
    ),
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
