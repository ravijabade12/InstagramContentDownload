import React from 'react';

const GradientBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-48 left-1/2 transform -translate-x-1/2">
      <div className="w-[800px] h-[800px] bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl" />
    </div>
    <div className="absolute top-0 right-0">
      <div className="w-[400px] h-[400px] bg-gradient-to-l from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl" />
    </div>
    <div className="absolute -bottom-48 left-0">
      <div className="w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/25 to-pink-500/25 rounded-full blur-3xl" />
    </div>
  </div>
)

export default GradientBackground;