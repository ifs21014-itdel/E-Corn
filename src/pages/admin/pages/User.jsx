import { useEffect, useState } from "react";
import { getAllUsers, registerUser, editUser, deleteUser } from "../../../services/AuthService";

export default function User() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [isModalOpen, setModalOpen] = useState(false); 
  const [isEditMode, setEditMode] = useState(false); 
  const [currentUserId, setCurrentUserId] = useState(null); 
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  }); // State untuk form tambah/edit user

  // Fungsi untuk mengambil data user
  const fetchUsers = async () => {
    try {
      const data = await getAllUsers(); // Gunakan service untuk API call
      setUsers(data.users || []); // Simpan data
    } catch (err) {
      setError(err.message || "Failed to fetch users"); // Tangani error
    } finally {
      setLoading(false); // Set loading selesai
    }
  };

  // Fungsi untuk menambahkan user baru
  const handleAddUser = async () => {
    try {
      await registerUser(userForm.username, userForm.email, userForm.password, userForm.role);
      fetchUsers(); // Refresh data user setelah berhasil tambah
      closeModal(); // Tutup modal dan reset form
    } catch (err) {
      alert(err.message || "Failed to add user");
    }
  };

  // Fungsi untuk mengedit user
  const handleEditUser = async () => {
    try {
      await editUser(currentUserId, {
        username: userForm.username,
        email: userForm.email,
        role: userForm.role,
        ...(userForm.password && { password: userForm.password }), // Kirim password hanya jika diisi
      });
      fetchUsers(); // Refresh data user setelah berhasil edit
      closeModal(); // Tutup modal dan reset form
    } catch (err) {
      alert(err.message || "Failed to edit user");
    }
  };

  // Fungsi untuk menghapus user
  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id); // Panggil API untuk hapus user
        fetchUsers(); // Refresh data user setelah berhasil hapus
      } catch (err) {
        alert(err.message || "Failed to delete user");
      }
    }
  };

  // Fungsi untuk membuka modal tambah/edit
  const openModal = (user = null) => {
    if (user) {
      // Mode edit
      setEditMode(true);
      setCurrentUserId(user.id);
      setUserForm({
        username: user.username,
        email: user.email,
        password: "",
        role: user.role,
      });
    } else {
      // Mode tambah
      setEditMode(false);
      setUserForm({
        username: "",
        email: "",
        password: "",
        role: "user",
      });
    }
    setModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalOpen(false);
    setEditMode(false);
    setCurrentUserId(null);
    setUserForm({ username: "", email: "", password: "", role: "user" });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 px-4 lg:px-8">
      <h1 className="text-2xl font-bold text-center mb-6">User List</h1>
      {/* Tombol Add User */}
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={() => openModal()}
        >
          Add User
        </button>
      </div>

      {/* Tabel User */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 border-b text-left">#</th>
              <th className="py-3 px-4 border-b text-left">Username</th>
              <th className="py-3 px-4 border-b text-left">Email</th>
              <th className="py-3 px-4 border-b text-left">Role</th>
              <th className="py-3 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 border-b text-left">{index + 1}</td>
                <td className="py-3 px-4 border-b text-left">{user.username}</td>
                <td className="py-3 px-4 border-b text-left">{user.email}</td>
                <td className="py-3 px-4 border-b text-left">{user.role}</td>
                <td className="py-3 px-4 border-b text-left">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-yellow-600"
                    onClick={() => openModal(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Add/Edit User */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{isEditMode ? "Edit User" : "Add New User"}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                isEditMode ? handleEditUser() : handleAddUser();
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  value={userForm.username}
                  onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={userForm.email}
                  onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={userForm.password}
                  onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder={isEditMode ? "Leave blank to keep current password" : "Enter password"}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Role</label>
                <select
                  value={userForm.role}
                  onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
