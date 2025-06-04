
import React, { useState } from 'react';
import { Users, Lightbulb, DollarSign, Network, Award, Heart } from 'lucide-react';

const WhyPrajvalan = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const offerings = [
    {
      id: 1,
      title: 'Mentorship',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      description: 'Connect with industry veterans and successful entrepreneurs who guide you through every step of your startup journey.',
      details: 'Our mentorship program pairs you with experienced professionals from your industry. Get personalized guidance, regular check-ins, and access to exclusive masterclasses.'
    },
    {
      id: 2,
      title: 'Innovation Hub',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
      description: 'Access state-of-the-art facilities, co-working spaces, and prototyping labs to bring your ideas to life.',
      details: '24/7 access to maker spaces, 3D printing, IoT labs, and collaboration areas. Plus, regular innovation workshops and design thinking sessions.'
    },
    {
      id: 3,
      title: 'Funding Support',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      description: 'Navigate the complex world of grants, investments, and funding opportunities with expert guidance.',
      details: 'From government grants to angel investments, we help you identify, apply for, and secure funding. Includes pitch deck workshops and investor connects.'
    },
    {
      id: 4,
      title: 'Networking',
      icon: Network,
      color: 'from-orange-500 to-red-500',
      description: 'Join a thriving community of student entrepreneurs, alumni, and industry professionals.',
      details: 'Regular networking events, startup showcases, and connections with 500+ alumni working in top companies and running successful startups.'
    },
    {
      id: 5,
      title: 'Recognition',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      description: 'Showcase your startup on national platforms and compete in prestigious competitions.',
      details: 'Opportunities to present at major conferences, startup competitions, and government initiatives. Get featured in media and industry publications.'
    },
    {
      id: 6,
      title: 'Community',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      description: 'Be part of a supportive ecosystem that celebrates collaboration over competition.',
      details: 'Join study groups, peer mentoring circles, and social events. Access to mental health support and work-life balance workshops.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-prajvalan-dark-navy via-background to-prajvalan-navy relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,120,0,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(30,41,59,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Prajvalan?</h2>
          <p className="text-xl text-muted-foreground">Comprehensive support for your entrepreneurial journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredItem === item.id;
            
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group cursor-pointer transform perspective-1000"
                style={{
                  transform: isHovered 
                    ? `perspective(1000px) rotateX(10deg) rotateY(${index % 2 === 0 ? -5 : 5}deg) translateZ(20px) scale(1.05)` 
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border group-hover:border-prajvalan-orange/50 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-prajvalan-orange/5 via-transparent to-prajvalan-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-prajvalan-orange rounded-full opacity-0 group-hover:opacity-60 animate-ping transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-prajvalan-bright-orange rounded-full opacity-0 group-hover:opacity-40 animate-pulse transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>

                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl relative z-10`}>
                    <IconComponent className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-prajvalan-orange transition-colors duration-300 relative z-10">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 relative z-10">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 text-sm text-prajvalan-orange font-medium group-hover:text-prajvalan-bright-orange transition-colors duration-300 flex items-center relative z-10">
                    Click to learn more 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-prajvalan-orange/10 to-prajvalan-bright-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-card/95 backdrop-blur-md rounded-2xl max-w-lg w-full p-8 border border-prajvalan-orange/30 shadow-2xl transform animate-scale-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedItem.color} flex items-center justify-center shadow-lg`}>
                  <selectedItem.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{selectedItem.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{selectedItem.details}</p>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-full bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange text-white py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Got it!
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyPrajvalan;
