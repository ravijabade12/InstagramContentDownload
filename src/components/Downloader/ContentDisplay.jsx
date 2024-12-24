import React from "react";
import MediaItem from "./MediaItem";

const ContentDisplay = ({ content }) => {
  if (!Array.isArray(content) || content.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-900">Available Content</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {content.map((item, index) => (
          <MediaItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ContentDisplay;
