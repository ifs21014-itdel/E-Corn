import logo from "../../assets/logo.png";
import pic14 from "../../assets/pic14.jpeg";
import pic15 from "../../assets/pic15.jpeg";
import pic16 from "../../assets/pic16.jpeg";
import pic17 from "../../assets/pic17.jpeg";

import React from "react";

export default function TentangKami() {
  return (
    <div className="container mx-auto p-20">
      {/* Bagian Judul "Tentang Kami" di luar warna hijau */}
      <h2 className="text-2xl font-bold text-center mb-4">Tentang Kami</h2>

      {/* Bagian Atas dengan Latar Hijau */}
      <div
        className="bg-green-800 text-white rounded-lg p-5 mb-5 text-center mx-auto"
        style={{ maxWidth: "80%" }} // Set lebar maksimum dan center-kan
      >
        <div
          className="d-flex justify-content-center gap-3 mb-4"
          style={{
            display: "flex", // Gunakan display flex untuk tata letak gambar
            justifyContent: "center", // Pastikan gambar berada di tengah
            gap: "10px", // Jarak antar gambar
          }}
        >
          {/* Galeri Gambar */}
          {[pic14, pic15, pic16, pic17].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Corn Image ${index + 1}`}
              className="img-thumbnail rounded mx-1"
              style={{
                width: "100px", // Ukuran gambar 100x100px
                height: "100px",
                objectFit: "cover", // Memastikan gambar tidak terdistorsi
                borderRadius: "10px", // Membulatkan sudut gambar
              }}
            />
          ))}
        </div>
        <h4 className="text-xl font-semibold mb-2">
          Membangun Masa Depan Pertanian Melalui Pengetahuan dan Inovasi
        </h4>
        <p className="leading-relaxed px-4">
          Platform ini bertujuan untuk meningkatkan pengetahuan petani dalam
          pengelolaan limbah pertanian, sehingga mereka dapat memanfaatkannya
          secara lebih efektif dan berkelanjutan. Melalui edukasi platform ini
          akan membantu petani mengolah limbah organik menjadi sumber daya yang
          berguna, seperti pupuk kompos atau bahan pakan ternak, yang tidak
          hanya mendukung produktivitas pertanian, tetapi juga berkontribusi
          pada pelestarian lingkungan.
        </p>
      </div>

      {/* Bagian Bawah */}
      <div className="text-center">
        <img
          src={pic15}
          alt="Large Corn Image"
          className="img-fluid rounded mb-4"
          style={{ maxWidth: "80%", height: "auto" }}
        />
        <h2 className="text-2xl font-bold mt-3 mb-2">Tentang Kami</h2>
        <h4 className="text-xl font-semibold mb-2">
          Membangun Masa Depan Pertanian Melalui Pengetahuan dan Inovasi
        </h4>
        <p className="leading-relaxed px-4">
          Platform ini bertujuan untuk meningkatkan pengetahuan petani dalam
          pengelolaan limbah pertanian, sehingga mereka dapat memanfaatkannya
          secara lebih efektif dan berkelanjutan. Melalui edukasi platform ini
          akan membantu petani mengolah limbah organik menjadi sumber daya yang
          berguna, seperti pupuk kompos atau bahan pakan ternak, yang tidak
          hanya mendukung produktivitas pertanian, tetapi juga berkontribusi
          pada pelestarian lingkungan.
        </p>
      </div>
    </div>
  );
}
