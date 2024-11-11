import logo from "../../assets/logo.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import jagung from "../../assets/jagung.jpeg"; 

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#2C4001]">
      <div className="w-full max-w-2xl bg-[#D9E4C7] rounded-lg shadow-lg flex overflow-hidden">
        {/* Left side (Login form) */}
        <div className="p-8 w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Login
          </h2>
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

            {/* "Lupa password?" link directly below the password field, aligned to the left */}
            <div className="text-sm text-gray-500 mt-1">
              <a href="#" className="underline hover:text-blue-500">
                Lupa password?
              </a>
            </div>

            <button className="w-full bg-[#2C4001] text-white py-2 rounded-full font-bold hover:bg-green-800 transition mt-4">
              Login
            </button>
          </form>

          <div className="flex items-center justify-center mt-4 text-gray-500">
            <span>or sign in with</span>
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
          className="w-1/2 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${jagung})` }}
        >
          <div className="absolute top-4 left-4">
            <img src={logo} alt="E-Corn Logo" className="w-16 h-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
