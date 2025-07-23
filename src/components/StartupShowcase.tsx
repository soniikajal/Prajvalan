
import React, { useState } from 'react';
import { X } from 'lucide-react';

const StartupShowcase = () => {
  const [selectedStartup, setSelectedStartup] = useState(null);

  const startups = [
    {
      id: 1,
      name: 'Trikavach',
      founder: 'Aastha Pandey',
      tagline: 'Self defense product line',
      logo: '🌱',
      category: 'Product',
      description: 'Trikavach is a self-defense product line born out of necessity — a bold step toward reclaiming personal safety in an increasingly unpredictable world. Designed with empathy, functionality, and aesthetics in mind, Trikavach aims to empower individuals to move through the world with more confidence and less fear. We\’re not just building safety gadgets — we\’re building a community. Every product is co-created with real users through continuous feedback and testing, ensuring it fits seamlessly into everyday life while delivering powerful protection when it matters most.',
      vision: 'To make safety that actually works — not just a privilege or afterthought. We envision a world where everyone, regardless of gender or location, has the means to feel protected and prepared. Through design-driven innovation, awareness, and community-led development, Trikavach strives to build a future where personal safety is a right, not a reaction.',
      journey: 'Trikavach started with one simple question — why do most people still feel unsafe even today? After months of real conversations and feedback, the product is almost done with prototyping — built with and for the community',
      website: 'https://ecotrack.com',
      funding: 'Rs 20k Raised'
    },
    {
      id: 2,
      name: 'Baubaki',
      founder: 'Gaurav',
      tagline: 'Next-gen clothing brand that merges physical fashion with immersive tech like AR and VR.',
      logo: '🌉',
      category: 'Tech and Faishon',
      description: 'AI-powered platform matching students with industry professionals for personalized mentorship.',
      vision: 'Bridging the gap between academic learning and industry requirements through meaningful connections.',
      journey: 'Launched during lockdown, helped 10,000+ students connect with mentors.',
      website: 'https://skillbridge.com',
      funding: 'Rs 10,000 Raised'
    },
    {
      id: 3,
      name: 'Unimart',
      founder: 'Durgesh Soni',
      tagline: 'College Marketplace for Buying, Selling, and Renting',
      logo: '🚚',
      category: 'Tech',
      description: 'Eliminating middlemen to connect farmers directly with consumers for fresh, affordable produce.',
      vision: 'Empowering farmers with fair prices while providing consumers with fresh, traceable produce.',
      journey: 'Started with 5 farmers, now serving 100+ farmers across 3 states.',
      website: 'https://farmfresh.com',
      funding: '₹80L raised'
    },
    {
      id: 4,
      name: 'NSUT Orbit',
      founder: 'Kajal Soni',
      tagline: 'To help freshers feel less lost and more connected to their colleges',
      logo: '🎮',
      category: 'Tech',
      description: 'Gamified learning platform for K-12 students with interactive educational content.',
      vision: 'Transforming education by making learning as engaging as playing games.',
      journey: 'Beta tested with 1000 students, now used in 50+ schools.',
      website: 'https://edugamefy.com',
      funding: '₹50L raised'
    },
    {
      id: 5,
      name: 'SynergyX',
      founder: 'Taniska Khandelwal',
      tagline: 'A tech-driven platform empowering students, freelancers, and professionals to transition from learning to earning',
      logo: '🎨',
      category: 'Tech',
      description: 'Digital marketplace connecting rural artisans with global customers.',
      vision: 'Preserving traditional crafts while providing sustainable livelihoods to artisans.',
      journey: 'Onboarded 200+ artisans, shipped to 15+ countries.',
      website: 'https://craftco.com',
      funding: '₹1.5 Cr raised'
    },
    
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-prajvalan-dark-navy via-background to-prajvalan-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-prajvalan-orange/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-prajvalan-bright-orange/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-prajvalan-navy/20 rounded-full blur-lg animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Our Top Startups</h2>
          <p className="text-xl text-muted-foreground">Meet the innovative minds shaping tomorrow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <div
              key={startup.id}
              onClick={() => setSelectedStartup(startup)}
              className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer border border-border group p-6 relative overflow-hidden"
              style={{
                transform: `perspective(1000px) rotateY(${Math.sin(index * 0.5) * 3}deg)`,
              }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-prajvalan-orange/5 via-transparent to-prajvalan-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-4xl mb-4 text-center transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 relative z-10">{startup.logo}</div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-prajvalan-orange transition-colors duration-300 relative z-10">{startup.name}</h3>
              <p className="text-prajvalan-bright-orange font-medium mb-2 relative z-10">By {startup.founder}</p>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300 relative z-10">{startup.tagline}</p>
              <div className="mt-4 text-xs text-prajvalan-orange font-medium uppercase tracking-wide group-hover:text-prajvalan-bright-orange transition-colors duration-300 relative z-10">
                Click to learn more
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-prajvalan-orange/50 rounded-xl transition-all duration-300"></div>
              
              {/* Floating accent */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-prajvalan-orange rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedStartup && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-card/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-prajvalan-orange/30 shadow-2xl">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl transform hover:scale-110 transition-transform duration-300">{selectedStartup.logo}</div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">{selectedStartup.name}</h3>
                      <p className="text-prajvalan-bright-orange font-medium">Founded by {selectedStartup.founder}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedStartup(null)}
                    className="text-muted-foreground hover:text-prajvalan-orange transition-colors duration-300 transform hover:scale-110"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-foreground mb-2">About</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedStartup.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Vision</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedStartup.vision}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Journey</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedStartup.journey}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StartupShowcase;
