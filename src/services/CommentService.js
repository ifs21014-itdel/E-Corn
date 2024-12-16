// CommentService.js
import { getRequestHeaders } from "../utils/auth";  // Impor helper function

// Fungsi untuk membuat komentar
export const create = async (topicId, commentData) => {
  try {
    const { user, text } = commentData;

    // Pastikan user dan text ada
    if (!user || !text) {
      throw new Error("User and text are required for creating a comment.");
    }

    console.log('Data to be sent:', { topicId, user, text });

    // Ambil headers dengan token
    const headers = getRequestHeaders();

    // Kirim data komentar dengan POST
    const response = await fetch(`http://localhost:3000/comments/`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        topicId: topicId,
        user: user,
        text: text,
      }),
    });

    // Cek status response
    if (!response.ok) {
      const errorDetail = await response.text();  // Ambil detail error untuk ditampilkan
      throw new Error(`Failed to create comment: ${response.statusText} - ${errorDetail}`);
    }

    // Mengembalikan data JSON dari response
    return await response.json();
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};


// Fungsi untuk mengambil semua komentar berdasarkan topik
export const getAll = async (topicId) => {
  try {
    const headers = getRequestHeaders();  // Ambil headers dengan token
    const response = await fetch(`http://localhost:3000/comments/${topicId}`, {
      method: 'GET',
      headers: headers,  // Menggunakan headers yang sudah disiapkan
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch comments: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

// Fungsi untuk mengambil komentar berdasarkan ID
export const getByID = async (id) => {
  try {
    const headers = getRequestHeaders();  // Ambil headers dengan token
    const response = await fetch(`http://localhost:3000/comments/${id}`, {
      method: 'GET',
      headers: headers,  // Menggunakan headers yang sudah disiapkan
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch comment with ID ${id}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching comment with ID ${id}:`, error);
    throw error;
  }
};

// Fungsi untuk memperbarui komentar berdasarkan ID
export const update = async (id, commentData) => {
  try {
    const headers = getRequestHeaders();  // Ambil headers dengan token

    // Kirim data komentar dengan PUT
    const response = await fetch(`http://localhost:3000/comments/${id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(commentData),  // Data yang akan diperbarui
    });

    if (!response.ok) {
      throw new Error(`Failed to update comment with ID ${id}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error updating comment with ID ${id}:`, error);
    throw error;
  }
};

// Fungsi untuk menghapus komentar berdasarkan ID
export const remove = async (id) => {
  try {
    const headers = getRequestHeaders();  // Ambil headers dengan token

    const response = await fetch(`http://localhost:3000/comments/${id}`, {
      method: 'DELETE',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to delete comment with ID ${id}: ${response.statusText}`);
    }

    return await response.json();  // Mengembalikan response JSON setelah penghapusan
  } catch (error) {
    console.error(`Error deleting comment with ID ${id}:`, error);
    throw error;
  }
};
