import { useState } from "react";
import api from "../../../utils/api";

const About = () => {
  const [form, setForm] = useState({
    judul: "",
    deskripsiSingkat: "",
    deskripsiPanjang: "",
    gambar: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", form.judul);
    formData.append("deskripsiSingkat", form.deskripsiSingkat);
    formData.append("deskripsiPanjang", form.deskripsiPanjang);
    formData.append("gambar", form.gambar);

    try {
      await api.post("/about", formData);
      alert("Data berhasil ditambahkan!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Tambah About</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Judul */}
          <div>
            <label className="block font-semibold text-gray-700">Judul:</label>
            <input
              type="text"
              value={form.judul}
              onChange={(e) => setForm({ ...form, judul: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan judul"
            />
          </div>

          {/* Deskripsi Singkat */}
          <div>
            <label className="block font-semibold text-gray-700">Deskripsi Singkat:</label>
            <textarea
              value={form.deskripsiSingkat}
              onChange={(e) => setForm({ ...form, deskripsiSingkat: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Masukkan deskripsi singkat"
            ></textarea>
          </div>

          {/* Deskripsi Panjang */}
          <div>
            <label className="block font-semibold text-gray-700">Deskripsi Panjang:</label>
            <textarea
              value={form.deskripsiPanjang}
              onChange={(e) => setForm({ ...form, deskripsiPanjang: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Masukkan deskripsi panjang"
            ></textarea>
          </div>

          {/* Gambar */}
          <div>
            <label className="block font-semibold text-gray-700">Gambar:</label>
            <input
              type="file"
              onChange={(e) => setForm({ ...form, gambar: e.target.files[0] })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default About;
