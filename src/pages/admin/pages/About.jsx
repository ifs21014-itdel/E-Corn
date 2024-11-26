import { useState } from "react";

const AboutList = () => {
  const [data, setData] = useState([
    {
      judul: "Tentang Aplikasi",
      deskripsiSingkat: "Aplikasi untuk pengelolaan data.",
      deskripsiPanjang: "Aplikasi ini dirancang untuk memudahkan pengelolaan data pengguna, berita, dan komunitas.",
      gambar: "gambar1.png",
    },
    {
      judul: "Fitur Unggulan",
      deskripsiSingkat: "Fitur canggih untuk produktivitas.",
      deskripsiPanjang: "Fitur seperti pengelolaan pengguna, berita, dan pengaturan komunitas tersedia di aplikasi ini.",
      gambar: "gambar2.png",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newAbout, setNewAbout] = useState({
    judul: "",
    deskripsiSingkat: "",
    deskripsiPanjang: "",
    gambar: "",
  });

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    setNewAbout({
      judul: "",
      deskripsiSingkat: "",
      deskripsiPanjang: "",
      gambar: "",
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAbout({ ...newAbout, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewAbout({ ...newAbout, gambar: e.target.files[0]?.name || "" });
  };

  const handleAddAbout = () => {
    if (isEditing) {
      const updatedData = [...data];
      updatedData[editIndex] = newAbout;
      setData(updatedData);
    } else {
      setData([...data, newAbout]);
    }
    toggleModal();
  };

  const handleEdit = (index) => {
    setNewAbout(data[index]);
    setEditIndex(index);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">About List</h2>
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
          >
            Add About
          </button>
        </div>
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Judul</th>
              <th className="border border-gray-300 px-4 py-2">Deskripsi Singkat</th>
              <th className="border border-gray-300 px-4 py-2">Deskripsi Panjang</th>
              <th className="border border-gray-300 px-4 py-2">Gambar</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item.judul}</td>
                <td className="border border-gray-300 px-4 py-2">{item.deskripsiSingkat}</td>
                <td className="border border-gray-300 px-4 py-2">{item.deskripsiPanjang}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <img
                    src={`/${item.gambar}`}
                    alt={item.judul}
                    className="h-12 w-12 object-cover rounded-md mx-auto"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 mr-2 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">
              {isEditing ? "Edit About" : "Add About"}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Judul:</label>
              <input
                type="text"
                name="judul"
                value={newAbout.judul}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Deskripsi Singkat:</label>
              <textarea
                name="deskripsiSingkat"
                value={newAbout.deskripsiSingkat}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Deskripsi Panjang:</label>
              <textarea
                name="deskripsiPanjang"
                value={newAbout.deskripsiPanjang}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Gambar:</label>
              <input
                type="file"
                name="gambar"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={toggleModal}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAbout}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
              >
                {isEditing ? "Save Changes" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutList;
