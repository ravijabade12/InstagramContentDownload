import React from 'react';
import { FaDownload } from 'react-icons/fa';

const CallToAction = () => (
  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="#download"
      className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <FaDownload className="mr-2" />
      Start Downloading
    </a>
    <a
      href="#features"
      className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-gray-900 bg-white/80 hover:bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      Learn More
    </a>
  </div>
);

export default CallToAction;