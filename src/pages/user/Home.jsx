
import logo from '../../assets/logo.png';


export default function Home() {
  return (
    <div className="container mx-auto p-5">
      {/* Hero Section */}
      <section className="bg-green-100 p-8 rounded-lg shadow-md text-center pt-12 mt-16">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Selamat Datang di E-Corn</h1>
        <p className="text-gray-700 mb-6">
          Platform yang membantu meningkatkan kesadaran dan pendidikan tentang pengelolaan limbah pertanian.
        </p>
        <img src={logo} alt="Hero" className="w-full max-w-lg mx-auto rounded-md shadow-md" />
      </section>

      {/* About Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tentang Kami</h2>
        <p className="text-gray-700">
          E-Corn adalah platform yang berfokus pada pemanfaatan limbah pertanian untuk menjaga lingkungan
          dan meningkatkan kualitas hidup masyarakat. Kami menyediakan edukasi, komunitas, dan berbagai
          solusi ramah lingkungan untuk membantu petani dan masyarakat dalam mengelola limbah pertanian
          dengan lebih baik.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Keunggulan Kami</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Pendidikan tentang pengelolaan limbah pertanian</li>
          <li>Komunitas yang aktif dan peduli lingkungan</li>
          <li>Solusi praktis dan inovatif untuk pemanfaatan limbah</li>
          <li>Dukungan untuk meningkatkan kualitas tanah dan tanaman</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Bergabung dengan Kami!</h2>
        <p className="text-gray-700 mb-6">Mari bersama-sama menjaga lingkungan dan memanfaatkan limbah pertanian dengan bijak.</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition">
          Daftar Sekarang
        </button>
      </section>
    </div>
  );
}
