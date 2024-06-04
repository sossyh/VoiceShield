import React from "react";

const videos = [
  { id: 1, src: "https://www.youtube.com/watch?v=YOIUYM4MGL4&list=RDYOIUYM4MGL4&start_radio=1", title: "Video 1" },
  { id: 2, src: "https://path/to/your/video2.mp4", title: "Video 2" },
  { id: 3, src: "https://path/to/your/video3.mp4", title: "Video 3" },
  { id: 1, src: "https://path/to/your/video1.mp4", title: "Video 5" },
  { id: 2, src: "https://path/to/your/video2.mp4", title: "Video 6" },
  { id: 3, src: "https://path/to/your/video3.mp4", title: "Video 7" },
  { id: 1, src: "https://path/to/your/video1.mp4", title: "Video 1" },
  { id: 2, src: "https://path/to/your/video2.mp4", title: "Video 2" },
  { id: 3, src: "https://path/to/your/video3.mp4", title: "Video 3" },
  
];

const ShortVideos = ({ selectedComponent, handleButtonClick }) => {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 mt-24 mx-auto">

      <div className="absolute top-0 right-0 m-4 flex space-x-4">
        <button
          className={`py-2 px-4 ${
            selectedComponent === "upload"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue`}
          onClick={() => handleButtonClick("upload")}
        >
          Upload
        </button>
        <button
          className={`py-2 px-4 ${
            selectedComponent === "streamline"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue`}
          onClick={() => handleButtonClick("streamline")}
        >
          Streamline
        </button>
      </div>
      <div className="flex justify-center mt-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="relative">
              <video
                controls
                className="w-full h-auto rounded-lg shadow-md"
                poster="https://via.placeholder.com/300x200"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="hidden absolute top-0 left-0 right-0 p-2 text-center bg-black bg-opacity-50 text-white">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortVideos;
