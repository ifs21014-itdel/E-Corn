import logo from "../../assets/logo.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#2C4001]">
      <div className="w-full max-w-md bg-[#D9E4C7] rounded-lg shadow-lg flex overflow-hidden">
        {/* Left side (Login form) */}
        <div className="p-8 w-1/2">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="E-Corn Logo" className="w-16 h-16" />
          </div>
          <h2 className="text-xl font-bold text-black mb-4">Selamat Datang</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Email/Nama"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
            />
            <div className="text-right text-sm text-gray-500 mb-4">
              <a href="#" className="hover:underline">
                Lupa password?
              </a>
            </div>
            <button className="w-full bg-[#2C4001] text-white py-2 rounded-full font-bold hover:bg-green-800 transition">
              Masuk
            </button>
          </form>

          <div className="flex items-center justify-center mt-4 space-x-2 text-gray-500">
            <span>or sign with</span>
          </div>
          <div className="flex items-center justify-center mt-2 space-x-4">
            <button>
              <img src={google} alt="Google" className="w-6 h-6" />
            </button>
            <button>
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-4">
            belum punya akun?{" "}
            <a href="#" className="font-bold text-black hover:underline">
              Register
            </a>
          </div>
        </div>

        {/* Right side (Background image) */}
        <div
          className="w-1/2 bg-cover"
          style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}
        >
          {/* Add a placeholder for the image */}
        </div>
      </div>
    </div>
  );
}
