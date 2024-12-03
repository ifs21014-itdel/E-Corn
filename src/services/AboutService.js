import api from "../utils/api";


export const create = async (judul, deskripsi_singkat, deskripsi_panjang, gambar1, gambar2, gambar3, gambar4) => {
  try {
    const formData = new FormData(); 
    formData.append("judul", judul);
    formData.append("deskripsiSingkat", deskripsi_singkat);
    formData.append("deskripsiPanjang", deskripsi_panjang);

    // Menambahkan gambar jika ada
    if (gambar1) formData.append("gambar1", gambar1);
    if (gambar2) formData.append("gambar2", gambar2);
    if (gambar3) formData.append("gambar3", gambar3);
    if (gambar4) formData.append("gambar4", gambar4);

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


export const getAll = async () => {
  try {
    const response = await api.get("/about/");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Gagal mengambil data About.");
  }
};


export const getById = async (id) => {
  try {
    const response = await api.get(`/about/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal mengambil data About dengan ID ${id}.`);
  }
};


export const update = async (id, judul, deskripsi_singkat, deskripsi_panjang, gambar1, gambar2, gambar3, gambar4) => {
  try {
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("deskripsiSingkat", deskripsi_singkat);
    formData.append("deskripsiPanjang", deskripsi_panjang);

    // Menambahkan gambar jika ada
    if (gambar1) formData.append("gambar1", gambar1);
    if (gambar2) formData.append("gambar2", gambar2);
    if (gambar3) formData.append("gambar3", gambar3);
    if (gambar4) formData.append("gambar4", gambar4);

    console.log(id);

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


export const remove = async (id) => {
  try {
    const response = await api.delete(`/about/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Gagal menghapus data About dengan ID ${id}.`);
  }
};