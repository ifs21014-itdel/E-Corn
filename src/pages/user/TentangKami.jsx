import { useState, useEffect } from 'react';
import { getAll } from '../../services/AboutService'; 

export default function TentangKami() {
  const [aboutData, setAboutData] = useState([]);  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Fungsi untuk mengambil data dari API
  const fetchData = async () => {
    try {
      const data = await getAll();
      console.log(data);
      setAboutData(data); // Simpan data di state
    } catch (err) {
      setError('Terjadi kesalahan saat mengambil data'); // Set error jika gagal
    } finally {
      setLoading(false); // Set loading false setelah selesai mengambil data
    }
  };

  // Gunakan useEffect untuk mengambil data ketika komponen pertama kali dimuat
  useEffect(() => {
    fetchData();
  }, []); // Empty array berarti hanya sekali ketika komponen dimuat

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-gray-600">Loading...</div>
      </div>
    ); // Tampilkan loading jika data masih dalam proses
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-red-600">{error}</div>
      </div>
    ); // Tampilkan error jika ada masalah saat mengambil data
  }

  return (
    <div className="container mx-auto p-8 md:p-16">
      {/* Bagian Judul "Tentang Kami" */}
      <h2 className="text-4xl font-bold text-center text-green-900 mb-8 pt-20 ">Tentang Kami</h2>

      {/* Bagian Atas dengan Latar Hijau */}
      <div
        className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl p-8 mb-8 text-center mx-auto shadow-xl transform transition-all hover:scale-105"
        style={{ maxWidth: '85%' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {/* Menambahkan 4 gambar di dalam grid */}
          {aboutData[0]?.gambar1 && (
            <div className="group relative">
              <img
                src={`http://localhost:3000/uploads/${aboutData[0]?.gambar1}`} // URL gambar yang dinamis
                alt="Gambar 1"
                className="rounded-xl w-full h-48 object-cover shadow-lg group-hover:scale-105 transition-all duration-300"
              />
            </div>
          )}
          {aboutData[0]?.gambar2 && (
            <div className="group relative">
              <img
                src={`http://localhost:3000/uploads/${aboutData[0]?.gambar2}`} // URL gambar yang dinamis
                alt="Gambar 2"
                className="rounded-xl w-full h-48 object-cover shadow-lg group-hover:scale-105 transition-all duration-300"
              />
            </div>
          )}
          {aboutData[0]?.gambar3 && (
            <div className="group relative">
              <img
                src={`http://localhost:3000/uploads/${aboutData[0]?.gambar3}`} // URL gambar yang dinamis
                alt="Gambar 3"
                className="rounded-xl w-full h-48 object-cover shadow-lg group-hover:scale-105 transition-all duration-300"
              />
            </div>
          )}
          {aboutData[0]?.gambar4 && (
            <div className="group relative">
              <img
                src={`http://localhost:3000/uploads/${aboutData[0]?.gambar4}`} // URL gambar yang dinamis
                alt="Gambar 4"
                className="rounded-xl w-full h-48 object-cover shadow-lg group-hover:scale-105 transition-all duration-300"
              />
            </div>
          )}
        </div>
        {/* Judul dan Deskripsi dari data yang diambil */}
        <h4 className="text-3xl font-semibold mb-4">
          {aboutData[0]?.judul || "Judul Tidak Tersedia"}
        </h4>
        <p className="leading-relaxed text-lg px-4">
          {aboutData[0]?.deskripsi_singkat || "Deskripsi tidak tersedia."}
        </p>
      </div>

      {/* Bagian Bawah Deskripsi Detail */}
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl">
   
        <p className="leading-relaxed text-gray-700">{aboutData[0]?.deskripsi_panjang || "Deskripsi lengkap tidak tersedia."}</p>
      </div>
    </div>
  );
}
