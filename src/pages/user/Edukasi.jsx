import { useEffect, useState } from "react";
import { getAll } from '../../services/EducationService'; // Import fungsi getAll dari API

export default function Edukasi() {
  // State untuk menyimpan data edukasi
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data edukasi dari API
  const fetchEducations = async () => {
    try {
      const data = await getAll(); // Panggil fungsi getAll dari API
      setEducations(data); // Simpan data ke state
      setLoading(false); // Set loading ke false setelah data diterima
    } catch (err) {
      setError(err.message); // Set error jika ada masalah
      setLoading(false);
    }
  };

  // Menggunakan useEffect untuk memanggil API saat komponen dirender
  useEffect(() => {
    fetchEducations();
  }, []); // [] agar hanya dipanggil sekali saat komponen pertama kali dirender

  if (loading) {
    return <div>Loading...</div>; // Tampilkan loading saat data sedang diambil
  }

  if (error) {
    return <div>Error: {error}</div>; // Tampilkan pesan error jika ada kesalahan
  }

  return (
    <div className="container mx-auto p-10">
      {/* Header Text */}
      <h2 className="text-2xl font-semibold text-center mb-8 mt-20">
        Mempelajari pertanian jagung adalah mempelajari harmoni antara manusia
        dan alam, memahami bahwa kita adalah bagian dari ekosistem yang saling
        mendukung
      </h2>

      {/* Category Section */}
      <div className="text-center mb-10">
        <div className="mb-6">
          <button className="bg-[#8B5E34] text-white px-6 py-2 rounded font-bold">
            Kategori
          </button>
        </div>
        <div className="flex justify-center space-x-6">
          {/* Add category buttons here */}
        </div>
        <div className="mt-6">
          <button className="bg-[#8B5E34] text-white px-6 py-2 rounded font-bold">
            Semua
          </button>
        </div>
      </div>

      {/* Articles Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {educations.map((education) => (
          <div
            key={education.id} 
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img
              src={`http://localhost:3000/uploads/${education.image}`} // Gambar artikel
              alt="Article"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">{education.title}</h4>
            <p className="text-gray-600 mb-4">{education.description}</p>
            <a
              href={`/detail-edukasi/${education.id}`} // Link ke halaman detail
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
            >
              Baca Selengkapnya
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
