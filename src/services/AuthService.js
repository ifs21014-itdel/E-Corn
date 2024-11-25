import api from "../utils/api";

// Fungsi untuk login user
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

// Fungsi untuk registrasi user
export const registerUser = async (username, email, password, role = "user") => {
  try {
    const response = await api.post("/auth/register", {
      username,
      email,
      password,
      role,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Registration failed");
  }
};

// Fungsi untuk mengambil semua data user
export const getAllUsers = async () => {
  try {
    const response = await api.get("/auth/users"); // Endpoint untuk mendapatkan semua user
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to fetch users");
  }
};

// Fungsi untuk edit user
export const editUser = async (id, data) => {
  try {
    const response = await api.put(`auth/users/${id}`, data); // Endpoint untuk edit user
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to edit user");
  }
};

// Fungsi untuk hapus user
export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`auth/users/${id}`); // Endpoint untuk hapus user
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to delete user");
  }
};
