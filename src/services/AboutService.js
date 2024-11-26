import api from "../utils/api";

// Fungsi untuk membuat data baru (Create)
export const create = async (judul, deskripsiSingkat, deskripsiPanjang, gambar) => {
  try {
    const formData = new FormData(); // Menggunakan FormData untuk mengunggah file
    formData.append("judul", judul);
    formData.append("deskripsiSingkat", deskripsiSingkat);
    formData.append("deskripsiPanjang", deskripsiPanjang);
    formData.append("gambar", gambar);

    const response = await api.post("/about/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal membuat data About.");
  }
};

// Fungsi untuk mendapatkan semua data "About" (Read)
export const getAll = async () => {
  try {
    const response = await api.get("/about/");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mengambil data About.");
  }
};

// Fungsi untuk mendapatkan detail data "About" berdasarkan ID
export const getById = async (id) => {
  try {
    const response = await api.get(`/about/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal mengambil data About dengan ID ${id}.`);
  }
};

// Fungsi untuk memperbarui data "About" (Update)
export const update = async (id, judul, deskripsiSingkat, deskripsiPanjang, gambar) => {
  try {
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("deskripsiSingkat", deskripsiSingkat);
    formData.append("deskripsiPanjang", deskripsiPanjang);
    if (gambar) {
      formData.append("gambar", gambar);
    }

    const response = await api.put(`/about/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal memperbarui data About dengan ID ${id}.`);
  }
};

// Fungsi untuk menghapus data "About" (Delete)
export const remove = async (id) => {
  try {
    const response = await api.delete(`/about/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal menghapus data About dengan ID ${id}.`);
  }
};