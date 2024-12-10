import api from "../utils/api";

// Fungsi untuk mengambil semua komentar
export const getAll = async () => {
  try {
    const response = await api.get("/comments/");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mendapatkan data komentar.");
  }
};

// Fungsi untuk mengambil komentar berdasarkan ID
export const getByID = async (id) => {
  try {
    const response = await api.get(`/comments/${id}`);
    return response.data; // Mengembalikan data komentar dengan ID tertentu
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal mendapatkan data komentar dengan ID ${id}.`);
  }
};

// Fungsi untuk membuat komentar
export const create = async (formData) => {
  try {
    const response = await api.post("/comments/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal membuat data komentar.");
  }
};

// Fungsi untuk memperbarui komentar
export const update = async (id, formData) => {
  try {
    const response = await api.put(`/comments/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal memperbarui data komentar dengan ID ${id}.`);
  }
};

// Fungsi untuk menghapus komentar
export const remove = async (id) => {
  try {
    const response = await api.delete(`/comments/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal menghapus data komentar dengan ID ${id}.`);
  }
};
