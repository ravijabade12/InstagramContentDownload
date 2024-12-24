import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-pink-600 mb-4">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;