import { useState } from "react";
import { FaComment, FaUserCircle } from "react-icons/fa";

export default function Komunitas() {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Pengaruh Biochar Terhadap Kesuburan Tanah",
      content: "Bagaimana biochar dapat membantu meningkatkan kualitas tanah?",
      author: "Budi",
      comments: [
        { user: "Ani", text: "Ini sangat membantu!" },
        { user: "Rahman", text: "Saya tertarik mencoba biochar di kebun saya." },
      ],
      image: null,
    },
    {
      id: 2,
      title: "Manfaat Pakan Ternak dari Limbah Jagung",
      content: "Apakah ada yang sudah mencoba menggunakan pakan ternak dari limbah jagung?",
      author: "Siti",
      comments: [
        { user: "Dewi", text: "Saya sudah mencobanya dan berhasil." },
        { user: "Andi", text: "Butuh informasi lebih lanjut." },
      ],
      image: null,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);

  const handleAddDiscussion = () => {
    if (newTitle.trim() && newContent.trim() && newAuthor.trim()) {
      const newDiscussion = {
        id: discussions.length + 1,
        title: newTitle,
        content: newContent,
        author: newAuthor,
        comments: [],
        image: newImage,
      };
      setDiscussions((prevDiscussions) => [...prevDiscussions, newDiscussion]);
      setNewTitle("");
      setNewContent("");
      setNewAuthor("");
      setNewImage(null);
      setIsModalOpen(false);
    }
  };

  const openCommentModal = (discussion) => {
    setSelectedDiscussion(discussion);
    setIsCommentModalOpen(true);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const updatedDiscussions = discussions.map((discussion) =>
        discussion.id === selectedDiscussion.id
          ? {
              ...discussion,
              comments: [...discussion.comments, { user: "Pengguna", text: newComment }],
            }
          : discussion
      );
      setDiscussions(updatedDiscussions);
      setNewComment("");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pt-40 bg-gray-50 min-h-screen">
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Forum Diskusi</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
          >
            Mulai Diskusi Baru
          </button>
        </div>
        <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
          Diskusikan kendalamu, serta bagikan tips terbaikmu kepada para petani lain dan dapatkan informasi terbaru lainnya.
        </p>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col space-y-4 w-full max-w-3xl">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-1 text-green-700">{discussion.title}</h3>
                <p className="text-gray-500 mb-3 text-sm">
                  <strong>Penulis:</strong> {discussion.author}
                </p>
                {discussion.image && (
                  <img src={discussion.image} alt="Discussion" className="w-full h-auto rounded mb-3" />
                )}
                <p className="text-gray-700 mb-4">{discussion.content}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => openCommentModal(discussion)}
                    className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <FaComment className="mr-2 text-2xl" />
                    <span>{discussion.comments.length} Komentar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tambah Diskusi Baru</h3>
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
              <input
                type="file"
                onChange={handleImageUpload}
                className="mb-4 w-full"
              />
              {newImage && (
                <img src={newImage} alt="Preview" className="w-full h-auto rounded mb-4" />
              )}
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-500 bg-gray-200 rounded font-semibold hover:bg-gray-300 transition"
                >
                  Batal
                </button>
                <button
                  onClick={handleAddDiscussion}
                  className="px-4 py-2 bg-green-700 text-white rounded font-bold hover:bg-green-800 transition"
                >
                  Tambah Diskusi
                </button>
              </div>
            </div>
          </div>
        )}

        {isCommentModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{selectedDiscussion.title} - Komentar</h3>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {selectedDiscussion.comments.length > 0 ? (
                  selectedDiscussion.comments.map((comment, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaUserCircle className="text-gray-400 text-3xl" />
                      <div className="bg-gray-100 p-3 rounded-lg w-full">
                        <p className="text-gray-700 font-semibold">{comment.user}</p>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">Belum ada komentar.</p>
                )}
              </div>
              <div className="mt-4">
                <textarea
                  placeholder="Tambahkan komentar Anda..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none mb-4"
                  rows="3"
                />
                <button
                  onClick={handleAddComment}
                  className="px-4 py-2 bg-blue-500 text-white rounded font-bold hover:bg-blue-600 transition"
                >
                  Tambah Komentar
                </button>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setIsCommentModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded font-semibold hover:bg-gray-400 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
