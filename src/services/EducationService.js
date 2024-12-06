// EducationService.js

import api from "../utils/api";

// Fungsi untuk mengambil semua edukasi
export const getAll = async () => {
  try {
    const response = await api.get("/educations/");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mendapatkan data edukasi.");
  }
};

// Fungsi untuk mengambil edukasi berdasarkan ID
export const getByID = async (id) => {
  try {
    const response = await api.get(`/educations/${id}`);
    return response.data; // Mengembalikan data edukasi dengan ID tertentu
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal mendapatkan data edukasi dengan ID ${id}.`);
  }
};

// Fungsi untuk membuat edukasi
export const create = async (formData) => {
  try {
    const response = await api.post("/educations/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal membuat data edukasi.");
  }
};

// Fungsi untuk memperbarui edukasi
export const update = async (id, formData) => {
  try {
    const response = await api.put(`/educations/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal memperbarui data edukasi dengan ID ${id}.`);
  }
};

// Fungsi untuk menghapus edukasi
export const remove = async (id) => {
  try {
    const response = await api.delete(`/educations/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal menghapus data edukasi dengan ID ${id}.`);
  }
};
