import { Link } from 'react-router-dom';
export default function Edukasi() {
    return (
      <div className="container mx-auto p-10">
        {/* Header Text */}
        <h2 className="text-2xl font-semibold text-center mb-8">
          Mempelajari pertanian jagung adalah mempelajari harmoni antara manusia dan alam, memahami bahwa kita adalah bagian dari ekosistem yang saling mendukung
        </h2>
  
        {/* Category Section */}
        <div className="text-center mb-10">
          <div className="mb-6">
            <button className="bg-[#8B5E34] text-white px-6 py-2 rounded font-bold">Kategori</button>
          </div>
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <img src="/path/to/image1.jpg" alt="Tongkol Jagung" className="w-40 h-40 object-cover rounded-md" />
              <button className="bg-[#2C4001] text-white px-4 py-1 mt-2 rounded font-bold">Tongkol Jagung</button>
            </div>
            <div className="text-center">
              <img src="/path/to/image2.jpg" alt="Daun Jagung" className="w-40 h-40 object-cover rounded-md" />
              <button className="bg-[#2C4001] text-white px-4 py-1 mt-2 rounded font-bold">Daun Jagung</button>
            </div>
            <div className="text-center">
              <img src="/path/to/image3.jpg" alt="Kulit Jagung" className="w-40 h-40 object-cover rounded-md" />
              <button className="bg-[#2C4001] text-white px-4 py-1 mt-2 rounded font-bold">Kulit Jagung</button>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-[#8B5E34] text-white px-6 py-2 rounded font-bold">Semua</button>
          </div>
        </div>
  
        {/* Articles Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src="/path/to/article-image.jpg" alt="Article" className="w-full h-40 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold mb-2">Judul Artikel {index + 1}</h4>
              <p className="text-gray-600 mb-4">
                Deskripsi singkat mengenai artikel yang menjelaskan informasi seputar pertanian jagung dan pemanfaatannya.
              </p>
              <Link to="/detail-edukasi" className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
                Baca Selengkapnya
                </Link>

            </div>
          ))}
        </div>
      </div>
    );
  }
  