import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import Komunitas from "./Komunitas"; // Import komponen Komunitas

export default function Home() {
  return (
    <div className="container mx-auto p-5">
      <section className="bg-white p-10 rounded-lg shadow-md mt-16 flex flex-col md:flex-row items-center justify-center gap-6 min-h-screen">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-black mb-4">Selamat Datang di E-Corn</h1>
          <p className="text-gray-700 mb-6">
            Yuk belajar cara mengelola limbah jagung jadi barang berguna! Mulai dari tongkol jagung yang bisa jadi
            makanan hewan, pupuk tanaman atau hiasan unik, sampai daunnya yang bisa dijadikan bahan kompos.
            Dengan cara yang mudah diikuti, biar kita semua bantu menjaga bumi.
          </p>
          <button className="bg-yellow-600 text-white px-8 py-3 rounded font-bold hover:bg-yellow-700 transition">
            Selengkapnya
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={logo} alt="Hero" className="w-full max-w-sm rounded-md shadow-md" />
        </div>
      </section>

      {/* Why E-Corn Section */}
      <section style={{ backgroundColor: '#2C4001' }} className="text-white p-10 mt-10 rounded-lg min-h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-center mb-8">Mengapa E-Corn?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-right pr-4 space-y-8">
            <p>Video tutorial yang mudah dipahami</p>
            <p>Berita terkini mengenai pertanian jagung di Sumatera Utara</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={logo} alt="Benefit 1" className="w-full h-32 object-cover rounded-md border-4 border-blue-500" />
            <img src={logo} alt="Benefit 2" className="w-full h-32 object-cover rounded-md" />
            <img src={logo} alt="Benefit 3" className="w-full h-32 object-cover rounded-md" />
            <img src={logo} alt="Benefit 4" className="w-full h-32 object-cover rounded-md" />
          </div>
          <div className="text-left pl-4 space-y-8">
            <p>Forum diskusi untuk saling berdiskusi dengan sesama petani jagung, bagikan tips terbaikmu.</p>
            <p>MP3 untuk membantu memahami teks tutorial.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="p-10 mt-10 text-center min-h-screen">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Edukasi</h2>
        <p className="text-gray-700 mb-6">
          Dengan fitur edukasi yang dirancang khusus untuk membantu Anda mempelajari cara mengelola limbah jagung secara efektif.
          Dengan panduan praktis, tips berkelanjutan, dan informasi menarik, solusi inovatif dari E-Corn akan memudahkan hidup menjadi lebih baik dan lebih ramah lingkungan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <img src={logo} alt="Education 1" className="w-full h-32 object-cover rounded-md mb-4" />
            <p>Tongkol Jagung</p>
          </div>
          <div>
            <img src={logo} alt="Education 2" className="w-full h-32 object-cover rounded-md mb-4" />
            <p>Daun Jagung</p>
          </div>
          <div>
            <img src={logo} alt="Education 3" className="w-full h-32 object-cover rounded-md mb-4" />
            <p>Kulit Jagung</p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section style={{ backgroundColor: '#2C4001' }} className="text-white p-10 mt-10 rounded-lg min-h-screen">
        <h2 className="text-3xl font-semibold mb-6">Berita</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img src={logo} alt="News Image" className="w-full md:w-1/3 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6" />
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">
              Sumatera Utara ekspor pakan ternak dari limbah jagung ke Korea Selatan
            </h3>
            <p className="text-gray-200 mb-6">
              Kepala Badan Karantina Pertanian (Barantan), Bambang mengungkapkan ekspor pakan ternak Sumut itu
              mendukung program Gratieks Kementerian Pertanian Syahrul Yasin Limpo.
            </p>
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-700 transition">
              Selengkapnya
            </button>
          </div>
        </div>
      </section>

           {/* Discussion Section */}
           <section className="p-10 mt-10 min-h-screen">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Diskusi</h2>
        <p className="text-gray-700 mb-6 text-center">
          Diskusikan kendalamu, serta bagikan tips terbaikmu kepada para petani lain dan dapatkan informasi terbaru lainnya.
        </p>
        
        
      </section>
    </div>
  );
}
