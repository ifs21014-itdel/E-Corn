import React from 'react';

const AboutList = () => {
  const data = [
    {
      judul: 'Tentang Aplikasi',
      deskripsiSingkat: 'Aplikasi untuk pengelolaan data.',
      deskripsiPanjang: 'Aplikasi ini dirancang untuk memudahkan pengelolaan data pengguna, berita, dan komunitas.',
      gambar: 'gambar1.jpg',
    },
    {
      judul: 'Fitur Unggulan',
      deskripsiSingkat: 'Fitur canggih untuk produktivitas.',
      deskripsiPanjang: 'Fitur seperti pengelolaan pengguna, berita, dan pengaturan komunitas tersedia di aplikasi ini.',
      gambar: 'gambar2.jpg',
    },
  ];

  const handleEdit = (index) => {
    console.log(`Edit item at index ${index}`);
  };

  const handleDelete = (index) => {
    console.log(`Delete item at index ${index}`);
  };

  const toggleModal = () => {
    console.log('Open modal to add about');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center my-6">About List</h2>

      {/* Button */}
      <div className="flex justify-end max-w-7xl mx-auto mb-4">
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Tambah About
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2 text-left w-1/12">#</th>
              <th className="border px-4 py-2 text-left w-2/12">Judul</th>
              <th className="border px-4 py-2 text-left w-3/12">Deskripsi Singkat</th>
              <th className="border px-4 py-2 text-left w-4/12">Deskripsi Panjang</th>
              <th className="border px-4 py-2 text-left w-1/12">Gambar</th>
              <th className="border px-4 py-2 text-center w-1/12">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{item.judul}</td>
                <td className="border px-4 py-2">{item.deskripsiSingkat}</td>
                <td className="border px-4 py-2">{item.deskripsiPanjang}</td>
                <td className="border px-4 py-2 text-center">
                  <img
                    src={`/${item.gambar}`}
                    alt="gambar"
                    className="h-12 w-12 object-cover rounded-lg mx-auto"
                  />
                  <div>{item.gambar}</div>
                </td>
                <td className="border px-4 py-2 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutList;
