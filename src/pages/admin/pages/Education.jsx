import { useState, useEffect } from "react";
import { create, getAll, update, remove } from "../../../services/EducationService";

const EducationList = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editItemId, setEditItemId] = useState(null);
  const [newEducation, setNewEducation] = useState({
    title: "",
    content: "",
    audio_url: "",
    video_url: "",
    image_url: "",
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
    setNewEducation({
      title: "",
      content: "",
      audio_url: "",
      video_url: "",
      image_url: "",
    });
    setIsEditing(false);
    setEditIndex(null);
    setEditItemId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  };

  const handleAddEducation = async () => {
    try {
      if (isEditing) {
        const updatedData = await update(
          editItemId,
          newEducation.title,
          newEducation.content,
          newEducation.audio_url,
          newEducation.video_url,
          newEducation.image_url
        );
        const updatedDataList = [...data];
        updatedDataList[editIndex] = updatedData;
        setData(updatedDataList);
      } else {
        const newEducationData = await create(
          newEducation.title,
          newEducation.content,
          newEducation.audio_url,
          newEducation.video_url,
          newEducation.image_url
        );
        setData([...data, newEducationData]);
      }
      toggleModal();
      fetchData();
    } catch (error) {
      console.error("Error saving data", error);
      alert("Failed to save data");
    }
  };

  const handleEdit = (index) => {
    setNewEducation(data[index]);
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
      alert("Failed to delete data");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Education List</h2>
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Education
          </button>
        </div>
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Content</th>
              <th className="border border-gray-300 px-4 py-2">Audio</th>
              <th className="border border-gray-300 px-4 py-2">Video</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                <td className="border border-gray-300 px-4 py-2">{item.content}</td>
                <td className="border border-gray-300 px-4 py-2">{item.audio_url}</td>
                <td className="border border-gray-300 px-4 py-2">{item.video_url}</td>
                <td className="border border-gray-300 px-4 py-2">{item.image_url}</td>
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
            <h3 className="text-xl font-bold mb-4">{isEditing ? "Edit Education" : "Add Education"}</h3>
            {["title", "content", "audio_url", "video_url", "image_url"].map((field) => (
              <div className="mb-4" key={field}>
                <label className="block text-sm font-medium text-gray-700">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={newEducation[field]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            ))}
            <div className="flex justify-between">
              <button
                onClick={toggleModal}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEducation}
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

export default EducationList;
