import logo from "../../assets/logo.png";
import pic9 from "../../assets/pic9.png";


import React from "react";
import { Link } from "react-router-dom";

export default function Berita() {
  return (
    <div className="bg-[#EDEDED] min-h-screen flex items-center justify-center py-12 pt-20">
      <div className="container w-full md:w-11/12 lg:w-3/4">
        {/* Menampilkan "Berita" Tanpa Latar Hijau */}
        <h3 className="text-2xl font-bold text-[#333] mb-4 text-center">
          Berita
        </h3>

        {/* Berita Utama */}
        <BeritaUtama />

        {/* Daftar Berita */}
        <h3 className="text-2xl font-bold text-[#333] mb-4 text-center">
          Berita Lainnya
        </h3>
        <DaftarBerita />
      </div>
    </div>
  );
}

const BeritaUtama = () => (
  <div className="flex justify-center mb-20 pt-10">
    <div className="bg-[#556B2F] text-white rounded-lg p-5 w-full md:w-3/4 lg:w-2/3 flex">
      {/* Kolom kiri teks */}
      <div className="w-full lg:w-1/2 pr-6">
        <h2 className="text-2xl font-bold mb-3">
          Sumatera Utara ekspor pakan ternak dari limbah jagung ke Korea Selatan
        </h2>
        <p className="text-[#F0F0F0] text-base leading-relaxed">
          Kepala Badan Karantina Pertanian (Barantan), Bambang, mengatakan,
          ekspor pakan ternak Sumatera mendukung program Gratieks (Gerakan Tiga
          Kali Lipat Ekspor) yang digagas Menteri Pertanian Syahrul Yasin Limpo.
        </p>
        <Link
          to="/detail-berita"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
        >
          Lihat
        </Link>
      </div>

      {/* Kolom kanan gambar */}
      <div className="w-full lg:w-1/2">
        <img
          src={pic9}
          alt="Berita Utama"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  </div>
);

const DaftarBerita = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {Array.from({ length: 6 }).map((_, index) => (
      <div className="col" key={index}>
        <div className="card h-full shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <img
            src={pic9}
            alt={`Berita ${index + 1}`}
            className="w-full h-48 rounded-t-lg object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl font-bold text-[#333] mb-2">
              Sumatera Utara ekspor pakan ternak
            </h5>
            <p className="text-sm text-[#555] mb-4">
              Kepala Badan Karantina Pertanian (Barantan), Bambang, mengatakan,
              ekspor pakan ternak Sumatera mendukung program Gratieks (Gerakan
              Tiga Kali Lipat Ekspor) yang digagas Menteri Pertanian Syahrul
              Yasin Limpo.
            </p>
            <Link
              to="/detail-berita"
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
            >
              Lihat
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);
