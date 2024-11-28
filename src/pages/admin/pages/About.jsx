import { useState, useEffect } from "react";
import { create, getAll, update, remove } from "../../../services/AboutService";

const AboutList = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editItemId, setEditItemId] = useState(null);
  const [newAbout, setNewAbout] = useState({
    judul: "",
    deskripsi_singkat: "",
    deskripsi_panjang: "",
    gambar: null,
  });

  const fetchData = async () => {
    try {
      const fetchedData = await getAll();
      console.log(fetchedData);
      const updatedData = fetchedData.map(item => ({
        ...item,
        gambarUrl: `http://localhost:3000/uploads/${item.gambar}`,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();

  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    setNewAbout({
      judul: "",
      deskripsi_singkat: "",
      deskripsi_panjang: "",
      gambar: null,
    });
    setIsEditing(false);
    setEditIndex(null);
    setEditItemId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAbout({ ...newAbout, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewAbout({ ...newAbout, gambar: e.target.files[0] });
  };

  const handleAddAbout = async () => {
    try {
      if (isEditing) {
        const updatedData = await update(editItemId, newAbout.judul, newAbout.deskripsi_singkat, newAbout.deskripsi_panjang, newAbout.gambar);
        const updatedDataList = [...data];
        updatedDataList[editIndex] = updatedData;
        setData(updatedDataList);
      } else {
        const newAboutData = await create(newAbout.judul, newAbout.deskripsi_singkat, newAbout.deskripsi_panjang, newAbout.gambar);
        setData([...data, newAboutData]);
      }
      toggleModal();
      fetchData();
    } catch (error) {
      console.error("Error saving data", error);
      alert("Gagal menyimpan data");
    }
  };

  const handleEdit = (index) => {
    setNewAbout(data[index]);
    setEditIndex(index);
    setEditItemId(data[index].id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = async (index) => {
    try {
      const itemId = data[index].id;
      await remove(itemId);
      const updatedData = data.filter((_, i) => i !== index);
      setData(updatedData);
      fetchData();
    } catch (error) {
      console.error("Error deleting data", error);
      alert("Gagal menghapus data");
    }
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
                <td className="border border-gray-300 px-4 py-2">{item.deskripsi_singkat}</td>
                <td className="border border-gray-300 px-4 py-2">{item.deskripsi_panjang}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <img
                    src={item.gambarUrl}
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">{isEditing ? "Edit About" : "Add About"}</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Judul</label>
              <input
                type="text"
                name="judul"
                value={newAbout.judul}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Deskripsi Singkat</label>
              <textarea
                name="deskripsi_singkat"
                value={newAbout.deskripsi_singkat}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Deskripsi Panjang</label>
              <textarea
                name="deskripsi_panjang"
                value={newAbout.deskripsi_panjang}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Gambar</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={toggleModal}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAbout}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutList;
