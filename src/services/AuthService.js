import api from "../utils/api"; // Import konektor API

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data; // Kembalikan data response
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
};
