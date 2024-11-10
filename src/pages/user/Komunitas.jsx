import React, { useState } from "react";

export default function Komunitas() {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Pengaruh Biochar Terhadap Kesuburan Tanah",
      content: "Bagaimana biochar dapat membantu meningkatkan kualitas tanah?",
      author: "Budi",
    },
    {
      id: 2,
      title: "Manfaat Pakan Ternak dari Limbah Jagung",
      content: "Apakah ada yang sudah mencoba menggunakan pakan ternak dari limbah jagung?",
      author: "Siti",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDiscussion = () => {
    if (newTitle.trim() && newContent.trim() && newAuthor.trim()) {
      const newDiscussion = {
        id: discussions.length + 1,
        title: newTitle,
        content: newContent,
        author: newAuthor,
      };
      // Periksa hasil console.log untuk memastikan diskusi ditambahkan
      console.log("Adding discussion:", newDiscussion);

      setDiscussions((prevDiscussions) => [...prevDiscussions, newDiscussion]); // Menambahkan diskusi baru ke state

      // Pastikan state di-reset setelah ditambahkan
      setNewTitle("");
      setNewContent("");
      setNewAuthor("");
      setIsModalOpen(false);
    }
  };

  return (
    <section className="p-10 mt-10 min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Forum Diskusi</h2>
      <p className="text-gray-700 mb-6 text-center">
        Diskusikan kendalamu, serta bagikan tips terbaikmu kepada para petani lain dan dapatkan informasi terbaru lainnya.
      </p>
      
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col space-y-4 w-full max-w-3xl">
          {/* Daftar Diskusi */}
          {discussions.map((discussion) => (
            <div key={discussion.id} className="bg-yellow-200 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{discussion.title}</h3>
              <p><strong>Penulis:</strong> {discussion.author}</p>
              <p>{discussion.content}</p>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2C4001] text-white px-6 py-3 rounded font-bold hover:bg-green-800 transition"
        >
          Tambah Diskusi
        </button>
      </div>

      {/* Modal untuk Tambah Diskusi */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-md p-3 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Tambah Diskusi Baru</h3>
            <input
              type="text"
              placeholder="Nama Penulis"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none mb-4"
            />
            <input
              type="text"
              placeholder="Judul Diskusi"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none mb-4"
            />
            <textarea
              placeholder="Tuliskan pertanyaan atau topik diskusi Anda di sini..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none mb-4"
              rows="4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-500 bg-gray-200 rounded font-semibold hover:bg-gray-300 transition"
              >
                Batal
              </button>
              <button
                onClick={handleAddDiscussion}
                className="px-4 py-2 bg-[#2C4001] text-white rounded font-bold hover:bg-green-800 transition"
              >
                Tambah Diskusi
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
