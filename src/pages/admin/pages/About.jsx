import React, { useState } from "react";

const AboutList = () => {
  const [data, setData] = useState([
    {
      judul: "Tentang Aplikasi",
      deskripsiSingkat: "Aplikasi untuk pengelolaan data.",
      deskripsiPanjang:
        "Aplikasi ini dirancang untuk memudahkan pengelolaan data pengguna, berita, dan komunitas.",
      gambar: "gambar1.jpg",
    },
    {
      judul: "Fitur Unggulan",
      deskripsiSingkat: "Fitur canggih untuk produktivitas.",
      deskripsiPanjang:
        "Fitur seperti pengelolaan pengguna, berita, dan pengaturan komunitas tersedia di aplikasi ini.",
      gambar: "gambar2.jpg",
    },
  ]);

  const [modalData, setModalData] = useState({
    judul: "",
    deskripsiSingkat: "",
    deskripsiPanjang: "",
    gambar: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Open modal for "Tambah" or "Edit"
  const openModal = (index = null) => {
    if (index !== null) {
      setIsEditing(true);
      setEditIndex(index);
      setModalData(data[index]);
    } else {
      setIsEditing(false);
      setModalData({
        judul: "",
        deskripsiSingkat: "",
        deskripsiPanjang: "",
        gambar: "",
      });
    }
    setModalVisible(true);
  };

  // Handle form submit
  const handleSubmit = () => {
    if (isEditing) {
      const updatedData = [...data];
      updatedData[editIndex] = modalData;
      setData(updatedData);
    } else {
      setData([...data, modalData]);
    }
    setModalVisible(false);
  };

  // Handle delete
  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setModalData({ ...modalData, gambar: file.name });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center my-6">About List</h2>

      {/* Button */}
      <div className="flex justify-end max-w-7xl mx-auto mb-4">
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Tambah About
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2 text-left w-1/12">#</th>
              <th className="border px-4 py-2 text-left w-2/12">Judul</th>
              <th className="border px-4 py-2 text-left w-3/12">
                Deskripsi Singkat
              </th>
              <th className="border px-4 py-2 text-left w-4/12">
                Deskripsi Panjang
              </th>
              <th className="border px-4 py-2 text-left w-1/12">Gambar</th>
              <th className="border px-4 py-2 text-center w-1/12">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{item.judul}</td>
                <td className="border px-4 py-2">{item.deskripsiSingkat}</td>
                <td className="border px-4 py-2">{item.deskripsiPanjang}</td>
                <td className="border px-4 py-2 text-center">
                  <img
                    src={`/${item.gambar}`}
                    alt="gambar"
                    className="h-12 w-12 object-cover rounded-lg mx-auto"
                  />
                  <div>{item.gambar}</div>
                </td>
                <td className="border px-4 py-2 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => openModal(index)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalVisible && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl transition-all">
      <h3 className="text-xl font-bold mb-4">
        {isEditing ? "Edit About" : "Tambah About"}
      </h3>
      <div className="mb-4">
        <label className="block font-medium mb-1">Judul</label>
        <input
          type="text"
          value={modalData.judul}
          onChange={(e) =>
            setModalData({ ...modalData, judul: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Deskripsi Singkat</label>
        <input
          type="text"
          value={modalData.deskripsiSingkat}
          onChange={(e) =>
            setModalData({ ...modalData, deskripsiSingkat: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Deskripsi Panjang</label>
        <textarea
          value={modalData.deskripsiPanjang}
          onChange={(e) =>
            setModalData({ ...modalData, deskripsiPanjang: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Upload Gambar</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setModalVisible(false)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Batal
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Simpan
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default AboutList;
