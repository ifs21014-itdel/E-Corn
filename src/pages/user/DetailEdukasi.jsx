import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAll } from '../../services/EducationService';

export default function DetailEdukasi() {
  const { id } = useParams();
  const [education, setEducation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEducationDetail = async () => {
    try {
      const data = await getAll();
      const selectedEducation = data.find(item => item.id === parseInt(id));
      setEducation(selectedEducation);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEducationDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!education) {
    return <div>Edukasi tidak ditemukan.</div>;
  }

  const isYouTubeLink = (url) => {
    const youtubeRegex = /^https:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]{11}$/;
    return youtubeRegex.test(url);
  };

  return (
    <div className="container mx-auto p-20">
      <div className="flex flex-col items-center mb-10">
        <img
          src={`http://localhost:3000/uploads/${education.image}`}
          alt={education.title}
          className="w-1/3 h-auto rounded-md mb-4"
        />
        <div className="w-full md:w-2/3 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            {education.title}
          </h2>
          <p className="text-gray-700">
            {education.description}
          </p>
        </div>
      </div>

      <div className="mb-10">
       
        <p className="text-gray-700">
          {education.content}
        </p>
      </div>

      {education.audio_url && (
        <div className="mb-10">
          <h3 className="sr-only">Audio Tutorial</h3>
          <div className="bg-yellow-100 p-4 rounded-lg flex items-center space-x-4">
            <span className="text-gray-700">🎵</span>
            <div>
              <p className="font-semibold">Klik untuk mendengarkan tutorial</p>
              {isYouTubeLink(education.audio_url) ? (
                <div className="w-full">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${new URL(education.audio_url).searchParams.get('v')}`}
                    title="Audio Tutorial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <audio controls className="w-full">
                  <source src={`http://localhost:3000/uploads/${education.audio_url}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          </div>
        </div>
      )}

      {education.video_url && (
        <div className="mb-10">
          <h3 className="text-lg text-gray-600 text-center mb-2">
            Putar video untuk melihat tutorial
          </h3>
          {isYouTubeLink(education.video_url) ? (
            <div className="w-full">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${new URL(education.video_url).searchParams.get('v')}`}
                title="Video Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg">
              <video controls className="w-full h-full">
                <source src={`http://localhost:3000/uploads/${education.video_url}`} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
