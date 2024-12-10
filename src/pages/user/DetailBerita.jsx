import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getById } from "../../services/NewsService"; // Pastikan ini diimpor dari service yang sesuai
import pic9 from "../../assets/pic9.png"; // Gambar default jika tidak ada gambar berita

export default function DetailBerita() {
  const { id } = useParams(); // Mengambil ID dari URL
  const [berita, setBerita] = useState(null);

  // Fetch data berita berdasarkan ID
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await getById(id); // Fungsi ini untuk mengambil data berdasarkan ID
        setBerita(response); // Menyimpan data berita ke state
      } catch (error) {
        console.error("Error fetching berita:", error);
      }
    };

    fetchBerita();
  }, [id]);

  if (!berita) {
    return <div>Loading...</div>; // Loading state jika data belum tersedia
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        paddingTop: "80px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      {/* Judul Berita */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "5px",
          color: "#333",
        }}
      >
        {berita.title}
      </h2>

      {/* Tanggal Berita */}
      <p style={{ color: "#777", fontSize: "14px", marginBottom: "20px" }}>
        {new Date(berita.date).toLocaleDateString()} {/* Format tanggal */}
      </p>

      {/* Gambar Utama */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src={berita.image || pic9} // Jika tidak ada gambar, tampilkan gambar default
          alt={berita.title}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      {/* Konten Berita */}
      <div style={{ color: "#333", fontSize: "16px", textAlign: "justify" }}>
        <p style={{ marginBottom: "15px" }}>
          {berita.content} {/* Konten berita yang diambil dari API */}
        </p>
      </div>
    </div>
  );
}
