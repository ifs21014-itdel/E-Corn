import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import jagung from "../../assets/jagung.jpeg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State untuk error message dari API
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token); // Simpan token ke localStorage
      navigate("/home"); // Redirect ke halaman home setelah login berhasil
    } catch (err) {
      setError(err.message); // Set pesan error ke state
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br bg-[#2C4001]">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex overflow-hidden">
        {/* Left Section - Form */}
        <div className="p-10 w-full md:w-1/2 flex flex-col justify-center">
          <div className="text-center mb-6">
            <img src={logo} alt="E-Corn Logo" className="w-16 h-16 mx-auto" />
            <h2 className="text-3xl font-bold text-green-800">Welcome Back</h2>
            <p className="text-gray-500 mt-2">
              Login to access your personalized dashboard.
            </p>
          </div>

          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )} {/* Tampilkan error */}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2C4001] text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${jagung})` }}>
          <div className="bg-gradient-to-t from-black via-transparent to-transparent h-full w-full flex items-end justify-center pb-6">
            <h3 className="text-white text-lg font-bold">E-Corn Agriculture Platform</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
