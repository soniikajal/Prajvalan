
import React, { useState } from 'react';
import { X } from 'lucide-react';

const StartupShowcase = () => {
  const [selectedStartup, setSelectedStartup] = useState(null);

  const startups = [
    {
      id: 1,
      name: 'EcoTrack',
      founder: 'Priya Sharma',
      tagline: 'Sustainable supply chain tracking',
      logo: '🌱',
      description: 'Revolutionizing how companies track their environmental impact through blockchain-powered supply chain transparency.',
      vision: 'To create a world where every product\'s environmental journey is transparent and companies are accountable for their ecological footprint.',
      journey: 'Started as a college project in 2023, now working with 50+ companies across India.',
      category: 'tech'
    },
    {
      id: 2,
      name: 'SkillBridge',
      founder: 'Arjun Patel',
      tagline: 'Connecting students with industry mentors',
      logo: '🌉',
      description: 'AI-powered platform matching students with industry professionals for personalized mentorship.',
      vision: 'Bridging the gap between academic learning and industry requirements through meaningful connections.',
      journey: 'Launched during lockdown, helped 10,000+ students connect with mentors.',
      category: 'tech'
    },
    {
      id: 3,
      name: 'FarmFresh',
      founder: 'Neha Singh',
      tagline: 'Direct farm-to-table delivery',
      logo: '🚚',
      description: 'Eliminating middlemen to connect farmers directly with consumers for fresh, affordable produce.',
      vision: 'Empowering farmers with fair prices while providing consumers with fresh, traceable produce.',
      journey: 'Started with 5 farmers, now serving 100+ farmers across 3 states.',
      category: 'product'
    },
    {
      id: 4,
      name: 'EduGamefy',
      founder: 'Rohit Kumar',
      tagline: 'Making learning fun through games',
      logo: '🎮',
      description: 'Gamified learning platform for K-12 students with interactive educational content.',
      vision: 'Transforming education by making learning as engaging as playing games.',
      journey: 'Beta tested with 1000 students, now used in 50+ schools.',
      category: 'tech'
    },
    {
      id: 5,
      name: 'CraftCo',
      founder: 'Meera Agarwal',
      tagline: 'Empowering rural artisans',
      logo: '🎨',
      description: 'Digital marketplace connecting rural artisans with global customers.',
      vision: 'Preserving traditional crafts while providing sustainable livelihoods to artisans.',
      journey: 'Onboarded 200+ artisans, shipped to 15+ countries.',
      category: 'product'
    },
    {
      id: 6,
      name: 'HealthHub',
      founder: 'Dr. Anil Reddy',
      tagline: 'Digital health for rural areas',
      logo: '💊',
      description: 'Telemedicine platform providing healthcare access to remote areas.',
      vision: 'Making quality healthcare accessible to every corner of India.',
      journey: 'Served 5000+ patients in remote areas, partnered with 100+ doctors.',
      category: 'service'
    }
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
