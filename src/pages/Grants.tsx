
import React, { useState } from 'react';
import { Search, ExternalLink, Calendar, DollarSign, Users } from 'lucide-react';

const Grants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrant, setSelectedGrant] = useState(null);

  const grants = [
    {
      id: 1,
      name: 'Startup India Seed Fund (SISFS)',
      type: 'Government',
      amount: 'Up to ₹20 Lakhs',
      deadline: 'Rolling basis',
      logo: '🚀',
      description: 'Grants for idea validation and product development',
      eligibility: 'Early-stage startups incorporated within 2 years',
      process: 'Online application → Incubator selection → Validation → Funding',
      website: 'https://lnkd.in/dTGGTN4s',
      status: 'Open'
    },
    {
      id: 2,
      name: 'Genesis',
      type: 'Government',
      amount: 'Up to ₹10 Lakhs',
      deadline: 'Rolling basis',
      logo: '🌱',
      description: 'Incubation support for innovative startups',
      eligibility: 'Student entrepreneurs and early-stage startups',
      process: 'Application → Screening → Incubation → Funding',
      website: 'https://lnkd.in/dBtUHfCi',
      status: 'Open'
    },
    {
      id: 3,
      name: 'MSME Innovative Scheme',
      type: 'Government',
      amount: 'Up to ₹15 Lakhs',
      deadline: 'Quarterly',
      logo: '🏭',
      description: 'Up to ₹15L for innovative MSME projects',
      eligibility: 'Micro, Small & Medium Enterprises with innovative projects',
      process: 'Online application → Technical evaluation → Approval → Disbursement',
      website: 'https://msme.gov.in',
      status: 'Open'
    },
    {
      id: 4,
      name: 'Biotechnology Ignition Grant (BIG)',
      type: 'Government',
      amount: 'Up to ₹50 Lakhs',
      deadline: 'Bi-annual',
      logo: '🧬',
      description: 'Up to ₹50L for biotech startups',
      eligibility: 'Biotech startups and entrepreneurs',
      process: 'Proposal submission → Expert review → Presentation → Funding',
      website: 'https://birac.nic.in',
      status: 'Open'
    },
    {
      id: 5,
      name: 'Digital India Bhashini Initiative',
      type: 'Government',
      amount: 'Variable',
      deadline: 'Rolling basis',
      logo: '🇮🇳',
      description: 'Grants for Indian language-based tech/AI innovations',
      eligibility: 'Startups working on Indian language technologies',
      process: 'Application → Technical review → Demo → Grant award',
      website: 'https://bhashini.gov.in',
      status: 'Open'
    },
    {
      id: 6,
      name: 'NIDHI-PRAYAS',
      type: 'Government',
      amount: '₹10 Lakhs',
      deadline: 'Multiple cycles',
      logo: '�',
      description: '₹10L prototyping grant',
      eligibility: 'Students, faculty, and researchers with innovative ideas',
      process: 'Idea submission → Evaluation → Prototyping support → Funding',
      website: 'https://nidhi.dst.gov.in',
      status: 'Open'
    },
    {
      id: 7,
      name: 'Multiplier Grants Scheme (MGS)',
      type: 'Government',
      amount: 'Industry matching',
      deadline: 'Annual',
      logo: '🤝',
      description: 'Govt matches industry R&D funding',
      eligibility: 'Companies with industry R&D partnerships',
      process: 'Industry partnership → Grant application → Government matching → Project execution',
      website: 'https://lnkd.in/dW5tMTuf',
      status: 'Open'
    },
    {
      id: 8,
      name: 'Rashtriya Krishi Vikas Yojana (RAFTAAR)',
      type: 'Government',
      amount: 'Variable',
      deadline: 'Annual',
      logo: '🌾',
      description: 'Grants for agri-tech startups',
      eligibility: 'Agricultural technology startups and entrepreneurs',
      process: 'Project proposal → State approval → Central clearance → Implementation',
      website: 'https://rkvv.da.gov.in',
      status: 'Open'
    },
    {
      id: 9,
      name: 'Smart India Hackathon (SIH)',
      type: 'Government',
      amount: '₹1 Lakh',
      deadline: 'Annual',
      logo: '💡',
      description: 'Innovation grants for students and professional teams',
      eligibility: 'Student teams and working professionals',
      process: 'Problem selection → Solution development → Grand finale → Award',
      website: 'https://sih.gov.in',
      status: 'Open'
    },
    {
      id: 10,
      name: 'TIDE 2.0 Scheme',
      type: 'Government',
      amount: 'Up to ₹4 Crores',
      deadline: 'Rolling basis',
      logo: '💻',
      description: 'ICT-focused startup support via MeitY incubators',
      eligibility: 'ICT startups through recognized incubators',
      process: 'Incubator application → Startup selection → Support → Funding',
      website: 'https://lnkd.in/dU7kZnD6',
      status: 'Open'
    },
    {
      id: 11,
      name: 'Credit Guarantee Fund (CGTMSE)',
      type: 'Government',
      amount: 'Up to ₹2 Crores',
      deadline: 'Rolling basis',
      logo: '🏦',
      description: 'Collateral-free loans up to ₹2Cr for MSMEs',
      eligibility: 'Micro, Small & Medium Enterprises',
      process: 'Bank application → CGTMSE guarantee → Loan approval → Disbursement',
      website: 'https://cgtmse.in',
      status: 'Open'
    },
    {
      id: 12,
      name: 'iDEX',
      type: 'Government',
      amount: 'Up to ₹1.5 Crores',
      deadline: 'Quarterly',
      logo: '🛡️',
      description: 'Grants for defense and aerospace tech startups',
      eligibility: 'Defense and aerospace technology startups',
      process: 'Challenge participation → Prototype development → Testing → Production support',
      website: 'https://idex.gov.in',
      status: 'Open'
    },
    {
      id: 13,
      name: 'STPI Grant',
      type: 'Government',
      amount: 'Variable',
      deadline: 'Rolling basis',
      logo: '🖥️',
      description: 'Incubation and funding for IT & ESDM startups',
      eligibility: 'IT and Electronics startups',
      process: 'Application → Incubation → Mentoring → Funding support',
      website: 'https://stpi.in',
      status: 'Open'
    },
    {
      id: 14,
      name: 'SAMRIDH Scheme',
      type: 'Government',
      amount: 'Up to ₹40 Lakhs',
      deadline: 'Bi-annual',
      logo: '📈',
      description: 'Up to ₹40L for product development and scaling',
      eligibility: 'Startups with proven products ready for scaling',
      process: 'Application → Due diligence → Investment committee → Funding',
      website: 'https://lnkd.in/d8auAcGw',
      status: 'Open'
    },
    {
      id: 15,
      name: 'SIP-EIT',
      type: 'Government',
      amount: 'Patent support',
      deadline: 'Rolling basis',
      logo: '📋',
      description: 'Patent filing support for electronics & IT startups',
      eligibility: 'Electronics and IT startups with patentable innovations',
      process: 'Patent application → Technical review → Filing support → Grant',
      website: 'https://lnkd.in/dW5tMTuf',
      status: 'Open'
    },
    {
      id: 16,
      name: 'ASPIRE Scheme',
      type: 'Government',
      amount: 'Variable',
      deadline: 'Annual',
      logo: '🌄',
      description: 'Promotes rural innovation & livelihood-based entrepreneurship',
      eligibility: 'Rural entrepreneurs and livelihood-based startups',
      process: 'State proposal → Central approval → Implementation → Monitoring',
      website: 'https://aspire.msme.gov.in',
      status: 'Open'
    },
    {
      id: 17,
      name: 'CLCSS',
      type: 'Government',
      amount: '15% subsidy',
      deadline: 'Annual',
      logo: '⚙️',
      description: '15% capital subsidy for tech upgradation for MSMEs',
      eligibility: 'MSMEs seeking technology upgradation',
      process: 'Technology selection → Subsidy application → Approval → Implementation',
      website: 'https://clcss.dcmsme.gov.in',
      status: 'Open'
    },
    {
      id: 18,
      name: 'Dairy Processing Infrastructure Development Fund (DIDF)',
      type: 'Government',
      amount: 'Infrastructure support',
      deadline: 'Annual',
      logo: '🥛',
      description: 'Grants for dairy processing units and supply chain infrastructure',
      eligibility: 'Dairy processing units and cooperatives',
      process: 'Project proposal → Technical evaluation → Financial approval → Implementation',
      website: 'https://lnkd.in/dyDH3mWn',
      status: 'Open'
    },
    {
      id: 19,
      name: 'TDB Grants',
      type: 'Government',
      amount: 'Variable',
      deadline: 'Rolling basis',
      logo: '🔬',
      description: 'Grants for tech development and commercialization',
      eligibility: 'Technology-based startups and researchers',
      process: 'Proposal submission → Technical review → Commercialization support → Funding',
      website: 'https://tdb.gov.in/modes-funding',
      status: 'Open'
    },
    {
      id: 20,
      name: 'NSIC Subsidy',
      type: 'Government',
      amount: 'Support services',
      deadline: 'Rolling basis',
      logo: '🏢',
      description: 'Marketing, finance, and tech support for MSMEs',
      eligibility: 'Micro, Small & Medium Enterprises',
      process: 'Registration → Service selection → Application → Support delivery',
      website: 'https://nsic.co.in',
      status: 'Open'
    }
  ];

  const filteredGrants = grants.filter(grant => {
    const matchesSearch = grant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grant.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
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
            
            {/* Search */}
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search grants and funding opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-prajvalan-orange transition-all duration-300"
                />
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
