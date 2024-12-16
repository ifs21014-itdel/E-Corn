import { useState, useEffect } from "react";
import { getAll } from "../../services/NewsService";  // Pastikan getAll terimpor dengan benar
import pic9 from "../../assets/pic9.png";
import { Link } from "react-router-dom";

export default function Berita() {
  const [data, setData] = useState([]);
  const [beritaUtama, setBeritaUtama] = useState(null);

  // Mengambil data berita dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getAll();
        setData(fetchedData);
        setBeritaUtama(fetchedData[0]); // Ambil berita pertama sebagai berita utama
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#EDEDED] min-h-screen flex items-center justify-center py-12 pt-20">
      <div className="container w-full md:w-11/12 lg:w-3/4">
        {/* Menampilkan "Berita" */}
        <h3 className="text-2xl font-bold text-[#333] mb-4 text-center mt-5">
          Berita
        </h3>

        {/* Berita Utama */}
        {beritaUtama && <BeritaUtama berita={beritaUtama} />}

        {/* Daftar Berita */}
        <h3 className="text-2xl font-bold text-[#333] mb-4 text-center">
          Berita Lainnya
        </h3>
        <DaftarBerita data={data} />
      </div>
    </div>
  );
}

const BeritaUtama = ({ berita }) => (
  <div className="flex justify-center mb-20 pt-10">
    <div className="bg-[#556B2F] text-white rounded-lg p-5 w-full md:w-3/4 lg:w-2/3 flex">
      {/* Kolom kiri teks */}
      <div className="w-full lg:w-1/2 pr-6">
        <h2 className="text-2xl font-bold mb-3">{berita.title}</h2>
        <p className="text-[#F0F0F0] text-base leading-relaxed">
          {berita.content.length > 150 ? berita.content.slice(0, 150) + '...' : berita.content}
        </p>
        <Link to={`/detail-berita/${berita.id}`} className="text-[#FFD700] mt-4 block">
        
          Baca Selengkapnya
        </Link>
      </div>
      {/* Kolom kanan gambar */}
      <div className="w-full lg:w-1/2">
        <img
          src={berita.image || pic9}  // Gambar dari API, jika tidak ada gunakan gambar default
          alt="Berita Utama"
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  </div>
);

const DaftarBerita = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.map((berita) => (
      <div key={berita.id} className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={berita.image || pic9}  // Gambar berita
          alt={berita.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h4 className="text-lg font-semibold">{berita.title}</h4>
        <p className="text-sm text-gray-600 mt-2">
          {berita.content.length > 100 ? berita.content.slice(0, 100) + '...' : berita.content}
        </p>
        <Link to={`/detail-berita/${berita.id}`} className="text-[#556B2F] mt-4 inline-block">
  <button className="bg-[#556B2F] text-white py-2 px-4 rounded-lg hover:bg-[#3b5724]">
    Baca Selengkapnya
  </button>
</Link>

      </div>
    ))}
  </div>
);
