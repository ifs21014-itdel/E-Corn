import api from "../utils/api";

// Fungsi untuk mengambil semua topik
export const getAll = async () => {
  try {
    const response = await api.get("/topics/");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mendapatkan data topik.");
  }
};

// Fungsi untuk mengambil topik berdasarkan ID
export const getByID = async (id) => {
  try {
    const response = await api.get(`/topics/${id}`);
    return response.data; // Mengembalikan data topik dengan ID tertentu
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal mendapatkan data topik dengan ID ${id}.`);
  }
};

// Fungsi untuk membuat topik
export const createTopic = async (formData) => {
  try {
    const response = await api.post("/topics/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal membuat data topik.");
  }
};

// Fungsi untuk memperbarui topik
export const update = async (id, formData) => {
  try {
    const response = await api.put(`/topics/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal memperbarui data topik dengan ID ${id}.`);
  }
};

// Fungsi untuk menghapus topik
export const remove = async (id) => {
  try {
    const response = await api.delete(`/topics/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal menghapus data topik dengan ID ${id}.`);
  }
};
