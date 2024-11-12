import { Link } from 'react-router-dom'

import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'
import pic5 from '../../assets/pic5.png'
import pic6 from '../../assets/pic6.png'
import pic7 from '../../assets/pic7.png'
import pic8 from '../../assets/pic8.png'
import pic9 from '../../assets/pic9.png'

export default function Home() {
  return (
    <div className="container mx-auto p-5 space-y-5">
      <section className="bg-white p-10 rounded-lg shadow-md mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-black mb-4">
            Selamat Datang di E-Corn
          </h1>
          <p className="text-gray-700 mb-6">
            Yuk belajar cara mengelola limbah jagung jadi barang berguna! Mulai
            dari tongkol jagung yang bisa jadi makanan hewan, pupuk tanaman atau
            hiasan unik, sampai daunnya yang bisa dijadikan bahan kompos. Dengan
            cara yang mudah diikuti, biar kita semua bantu menjaga bumi.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-2 rounded font-bold hover:bg-yellow-700 transition">
            Selengkapnya
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={pic1}
            alt="Hero"
            className="w-full max-w-xs rounded-md shadow-md"
          />
        </div>
      </section>

      {/* Why E-Corn Section */}
      <section
        style={{ backgroundColor: '#2C4001' }}
        className="text-white p-8 rounded-lg flex flex-col items-center"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">
          Mengapa E-Corn?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-right pr-4 space-y-4">
            <p>Video tutorial yang mudah dipahami</p>
            <p>Berita terkini mengenai pertanian jagung di Sumatera Utara</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img
              src={pic2}
              alt="Benefit 1"
              className="w-full h-auto object-cover rounded-md"
            />
            <img
              src={pic3}
              alt="Benefit 2"
              className="w-full h-auto object-cover rounded-md"
            />
            <img
              src={pic4}
              alt="Benefit 3"
              className="w-full h-auto object-cover rounded-md"
            />
            <img
              src={pic5}
              alt="Benefit 4"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="text-left pl-4 space-y-4">
            <p>
              Forum diskusi untuk saling berdiskusi dengan sesama petani jagung,
              bagikan tips terbaikmu.
            </p>
            <p>MP3 untuk membantu memahami teks tutorial.</p>
          </div>
        </div>
      </section>
      {/* End Why E-Corn Section */}

      {/* Education Section */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Edukasi</h2>
        <p className="text-gray-700 mb-4">
          Dengan fitur edukasi yang dirancang khusus untuk membantu Anda
          mempelajari cara mengelola limbah jagung secara efektif. Dengan
          panduan praktis, tips berkelanjutan, dan informasi menarik, solusi
          inovatif dari E-Corn akan memudahkan hidup menjadi lebih baik dan
          lebih ramah lingkungan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <img
              src={pic6}
              alt="Education 1"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <p>Tongkol Jagung</p>
          </div>
          <div>
            <img
              src={pic7}
              alt="Education 2"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <p>Daun Jagung</p>
          </div>
          <div>
            <img
              src={pic8}
              alt="Education 3"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <p>Kulit Jagung</p>
          </div>
        </div>
      </section>
      {/* End Education Section */}

      {/* News Section */}
      <section
        style={{ backgroundColor: '#2C4001' }}
        className="text-white p-8 rounded-lg"
      >
        <h2 className="text-3xl font-semibold mb-4">Berita</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={pic9}
            alt="News Image"
            className="w-full md:w-1/3 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
          />
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-2">
              Sumatera Utara ekspor pakan ternak dari limbah jagung ke Korea
              Selatan
            </h3>
            <p className="text-gray-200 mb-4">
              Kepala Badan Karantina Pertanian (Barantan), Bambang mengungkapkan
              ekspor pakan ternak Sumut itu mendukung program Gratieks
              Kementerian Pertanian Syahrul Yasin Limpo.
            </p>
            <Link
              to="/detail-berita"
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>
      {/* End News Section */}
    </div>
  )
}
