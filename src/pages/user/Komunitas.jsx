import { useState, useEffect } from "react";
import { FaComment, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAll as getAllTopics, createTopic } from "../../services/TopicService";
import { getAll as getAllComments, create as createComment } from "../../services/CommentService";

export default function Komunitas() {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [discussions, setDiscussions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);

  const navigate = useNavigate();

  const fetchDiscussions = async () => {
    try {
      const topics = await getAllTopics();
      const discussionsWithComments = await Promise.all(
        topics.map(async (topic) => {
          const comments = await getAllComments(topic.id);
          return { ...topic, comments: comments || [] };
        })
      );
      setDiscussions(discussionsWithComments);
    } catch (error) {
      console.error("Error fetching discussions and comments:", error);
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  const handleAddDiscussion = async () => {
    if (newTitle.trim() && newContent.trim() && newAuthor.trim() && newImage) {
      const formData = new FormData();
      formData.append("title", newTitle);
      formData.append("content", newContent);
      formData.append("author", newAuthor);
      formData.append("image", newImage);

      try {
        await createTopic(formData);
        setNewTitle("");
        setNewContent("");
        setNewAuthor("");
        setNewImage(null);
        setIsModalOpen(false);

        // Refresh discussions after adding a new topic
        await fetchDiscussions();
        navigate("/komunitas");
      } catch (error) {
        console.error("Error adding discussion:", error);
      }
    }
  };

  const openCommentModal = (discussion) => {
    setSelectedDiscussion(discussion);
    setIsCommentModalOpen(true);
  };

  const handleAddComment = async () => {
    if (newComment.trim() && selectedDiscussion) {
      const userId = localStorage.getItem("userId") || "Pengguna";
      const commentData = { user: userId, text: newComment };

      try {
        const newCommentResponse = await createComment(selectedDiscussion.id, commentData);

        // Update comments in selectedDiscussion
        const updatedComments = [...selectedDiscussion.comments, newCommentResponse];

        // Update state selectedDiscussion
        setSelectedDiscussion((prev) => ({ ...prev, comments: updatedComments }));

        // Refresh discussions after adding a new comment
        await fetchDiscussions();
        setNewComment(""); // Clear the input
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
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

        <div className="flex flex-col space-y-4 w-full max-w-3xl mx-auto">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-1 text-green-700">{discussion.title}</h3>
              <p className="text-gray-500 mb-3 text-sm">
                <strong>Penulis:</strong> {discussion.author}
              </p>
              {discussion.image_url && (
                <img
                  src={`http://localhost:3000/uploads/${discussion.image_url}`}
                  alt="Discussion"
                  className="w-full max-h-[300px] object-cover rounded mb-3"
                />
              )}
              <p className="text-gray-700 mb-4">{discussion.content}</p>
              <button
                onClick={() => openCommentModal(discussion)}
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                <FaComment className="mr-2 text-2xl" />
                <span>{discussion.comments.length} Komentar</span>
              </button>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-2xl font-semibold mb-4">Tambah Diskusi Baru</h3>
              <input
                type="text"
                placeholder="Nama Penulis"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                className="w-full mb-4 border px-4 py-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Judul Diskusi"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full mb-4 border px-4 py-2 rounded-lg"
              />
              <textarea
                placeholder="Isi Diskusi"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full mb-4 border px-4 py-2 rounded-lg"
                rows="4"
              />
              <input type="file" onChange={handleImageUpload} className="w-full mb-4" />
              <div className="flex justify-end space-x-4">
                <button onClick={() => setIsModalOpen(false)} className="bg-gray-200 px-4 py-2 rounded">
                  Batal
                </button>
                <button
                  onClick={handleAddDiscussion}
                  className={`bg-green-600 text-white px-4 py-2 rounded ${
                    !newImage && "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!newImage}
                >
                  Tambah Diskusi
                </button>
              </div>
            </div>
          </div>
        )}

        {isCommentModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-10/12 max-w-3xl">
              <h3 className="text-2xl font-semibold mb-4">{selectedDiscussion.title} - Komentar</h3>
              <div className="max-h-[300px] overflow-y-auto space-y-4">
                {selectedDiscussion.comments.map((comment, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FaUserCircle className="text-gray-500 text-2xl" />
                    <div>
                      <p className="font-semibold">{comment.author}</p>
                      <p className="text-sm text-gray-600">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <textarea
                placeholder="Tambahkan komentar"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full mt-4 mb-4 border px-4 py-2 rounded-lg"
                rows="3"
              />
              <div className="flex justify-end space-x-4">
                <button onClick={() => setIsCommentModalOpen(false)} className="bg-gray-200 px-4 py-2 rounded">
                  Tutup
                </button>
                <button onClick={handleAddComment} className="bg-green-600 text-white px-4 py-2 rounded">
                  Kirim Komentar
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
