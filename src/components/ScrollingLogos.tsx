
import React from 'react';

const ScrollingLogos = () => {
  const logos = [
    { name: 'BIRAC', type: 'Government' },
    { name: 'SIDBI', type: 'Government' },
    { name: 'Startup India', type: 'Government' },
    { name: 'Sequoia Capital', type: 'Private' },
    { name: 'Accel Partners', type: 'Private' },
    { name: 'Matrix Partners', type: 'Private' },
    { name: 'Kalaari Capital', type: 'Private' },
    { name: 'Blume Ventures', type: 'Private' },
    { name: 'NASSCOM', type: 'Organization' },
    { name: 'TiE', type: 'Organization' },
  ];

  return (
    <section className="py-12 bg-card relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-prajvalan-dark-navy/5 via-transparent to-prajvalan-orange/5 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-center text-2xl font-heading font-semibold text-foreground mb-8 transform hover:scale-105 transition-transform duration-300">
          Connecting You to Leading Funding Partners
        </h2>
        <div className="overflow-hidden relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-card to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-card to-transparent z-10"></div>
          
          <div className="flex animate-scroll space-x-8">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-accent/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-6 min-w-[200px] text-center border border-border transform hover:scale-110 hover:-translate-y-2 hover:rotate-1 group cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateY(${Math.sin(index * 0.5) * 5}deg)`,
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-prajvalan-navy to-prajvalan-orange rounded-full mx-auto mb-3 flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500 shadow-lg">
                  <span className="text-lg font-heading font-bold text-white group-hover:scale-125 transition-transform duration-300">
                    {logo.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-prajvalan-orange transition-colors duration-300">
                  {logo.name}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {logo.type}
                </p>
                
                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange mx-auto mt-2 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-prajvalan-orange rounded-full animate-bounce opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-6 h-6 bg-prajvalan-bright-orange rounded-full animate-pulse opacity-20"></div>
    </section>
  );
};

export default ScrollingLogos;
