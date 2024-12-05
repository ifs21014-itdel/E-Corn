import api from "../utils/api";

// Fungsi untuk create data edukasi
export const create = async (title, content, audio_url, video_url, image_url) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    // Pastikan menambahkan file jika ada, dan bukan hanya URL
    if (audio_url instanceof File) {
      formData.append("audio_url", audio_url);
    } else if (audio_url) {
      formData.append("audio_url", audio_url); // Jika URL, langsung kirim
    }

    if (video_url instanceof File) {
      formData.append("video_url", video_url);
    } else if (video_url) {
      formData.append("video_url", video_url); // Jika URL, langsung kirim
    }

    if (image_url instanceof File) {
      formData.append("image_url", image_url);
    } else if (image_url) {
      formData.append("image_url", image_url); // Jika URL, langsung kirim
    }

    const response = await api.post("/educations/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to create Education data.");
  }
};

// Fungsi untuk mendapatkan semua data edukasi
export const getAll = async () => {
  try {
    const response = await api.get("/educations/");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to fetch Education data.");
  }
};

// Fungsi untuk update data edukasi
export const update = async (id, title, content, audio_url, video_url, image_url) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    // Menambahkan file jika ada
    if (audio_url instanceof File) {
      formData.append("audio_url", audio_url);
    } else if (audio_url) {
      formData.append("audio_url", audio_url); // Jika URL, langsung kirim
    }

    if (video_url instanceof File) {
      formData.append("video_url", video_url);
    } else if (video_url) {
      formData.append("video_url", video_url); // Jika URL, langsung kirim
    }

    if (image_url instanceof File) {
      formData.append("image_url", image_url);
    } else if (image_url) {
      formData.append("image_url", image_url); // Jika URL, langsung kirim
    }

    const response = await api.put(`/educations/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Failed to update Education data with ID ${id}.`);
  }
};

// Fungsi untuk menghapus data edukasi
export const remove = async (id) => {
  try {
    const response = await api.delete(`/educations/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Failed to delete Education data with ID ${id}.`);
  }
};
