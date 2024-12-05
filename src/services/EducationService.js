import api from "../utils/api";

export const create = async (title, content, audio_url, video_url, image_url) => {
  try {
    const response = await api.post("/education/", { title, content, audio_url, video_url, image_url });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to create Education data.");
  }
};

export const getAll = async () => {
  try {
    const response = await api.get("/education/");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to fetch Education data.");
  }
};

export const update = async (id, title, content, audio_url, video_url, image_url) => {
  try {
    const response = await api.put(`/education/${id}`, { title, content, audio_url, video_url, image_url });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Failed to update Education data with ID ${id}.`);
  }
};

export const remove = async (id) => {
  try {
    const response = await api.delete(`/education/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || `Failed to delete Education data with ID ${id}.`);
  }
};
