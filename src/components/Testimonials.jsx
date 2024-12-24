import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      image: 'https://i.pravatar.cc/150?img=1',
      quote: 'This tool has made my content curation so much easier. I love how simple it is to use!'
    },
    {
      name: 'Mike Chen',
      role: 'Digital Marketer',
      image: 'https://i.pravatar.cc/150?img=2',
      quote: 'The best Instagram downloader I\'ve used. Fast, reliable, and user-friendly.'
    },
    {
      name: 'Emma Davis',
      role: 'Social Media Manager',
      image: 'https://i.pravatar.cc/150?img=3',
      quote: 'A must-have tool for anyone working with Instagram content professionally.'
    }
  ];

  return (
    <div id="testimonials" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            What Our Users Say
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;