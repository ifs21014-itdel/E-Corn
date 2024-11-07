import React from "react";

export default function TentangKami() {
  return (
    <div className="container my-5">
      {/* Bagian Atas */}
      <div
        className="bg-green-800 text-white rounded-lg p-5 mb-5 text-center mx-auto"
        style={{ maxWidth: "80%" }} // Set lebar maksimum dan center-kan
      >
        <h2 className="text-2xl font-bold mb-4">Tentang Kami</h2>
        <div className="d-flex justify-content-center gap-3 mb-4">
          {/* Galeri Gambar */}
          {[
            "/path/to/image1.jpg",
            "/path/to/image2.jpg",
            "/path/to/image3.jpg",
            "/path/to/image4.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Corn Image ${index + 1}`}
              className="img-thumbnail rounded mx-1"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
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
          src="/path/to/largeImage.jpg"
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
