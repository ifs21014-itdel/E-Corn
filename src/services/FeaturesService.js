// FeaturesService.js

import api from "../utils/api";

// Fungsi untuk mengambil semua fitur
export const getAll = async () => {
  try {
    const response = await api.get("/features/");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mendapatkan data fitur.");
  }
};

// Fungsi untuk mengambil fitur berdasarkan ID
export const getByID = async (id) => {
  try {
    const response = await api.get(`/features/${id}`);
    return response.data; // Mengembalikan data fitur dengan ID tertentu
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal mendapatkan data fitur dengan ID ${id}.`);
  }
};

// Fungsi untuk membuat fitur
export const create = async (formData) => {
  try {
    const response = await api.post("/features/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal membuat data fitur.");
  }
};

// Fungsi untuk memperbarui fitur
export const update = async (id, formData) => {
  try {
    const response = await api.put(`/features/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal memperbarui data fitur dengan ID ${id}.`);
  }
};

// Fungsi untuk menghapus fitur
export const remove = async (id) => {
  try {
    const response = await api.delete(`/features/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal menghapus data fitur dengan ID ${id}.`);
  }
};
