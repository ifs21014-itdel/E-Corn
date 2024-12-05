import axios from "axios";

const API_URL = "http://localhost:5000/education"; // Ganti dengan URL backend Anda

// Mengambil semua data pendidikan
export const getAll = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

// Menambahkan data pendidikan baru
export const create = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Agar bisa mengirim FormData
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating data", error);
    throw error;
  }
};

// Mengupdate data pendidikan
export const update = async (id, formData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Agar bisa mengirim FormData
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating data", error);
    throw error;
  }
};

// Menghapus data pendidikan
export const remove = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data", error);
    throw error;
  }
};
