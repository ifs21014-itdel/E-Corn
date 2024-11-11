
import pic11 from "../../assets/pic11.jpeg";

export default function DetailEdukasi() {
  return (
    <div className="container mx-auto p-20">
      {/* Image and Title Section */}
      <div className="flex flex-col md:flex-row items-start mb-10">
        <img
          src={pic11}
          alt="E-Corn Logo"
          className="w-full md:w-1/3 h-auto rounded-md mb-4 md:mb-0 md:mr-6"
        />
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-black mb-4">
            Solusi Limbah Pertanian untuk Peningkatan Kualitas Tanah
          </h2>
          <p className="text-gray-700">
            Biochar adalah bahan kaya karbon yang dihasilkan melalui proses
            pirolisis, yaitu pembakaran bahan organik (seperti limbah tanaman,
            kayu, atau biomassa) pada suhu tinggi dalam kondisi minim oksigen.
            Biochar mirip dengan arang, tetapi berbeda dalam penggunaannya,
            terutama untuk meningkatkan kualitas tanah dan menyimpan karbon
            dalam jangka panjang.
          </p>
        </div>
      </div>

      {/* Text Section */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-black mb-4">Teks</h3>
        <p className="text-gray-700">
          Pemanfaatan limbah pertanian dapat menjadi solusi efektif untuk
          meningkatkan kualitas tanah secara alami dan ramah lingkungan. Salah
          satu cara yang sering digunakan adalah dengan menggunakan biochar
          sebagai bahan baku alami. Karbon yang terkandung dalam biochar dapat
          membantu tanah menyerap lebih banyak air dan nutrisi, mempromosikan
          kesehatan akar tanaman, dan mengurangi dampak buruk polusi.
          <br />
          <br />
          Biochar kaya akan mikroorganisme baik yang berfungsi memperbaiki
          porositas, pengeringan air tanah, dan memperkuat struktur tanah.
          Teknologi ini mendukung pertanian berkelanjutan yang ramah lingkungan,
          mengurangi dampak polusi gas rumah kaca dan meningkatkan potensi
          produktivitas pertanian.
        </p>
      </div>

      {/* Audio Section */}
      <div className="mb-10">
        <h3 className="sr-only">Audio Tutorial</h3>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center space-x-4">
          <span className="text-gray-700">🎵</span>
          <div>
            <p className="font-semibold">Klik untuk mendengarkan tutorial</p>
            <audio controls className="w-full">
              <source src="/path/to/audio.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>

      {/* Video Placeholder */}
      <div className="mb-10">
        <h3 className="text-lg text-gray-600 text-center mb-2">
          Putar video untuk melihat tutorial
        </h3>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg">
          <p className="text-gray-500">Video</p>
        </div>
      </div>
    </div>
  );
}
