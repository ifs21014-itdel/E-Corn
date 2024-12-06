import axios from "axios";

const apiUrl = "http://localhost:3000/news/";

// Helper function to get the token
const getAuthToken = () => {
  return localStorage.getItem('token');  // Ensure the token is stored in localStorage or sessionStorage
};

// Helper function to generate request headers
const getRequestHeaders = () => {
  const token = getAuthToken();
  const headers = {
    "Content-Type": "multipart/form-data",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;  // Add token to headers if available
  }

  return headers;
};

// Function to create news
export const create = async (formData) => {
  try {
    const response = await axios.post(apiUrl, formData, {
      headers: getRequestHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error('Error creating news:', error.response || error);
    throw error;
  }
};

// Function to update news
export const update = async (id, formData) => {
  try {
    const response = await axios.put(`${apiUrl}${id}`, formData, {
      headers: getRequestHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error updating news:", error.response || error);
    throw error;
  }
};

// Function to delete news
export const remove = async (id) => {
  try {
    await axios.delete(`${apiUrl}${id}`, {
      headers: getRequestHeaders(),
    });
  } catch (error) {
    console.error("Error deleting news:", error.response || error);
    throw error;
  }
};

// Function to fetch all news
export const getAll = async () => {
  try {
    const response = await axios.get(apiUrl, {
      headers: getRequestHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error.response || error);
    throw error;
  }
};
