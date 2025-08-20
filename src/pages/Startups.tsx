
import React, { useState } from 'react';
import { Filter, Search, ExternalLink } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Startups = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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
      category: 'Tech',
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

  const categories = [
    { id: 'all', name: 'All Startups' },
    { id: 'Tech', name: 'Technology' },
    { id: 'Product', name: 'Product-based' },
    { id: 'Service', name: 'Service-based' },
  ];

  const filteredStartups = startups.filter(startup => {
    const matchesCategory = selectedCategory === 'all' || startup.category === selectedCategory;
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.founder.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-prajvalan-dark-navy/20 to-background">
      
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-prajvalan-orange/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-prajvalan-bright-orange/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-heading font-bold text-foreground mb-4">Our Startup Ecosystem</h1>
            <p className="text-xl text-muted-foreground mb-8">Discover innovative student ventures making a difference</p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search startups, founders, or ideas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-prajvalan-orange transition-all duration-300"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground z-10" size={20} />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-prajvalan-orange transition-all duration-300 min-w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card/95 backdrop-blur-sm border-border">
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.id} className="text-foreground hover:bg-accent focus:bg-accent">
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Startups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStartups.map((startup, index) => (
              <div
                key={startup.id}
                onClick={() => setSelectedStartup(startup)}
                className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer border border-border group p-6 relative overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateY(${Math.sin(index * 0.5) * 3}deg)`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-prajvalan-orange/5 via-transparent to-prajvalan-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">{startup.logo}</div>
                    <span className="text-xs bg-prajvalan-orange/20 text-prajvalan-orange px-2 py-1 rounded-full font-medium uppercase tracking-wide">
                      {startup.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-prajvalan-orange transition-colors duration-300">
                    {startup.name}
                  </h3>
                  <p className="text-prajvalan-bright-orange font-medium mb-2">By {startup.founder}</p>
                  <p className="text-muted-foreground text-sm mb-3 group-hover:text-foreground transition-colors duration-300">
                    {startup.tagline}
                  </p>
                  <p className="text-xs text-prajvalan-orange font-medium">{startup.funding}</p>
                </div>

                {/* Hover effects */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-prajvalan-orange/50 rounded-xl transition-all duration-300"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-prajvalan-orange rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {filteredStartups.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No startups found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Modal */}
      {selectedStartup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card/95 backdrop-blur-md rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-prajvalan-orange/30 shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-6">
                  <div className="text-5xl">{selectedStartup.logo}</div>
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-2">{selectedStartup.name}</h2>
                    <p className="text-prajvalan-bright-orange font-medium text-lg">Founded by {selectedStartup.founder}</p>
                    <p className="text-muted-foreground">{selectedStartup.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStartup(null)}
                  className="text-muted-foreground hover:text-prajvalan-orange transition-colors duration-300 transform hover:scale-110"
                >
                  <ExternalLink size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">About</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedStartup.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedStartup.vision}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Journey</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedStartup.journey}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">Funding Status</h4>
                      <p className="text-prajvalan-orange font-medium">{selectedStartup.funding}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Category</h4>
                      <p className="text-muted-foreground capitalize">{selectedStartup.category}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => window.open(selectedStartup.website, '_blank')}
                  className="bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange text-white px-8 py-3 rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Startups;
