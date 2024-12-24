import React from 'react';
import { FaInstagram, FaVideo, FaImage, FaPlayCircle } from 'react-icons/fa';
import GradientBackground from './GradientBackground';
import FeatureCard from './FeatureCard';
import CallToAction from './CallToAction';

const quickFeatures = [
  {
    icon: FaInstagram,
    title: 'Stories',
    description: 'Download Instagram stories before they disappear'
  },
  {
    icon: FaVideo,
    title: 'Reels',
    description: 'Save your favorite reels in high quality'
  },
  {
    icon: FaImage,
    title: 'Posts',
    description: 'Download photos and carousel posts easily'
  },
  {
    icon: FaPlayCircle,
    title: 'Videos',
    description: 'Get IGTV and video posts in full quality'
  }
];

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      <GradientBackground />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                Download Instagram
              </span>
              <br />
              <span className="text-gray-900">Content Instantly</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
              Download posts, reels, videos, and stories from public Instagram accounts
              with just one click. Fast, free, and easy to use.
            </p>
            
            <CallToAction />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {quickFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;