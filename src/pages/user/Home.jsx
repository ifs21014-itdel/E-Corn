import { useState, useEffect } from 'react';
import { getAll } from '../../services/FeaturesService';
import { getAll as getAbout } from '../../services/AboutService';

export default function Home() {
  const [aboutData, setAboutData] = useState([]);
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAboutData = async () => {
    try {
      const data = await getAbout();
      setAboutData(data);
    } catch (err) {
      console.error('Gagal mengambil data about:', err);
    }
  };

  const fetchFeatures = async () => {
    try {
      const data = await getAll();
      setFeatures(data);
    } catch (err) {
      setError('Gagal memuat data fitur.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutData();
    fetchFeatures();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  const aboutItem = aboutData[0] || {};

  return (
    <div className="container mx-auto p-5 space-y-5">
      {/* Section: Hero Mengapa E-Corn */}
      <section className="bg-white p-10 rounded-lg shadow-md mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-black mb-4">Mengapa E-Corn?</h1>
          <p className="text-gray-700 mb-6">
            {aboutItem.deskripsi_singkat || 'Yuk belajar cara mengelola limbah jagung jadi barang berguna!'}
          </p>
          <button className="bg-yellow-600 text-white px-6 py-2 rounded font-bold hover:bg-yellow-700 transition">
            Selengkapnya
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {aboutItem.gambar1 && (
            <img
              src={`http://localhost:3000/uploads/${aboutItem.gambar1}`}
              alt="Hero"
              className="w-full max-w-xs rounded-md shadow-md"
            />
          )}
        </div>
      </section>

      {/* Section: Mengapa E-Corn Dinamis */}
      <section
        style={{ backgroundColor: '#2C4001' }}
        className="text-white p-8 rounded-lg"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Mengapa E-Corn?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Kolom Kiri */}
          <div className="space-y-6">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-center"
              >
                <p className="text-lg font-medium">
                  {feature.description || 'Deskripsi akan segera tersedia.'}
                </p>
              </div>
            ))}
          </div>

          {/* Gambar */}
          <div className="grid grid-cols-2 gap-4">
            {features.slice(0, 4).map((feature, index) => (
              <div
                key={index}
                className="relative w-full h-40 bg-gray-200 rounded-md overflow-hidden shadow-md"
              >
                {feature.image ? (
                  <img
                    src={`http://localhost:3000/uploads/${feature.image}`}
                    alt={`Benefit ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Gambar tidak tersedia
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-6">
            {features.slice(2, 4).map((feature, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-center"
              >
                <p className="text-lg font-medium">
                  {feature.description || 'Deskripsi akan segera tersedia.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
