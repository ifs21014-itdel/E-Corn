// utils/auth.js

export const getAuthToken = () => {
    return localStorage.getItem('token');  // Pastikan token disimpan di localStorage atau sessionStorage
  };
  
  export const getRequestHeaders = () => {
    const token = getAuthToken();
    const headers = {
      "Content-Type": "application/json",  // Tentukan Content-Type sesuai dengan kebutuhan API
    };
  
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;  // Menambahkan token ke header jika tersedia
    }
  
    return headers;
  };
  