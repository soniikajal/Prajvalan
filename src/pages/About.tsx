
import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Director & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: 'Former startup founder with 15+ years in innovation and student mentorship.'
    },
    {
      name: 'Priya Sharma',
      role: 'Program Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b750?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: 'MBA from IIM, specializes in startup operations and funding strategies.'
    },
    {
      name: 'Arjun Patel',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: 'Ex-Google engineer, leads technology innovation and product development.'
    },
    {
      name: 'Sneha Reddy',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: 'Builds vibrant startup communities and manages student engagement programs.'
    },
    {
      name: 'Vikram Singh',
      role: 'Industry Relations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: 'Connects startups with industry partners and potential investors.'
    },
    {
      name: 'Ananya Gupta',
      role: 'Student Coordinator',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: 'Recent graduate who bridges the gap between students and mentors.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Prajvalan was founded with a vision to ignite student innovation across India.'
    },
    {
      year: '2021',
      title: 'First Cohort',
      description: 'Launched with 25 student startups, establishing our core mentorship model.'
    },
    {
      year: '2022',
      title: 'Scaling Up',
      description: 'Expanded to 5 cities and partnered with major government funding initiatives.'
    },
    {
      year: '2023',
      title: 'Major Milestone',
      description: 'Reached 500+ startups with ₹50+ crores in total funding facilitated.'
    },
    {
      year: '2024',
      title: 'National Impact',
      description: 'Established presence in 15+ cities with international partnership programs.'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We believe every student has the potential to create groundbreaking solutions.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a supportive ecosystem where collaboration trumps competition.'
    },
    {
      icon: Target,
      title: 'Impact Focused',
      description: 'Measuring success not just in profits, but in positive social change.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in mentorship and support quality.'
    }
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
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">About Prajvalan</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Igniting the entrepreneurial spirit in students across India through mentorship, 
              funding guidance, and a supportive community ecosystem.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-prajvalan-orange/5 via-transparent to-prajvalan-navy/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Prajvalan was born from a simple observation: students have incredible ideas, but often lack 
                  the guidance and resources to turn them into reality. Founded in 2020 by a group of educators 
                  and entrepreneurs, we set out to bridge this gap.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  What started as a small initiative in one city has grown into a national movement, 
                  empowering thousands of students to become confident entrepreneurs and innovators.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">Our Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-prajvalan-orange to-prajvalan-bright-orange"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-2xl font-bold text-prajvalan-orange mb-2">{item.year}</div>
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-prajvalan-orange rounded-full border-4 border-background flex-shrink-0 z-10"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-prajvalan-orange transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-prajvalan-orange group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-prajvalan-orange/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1 group-hover:text-prajvalan-orange transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-prajvalan-bright-orange font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
