import React from "react";
import { FaDownload } from "react-icons/fa";
import { downloadMedia } from "../../utils/downloadHelper";

const MediaItem = ({ item, index }) => (
  <div className="relative">
    {item.type === "video" ? (
      <video
        src={item.url}
        className="w-full h-48 object-cover rounded-lg"
        controls
        controlsList="nodownload"
        crossOrigin="anonymous"
      />
    ) : (
      <img
        src={item.url}
        alt={`Content ${index + 1}`}
        className="w-full h-48 object-cover rounded-lg"
        crossOrigin="anonymous"
      />
    )}
    <button
      onClick={() => downloadMedia(item.url, item.type)}
      className="absolute bottom-2 right-2 bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      aria-label="Download content"
    >
      <FaDownload />
    </button>
  </div>
);

export default MediaItem;
