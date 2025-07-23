
import React, { useState } from 'react';
import { Users, Lightbulb, DollarSign, Network, Award, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const WhyUs = () => {
  const [selectedOffering, setSelectedOffering] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const offerings = [
    {
      id: 1,
      title: 'Expert Mentorship',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      description: 'Connect with industry veterans and successful entrepreneurs who guide you through every step.',
      details: 'Our mentorship program pairs you with experienced professionals from your industry. Get personalized guidance, regular check-ins, and access to exclusive masterclasses.',
      benefits: ['1-on-1 mentoring sessions', 'Industry expert network', 'Personalized growth plans', 'Regular progress reviews'],
      stats: '200+ mentors across industries'
    },
    {
      id: 2,
      title: 'Innovation Labs',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
      description: 'Access state-of-the-art facilities, co-working spaces, and prototyping labs.',
      details: '24/7 access to maker spaces, 3D printing, IoT labs, and collaboration areas. Plus, regular innovation workshops and design thinking sessions.',
      benefits: ['24/7 lab access', '3D printing facilities', 'IoT development kits', 'Collaboration spaces'],
      stats: '15 cities with innovation hubs'
    },
    {
      id: 3,
      title: 'Funding Navigation',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      description: 'Navigate grants, investments, and funding opportunities with expert guidance.',
      details: 'From government grants to angel investments, we help you identify, apply for, and secure funding. Includes pitch deck workshops and investor connects.',
      benefits: ['Grant application support', 'Investor connections', 'Pitch deck workshops', 'Funding strategy planning'],
      stats: '₹50+ crores funding facilitated'
    },
    {
      id: 4,
      title: 'Global Network',
      icon: Network,
      color: 'from-orange-500 to-red-500',
      description: 'Join a thriving community of student entrepreneurs and industry professionals.',
      details: 'Regular networking events, startup showcases, and connections with 500+ alumni working in top companies and running successful startups.',
      benefits: ['Alumni network access', 'Regular networking events', 'Industry connections', 'International partnerships'],
      stats: '500+ active alumni network'
    },
    {
      id: 5,
      title: 'Recognition Platform',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      description: 'Showcase your startup on national platforms and compete in prestigious competitions.',
      details: 'Opportunities to present at major conferences, startup competitions, and government initiatives. Get featured in media and industry publications.',
      benefits: ['National platform access', 'Competition opportunities', 'Media coverage', 'Industry recognition'],
      stats: '100+ startups featured nationally'
    },
    {
      id: 6,
      title: 'Supportive Community',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      description: 'Be part of an ecosystem that celebrates collaboration over competition.',
      details: 'Join study groups, peer mentoring circles, and social events. Access to mental health support and work-life balance workshops.',
      benefits: ['Peer support groups', 'Mental health resources', 'Social events', 'Collaborative environment'],
      stats: '95% student satisfaction rate'
    }
  ];

  const achievements = [
    { number: '1000+', label: 'Students Mentored' },
    { number: '300+', label: 'Startups Launched' },
    { number: '₹50Cr+', label: 'Funding Facilitated' },
    { number: '15+', label: 'Cities Covered' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-prajvalan-dark-navy/20 to-background">
      
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-prajvalan-orange/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-prajvalan-bright-orange/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">Why Choose Prajvalan?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive support ecosystem designed to transform your innovative ideas into successful ventures
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-prajvalan-orange mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {offerings.map((item, index) => {
              const IconComponent = item.icon;
              const isHovered = hoveredItem === item.id;
              
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedOffering(item)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group cursor-pointer transform perspective-1000"
                  style={{
                    transform: isHovered 
                      ? `perspective(1000px) rotateX(10deg) rotateY(${index % 2 === 0 ? -5 : 5}deg) translateZ(20px) scale(1.05)` 
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border group-hover:border-prajvalan-orange/50 relative overflow-hidden h-full">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-prajvalan-orange/5 via-transparent to-prajvalan-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-prajvalan-orange rounded-full opacity-0 group-hover:opacity-60 animate-ping transition-opacity duration-300"></div>

                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl relative z-10`}>
                      <IconComponent className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-prajvalan-orange transition-colors duration-300 relative z-10">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300 relative z-10">
                      {item.description}
                    </p>

                    <div className="text-sm text-prajvalan-bright-orange font-medium mb-4 relative z-10">
                      {item.stats}
                    </div>
                    
                    <div className="text-sm text-prajvalan-orange font-medium group-hover:text-prajvalan-bright-orange transition-colors duration-300 flex items-center relative z-10">
                      Learn more 
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-prajvalan-orange/10 to-prajvalan-bright-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-prajvalan-orange/5 via-transparent to-prajvalan-navy/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Ready to Start Your Journey?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of students who have transformed their ideas into successful ventures with Prajvalan's support.
                </p>
<a
  href="https://chat.whatsapp.com/LIHXPUSBEfuH7tSKEWnYZk"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <button className="bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1">
    Join Prajvalan Today
  </button>
</a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedOffering && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card/95 backdrop-blur-md rounded-2xl max-w-2xl w-full p-8 border border-prajvalan-orange/30 shadow-2xl transform animate-scale-in">
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedOffering.color} flex items-center justify-center shadow-lg`}>
                <selectedOffering.icon className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">{selectedOffering.title}</h3>
                <p className="text-prajvalan-bright-orange font-medium">{selectedOffering.stats}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">{selectedOffering.details}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-heading font-semibold text-foreground mb-3">What You Get:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedOffering.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-prajvalan-orange flex-shrink-0" size={16} />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => setSelectedOffering(null)}
              className="w-full bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange text-white py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyUs;
