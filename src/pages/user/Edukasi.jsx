import logo from '../../assets/logo.png'
import pic6 from '../../assets/pic6.png'
import pic7 from '../../assets/pic7.png'
import pic8 from '../../assets/pic8.png'
import pic11 from '../../assets/pic11.jpeg'
import pic12 from '../../assets/pic12.jpeg'
import pic13 from '../../assets/pic13.jpeg'

import { Link } from 'react-router-dom'

const ArticleCard = ({ image, title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <img
      src={image}
      alt="Article"
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      to={link}
      className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
    >
      Baca Selengkapnya
    </Link>
  </div>
)

export default function Edukasi() {
  return (
    <div className="container mx-auto p-10 ">
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
          <div className="text-center">
            <img
              src={pic6}
              alt="Tongkol Jagung"
              className="w-40 h-40 object-cover rounded-md"
            />
            <button className="bg-[#2C4001] text-white px-4 py-1 mt-2 rounded font-bold">
              Tongkol Jagung
            </button>
          </div>
          <div className="text-center">
            <img
              src={pic7}
              alt="Daun Jagung"
              className="w-40 h-40 object-cover rounded-md"
            />
            <button className="bg-[#2C4001] text-white px-4 py-1 mt-2 rounded font-bold">
              Daun Jagung
            </button>
          </div>
          <div className="text-center">
            <img
              src={pic8}
              alt="Kulit Jagung"
              className="w-40 h-40 object-cover rounded-md"
            />
            <button className="bg-[#2C4001] text-white px-4 py-1 mt-2 rounded font-bold">
              Kulit Jagung
            </button>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-[#8B5E34] text-white px-6 py-2 rounded font-bold">
            Semua
          </button>
        </div>
      </div>

      {/* Articles Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ArticleCard
          image={pic11}
          title="Biochar: Solusi Limbah Pertanian untuk Peningkatan Kualitas Tanah"
          description="Biochar merupakan salah satu solusi berkelanjutan yang semakin populer dalam pengelolaan limbah pertanian. Biochar adalah bahan karbon yang dihasilkan dari pembakaran biomassa organik (seperti sisa-sisa tanaman, kayu, atau limbah pertanian) pada suhu tinggi dalam kondisi minim oksigen."
          link="/detail-edukasi"
        />
        <ArticleCard
          image={pic12}
          title="Pengolahan Limbah Jerami jagung Menjadi Pakan Ternak"
          description="Jerami jagung, yang biasanya dianggap sebagai limbah setelah panen, sebenarnya memiliki potensi besar sebagai sumber pakan ternak. Pengolahan limbah jerami jagung menjadi pakan ternak tidak hanya mengurangi pemborosan bagi petani dan peternak."
          link="/detail-edukasi"
        />
        <ArticleCard
          image={pic13}
          title="Biogas dari Limbah Pertanian"
          description="Limbah pertanian, yang sering kali dianggap sebagai produk sampingan tak berguna, sebenarnya memiliki potensi besar untuk diolah menjadi sumber energi terbarukan, yaitu biogas. Biogas merupakan gas yang dihasilkan dari proses fermentasi anaerobik tanpa oksigen."
          link="/detail-edukasi"
        />
      </div>
    </div>
  )
}
