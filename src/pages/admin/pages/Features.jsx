import { useState, useEffect } from "react";
import { create, getAll, update, remove } from "../../../services/FeaturesService";

const Features = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editItemId, setEditItemId] = useState(null);
  const [newFeature, setNewFeature] = useState({
    title: "",
    description: "",
    image: null,
  });

  const fetchData = async () => {
    try {
      const fetchedData = await getAll();
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    setNewFeature({
      title: "",
      description: "",
      image: null,
    });
    setIsEditing(false);
    setEditIndex(null);
    setEditItemId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeature({ ...newFeature, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewFeature({ ...newFeature, image: file });
  };

  const handleAddFeature = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newFeature.title || "");
      formData.append("description", newFeature.description || "");

      if (newFeature.image) {
        formData.append("image", newFeature.image);
      }

      let response;
      if (isEditing) {
        response = await update(editItemId, formData);
        const updatedDataList = [...data];
        updatedDataList[editIndex] = response;
        setData(updatedDataList);
      } else {
        response = await create(formData);
        setData([...data, response]);
      }

      toggleModal();
      fetchData();
    } catch (error) {
      console.error("Error saving data", error);
      alert("Gagal menyimpan data");
    }
  };

  const handleEdit = (index) => {
    setNewFeature(data[index]);
    setEditIndex(index);
    setEditItemId(data[index].id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = async (index) => {
    try {
      const itemId = data[index].id;
      await remove(itemId);
      setData(data.filter((_, i) => i !== index));
      fetchData();
    } catch (error) {
      console.error("Error deleting data", error);
      alert("Gagal menghapus data");
    }
  };

  return (
    <div className="p-6  min-h-screen">
      <div className="mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Features List</h2>
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Feature
          </button>
        </div>
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={`http://localhost:3000/uploads/${item.image}`}
                    alt={item.title}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
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
            <h3 className="text-xl font-bold mb-4">{isEditing ? "Edit Feature" : "Add Feature"}</h3>
            {["title", "description"].map((field) => (
              <div className="mb-4" key={field}>
                <label className="block text-sm font-medium text-gray-700">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={newFeature[field]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
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
                onClick={handleAddFeature}
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

export default Features;
