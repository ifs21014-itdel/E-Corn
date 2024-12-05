import { useState, useEffect } from "react";
import { getAll, update, remove } from "../../../services/AboutService";

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
    gambar1: null,
    gambar2: null,
    gambar3: null,
    gambar4: null,
  });

  const fetchData = async () => {
    try {
      const fetchedData = await getAll();
      const updatedData = fetchedData.map(item => ({
        ...item,
        gambarUrls: {
          gambar1: item.gambar1 ? `http://localhost:3000/uploads/${item.gambar1}` : null,
          gambar2: item.gambar2 ? `http://localhost:3000/uploads/${item.gambar2}` : null,
          gambar3: item.gambar3 ? `http://localhost:3000/uploads/${item.gambar3}` : null,
          gambar4: item.gambar4 ? `http://localhost:3000/uploads/${item.gambar4}` : null,
        }
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
      gambar1: null,
      gambar2: null,
      gambar3: null,
      gambar4: null,
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
    const { name, files } = e.target;
    setNewAbout({
      ...newAbout,
      [name]: files[0], // Assuming single file upload per field
    });
  };

  const handleEdit = (index) => {
    setNewAbout({
      judul: data[index].judul,
      deskripsi_singkat: data[index].deskripsi_singkat,
      deskripsi_panjang: data[index].deskripsi_panjang,
      gambar1: data[index].gambar1,
      gambar2: data[index].gambar2,
      gambar3: data[index].gambar3,
      gambar4: data[index].gambar4,
    });
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

  const handleAddAbout = async () => {
    try {
      if (isEditing) {
        const updatedData = await update(editItemId, newAbout.judul, newAbout.deskripsi_singkat, newAbout.deskripsi_panjang, newAbout.gambar1, newAbout.gambar2, newAbout.gambar3, newAbout.gambar4);
        const updatedDataList = [...data];
        updatedDataList[editIndex] = updatedData;
        setData(updatedDataList);
      }
      toggleModal();
      fetchData();
    } catch (error) {
      console.error("Error saving data", error);
      alert("Gagal menyimpan data");
    }
  };

  // Helper function to truncate long text
  const truncateText = (text, length = 80) => {
    return (text ?? "").length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-10xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">About List</h2>
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Judul</th>
              <th className="border border-gray-300 px-4 py-2">Deskripsi Singkat</th>
              <th className="border border-gray-300 px-4 py-2">Deskripsi Panjang</th>
              <th className="border border-gray-300 px-4 py-2">Gambar 1</th>
              <th className="border border-gray-300 px-4 py-2">Gambar 2</th>
              <th className="border border-gray-300 px-4 py-2">Gambar 3</th>
              <th className="border border-gray-300 px-4 py-2">Gambar 4</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item.judul}</td>
                <td className="border border-gray-300 px-4 py-2">{truncateText(item.deskripsi_singkat)}</td>
                <td className="border border-gray-300 px-4 py-2">{truncateText(item.deskripsi_panjang, 120)}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.gambarUrls?.gambar1 ? (
                    <img
                      src={item.gambarUrls.gambar1}
                      alt="Gambar 1"
                      className="h-12 w-12 object-cover rounded-md mx-auto"
                    />
                  ) : (
                    <span>No image</span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.gambarUrls?.gambar2 ? (
                    <img
                      src={item.gambarUrls.gambar2}
                      alt="Gambar 2"
                      className="h-12 w-12 object-cover rounded-md mx-auto"
                    />
                  ) : (
                    <span>No image</span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.gambarUrls?.gambar3 ? (
                    <img
                      src={item.gambarUrls.gambar3}
                      alt="Gambar 3"
                      className="h-12 w-12 object-cover rounded-md mx-auto"
                    />
                  ) : (
                    <span>No image</span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.gambarUrls?.gambar4 ? (
                    <img
                      src={item.gambarUrls.gambar4}
                      alt="Gambar 4"
                      className="h-12 w-12 object-cover rounded-md mx-auto"
                    />
                  ) : (
                    <span>No image</span>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        {/* Modal for Add/Edit About */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-semibold mb-4">{isEditing ? "Edit About" : "Add New About"}</h3>
              <div>
                <label className="block mb-2">Judul</label>
                <input
                  type="text"
                  name="judul"
                  value={newAbout.judul}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />
                <label className="block mb-2">Deskripsi Singkat</label>
                <input
                  type="text"
                  name="deskripsi_singkat"
                  value={newAbout.deskripsi_singkat}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />
                <label className="block mb-2">Deskripsi Panjang</label>
                <textarea
                  name="deskripsi_panjang"
                  value={newAbout.deskripsi_panjang}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />
                <label className="block mb-2">Gambar 1</label>
                <input
                  type="file"
                  name="gambar1"
                  onChange={handleFileChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />
                <label className="block mb-2">Gambar 2</label>
                <input
                  type="file"
                  name="gambar2"
                  onChange={handleFileChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />
                <label className="block mb-2">Gambar 3</label>
                <input
                  type="file"
                  name="gambar3"
                  onChange={handleFileChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />
                <label className="block mb-2">Gambar 4</label>
                <input
                  type="file"
                  name="gambar4"
                  onChange={handleFileChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />

                <div className="flex justify-between mt-4">
                  <button
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={handleAddAbout}
                  >
                    {isEditing ? "Save Changes" : "Add About"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutList;
