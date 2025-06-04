
import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Calendar, DollarSign, Users } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Grants = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrant, setSelectedGrant] = useState(null);

  const grants = [
    {
      id: 1,
      name: 'BIRAC SPARSH',
      type: 'Government',
      amount: '₹50 Lakhs',
      deadline: '2024-03-15',
      logo: '🧬',
      description: 'Support for student innovators in biotechnology and healthcare.',
      eligibility: 'Final year students or recent graduates with biotech innovations',
      process: 'Online application → Pitching → Due diligence → Funding',
      website: 'https://birac.nic.in',
      status: 'Open'
    },
    {
      id: 2,
      name: 'Startup India Seed Fund',
      type: 'Government',
      amount: '₹20 Lakhs',
      deadline: '2024-04-20',
      logo: '🚀',
      description: 'Government initiative to support early-stage startups with funding.',
      eligibility: 'Startups incorporated within 2 years with innovative ideas',
      process: 'Application → Incubator selection → Validation → Funding',
      website: 'https://startupindia.gov.in',
      status: 'Open'
    },
    {
      id: 3,
      name: 'Sequoia Surge',
      type: 'Private',
      amount: '₹1-3 Crores',
      deadline: '2024-02-28',
      logo: '🌲',
      description: 'Rapid scale-up program for early-stage startups in Southeast Asia.',
      eligibility: 'Early-stage startups with strong founding teams',
      process: 'Application → Interview → Investment committee → Funding',
      website: 'https://surge.sequoiacap.com',
      status: 'Closing Soon'
    },
    {
      id: 4,
      name: 'Accel Atoms',
      type: 'Private',
      amount: '₹50 Lakhs - ₹2 Crores',
      deadline: '2024-05-10',
      logo: '⚡',
      description: 'Early-stage venture capital for technology startups.',
      eligibility: 'Tech startups with product-market fit potential',
      process: 'Pitch deck → Partner meeting → Due diligence → Term sheet',
      website: 'https://accel.com',
      status: 'Open'
    },
    {
      id: 5,
      name: 'SIDBI Fund of Funds',
      type: 'Government',
      amount: '₹10 Lakhs - ₹1 Crore',
      deadline: '2024-06-30',
      logo: '🏦',
      description: 'Government fund supporting startups through registered incubators.',
      eligibility: 'Startups registered with recognized incubators',
      process: 'Incubator nomination → Application → Review → Disbursement',
      website: 'https://sidbi.in',
      status: 'Open'
    },
    {
      id: 6,
      name: 'Blume Ventures',
      type: 'Private',
      amount: '₹25 Lakhs - ₹5 Crores',
      deadline: '2024-03-31',
      logo: '🌸',
      description: 'Early-stage VC fund focusing on consumer and B2B startups.',
      eligibility: 'Early-stage startups with innovative business models',
      process: 'Cold pitch → Screening → Partner review → Investment decision',
      website: 'https://blume.vc',
      status: 'Open'
    },
  ];

  const types = [
    { id: 'all', name: 'All Grants' },
    { id: 'Government', name: 'Government' },
    { id: 'Private', name: 'Private' },
  ];

  const filteredGrants = grants.filter(grant => {
    const matchesType = selectedType === 'all' || grant.type === selectedType;
    const matchesSearch = grant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grant.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'text-green-400 bg-green-400/20';
      case 'Closing Soon': return 'text-yellow-400 bg-yellow-400/20';
      case 'Closed': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

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
            <h1 className="text-5xl font-heading font-bold text-foreground mb-4">Funding Opportunities</h1>
            <p className="text-xl text-muted-foreground mb-8">Discover grants and funding options for your startup journey</p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search grants and funding opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-prajvalan-orange transition-all duration-300"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground z-10" size={20} />
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-prajvalan-orange transition-all duration-300 min-w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card/95 backdrop-blur-sm border-border">
                    {types.map(type => (
                      <SelectItem key={type.id} value={type.id} className="text-foreground hover:bg-accent focus:bg-accent">
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Grants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGrants.map((grant, index) => (
              <div
                key={grant.id}
                onClick={() => setSelectedGrant(grant)}
                className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer border border-border group p-6 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-prajvalan-orange/5 via-transparent to-prajvalan-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">{grant.logo}</div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium uppercase tracking-wide ${getStatusColor(grant.status)}`}>
                      {grant.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-prajvalan-orange transition-colors duration-300">
                    {grant.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign size={16} className="mr-2 text-prajvalan-orange" />
                      <span className="font-medium text-prajvalan-bright-orange">{grant.amount}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users size={16} className="mr-2 text-prajvalan-orange" />
                      <span>{grant.type}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={16} className="mr-2 text-prajvalan-orange" />
                      <span>Deadline: {grant.deadline}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors duration-300">
                    {grant.description}
                  </p>
                  
                  <div className="text-xs text-prajvalan-orange font-medium uppercase tracking-wide group-hover:text-prajvalan-bright-orange transition-colors duration-300">
                    Click for details
                  </div>
                </div>

                {/* Hover effects */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-prajvalan-orange/50 rounded-xl transition-all duration-300"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-prajvalan-orange rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {filteredGrants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No grants found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Modal */}
      {selectedGrant && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card/95 backdrop-blur-md rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-prajvalan-orange/30 shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-6">
                  <div className="text-5xl">{selectedGrant.logo}</div>
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-2">{selectedGrant.name}</h2>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-prajvalan-bright-orange font-medium text-lg">{selectedGrant.amount}</span>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wide ${getStatusColor(selectedGrant.status)}`}>
                        {selectedGrant.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground">Deadline: {selectedGrant.deadline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGrant(null)}
                  className="text-muted-foreground hover:text-prajvalan-orange transition-colors duration-300 transform hover:scale-110"
                >
                  <ExternalLink size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedGrant.description}</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Eligibility</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedGrant.eligibility}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Application Process</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedGrant.process}</p>
                  </div>
                </div>

                <div className="bg-prajvalan-navy/20 rounded-xl p-6 border border-prajvalan-orange/20">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Key Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <DollarSign className="mx-auto mb-2 text-prajvalan-orange" size={24} />
                      <p className="text-sm text-muted-foreground">Funding Amount</p>
                      <p className="font-semibold text-foreground">{selectedGrant.amount}</p>
                    </div>
                    <div className="text-center">
                      <Users className="mx-auto mb-2 text-prajvalan-orange" size={24} />
                      <p className="text-sm text-muted-foreground">Type</p>
                      <p className="font-semibold text-foreground">{selectedGrant.type}</p>
                    </div>
                    <div className="text-center">
                      <Calendar className="mx-auto mb-2 text-prajvalan-orange" size={24} />
                      <p className="text-sm text-muted-foreground">Deadline</p>
                      <p className="font-semibold text-foreground">{selectedGrant.deadline}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => window.open(selectedGrant.website, '_blank')}
                  className="bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange text-white px-8 py-3 rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Apply Now</span>
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

export default Grants;
