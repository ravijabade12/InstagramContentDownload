import React from 'react';
import { FaImage, FaVideo, FaCircle, FaInstagram } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaImage className="h-6 w-6" />,
      title: 'Posts',
      description: 'Download single or multiple images from posts'
    },
    {
      icon: <FaVideo className="h-6 w-6" />,
      title: 'Reels',
      description: 'Save Instagram reels in high quality'
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      title: 'Videos',
      description: 'Download videos from posts and IGTV'
    },
    {
      icon: <FaCircle className="h-6 w-6" />,
      title: 'Stories',
      description: 'Save stories before they disappear'
    }
  ];

  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What You Can Download
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-pink-600">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;