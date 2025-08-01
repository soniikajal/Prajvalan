
import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const SuccessStories = () => {
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);

  const stories = [
    {
      id: 1,
      name: 'Aastha Pandey',
      startup: 'Trikavach',
      image: '/images/AasthaPandey.png',
      quote: 'The difficulties we perceive often exist only in our imagination.',
      achievement: 'Raised ₹15k+ for Trikavach , a self defense product line'
    },
    {
      id: 2,
      name: 'Kajal Soni',
      startup: 'NSUT Orbit',
      image: '/images/KajalSoni.jpg',
      quote: 'The fear of failure is often greater than the failure itself.',
      achievement: 'Making college feel less overwhelming for freshers.'
    },
    {
      id: 3,
      name: 'Durgesh Bansal',
      startup: 'Unimart',
      image: '/images/DurgeshBansal.jpg',
      quote: 'Giving up is the only sure way to fail.',
      achievement: 'College Marketplace for Buying, Selling, and Renting'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-prajvalan-dark-navy to-prajvalan-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-prajvalan-orange/10 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-prajvalan-bright-orange/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-r from-prajvalan-navy/20 to-prajvalan-orange/20 rounded-full blur-lg animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Voices of Growth</h2>
          <p className="text-xl text-gray-300">Stories that inspire the next generation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={story.id} 
              className="bg-card/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-card/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group perspective-1000"
              onMouseEnter={() => setHoveredStory(story.id)}
              onMouseLeave={() => setHoveredStory(null)}
              style={{
                transform: hoveredStory === story.id 
                  ? `perspective(1000px) rotateX(5deg) rotateY(${index === 1 ? 0 : index === 0 ? -5 : 5}deg) translateZ(20px)` 
                  : 'none',
                boxShadow: hoveredStory === story.id 
                  ? '0 20px 40px rgba(255, 120, 0, 0.3), 0 0 30px rgba(255, 120, 0, 0.1)' 
                  : 'none',
              }}
            >
              <Quote className="text-prajvalan-orange mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" size={32} />
              <p className="text-gray-300 text-lg mb-6 leading-relaxed font-display-italic group-hover:text-white transition-colors duration-300">
                "{story.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-prajvalan-orange group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="object-cover w-full h-full rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-prajvalan-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-heading font-semibold group-hover:text-prajvalan-bright-orange transition-colors duration-300">
                    {story.name}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {story.startup}
                  </p>
                  <p className="text-prajvalan-orange text-sm font-medium group-hover:text-prajvalan-bright-orange transition-colors duration-300">
                    {story.achievement}
                  </p>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-prajvalan-orange/50 transition-all duration-300"></div>
              
              {/* Floating accent */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-prajvalan-orange rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
