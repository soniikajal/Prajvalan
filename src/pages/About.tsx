
import React from 'react';
import {
  Lightbulb,
  FlaskConical,      // for 'Learning by Doing'
  Users,              // for 'Community First'
  Award,             // for 'Purpose > Perfection'
  ShieldCheck,        // for 'Integrity in Action'
  Volume2,            // for 'Impact over Noise'
} from 'lucide-react';


const About = () => {
  const team = [
    {
      name: 'Aastha Pandey',
      role: 'CEO & Founder',
      image: '/images/AasthaPandey.png',
      description: 'Former startup founder with 15+ years in innovation and student mentorship.'
    },
    {
      name: 'Ruhansh Bansal',
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
      title: 'Innovation over Limitation',
      description: "We don’t follow blueprints; we create them. Original ideas and unconventional thinking are our foundation."
    },
    {
      icon: FlaskConical,
      title: 'Learning by Doing',
      description: 'Experience teaches more than theory ever will. We encourage experimentation, prototyping, and building real-world solutions.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Prajvalan is not a solo journey. We rise by lifting others, collaborating, and sharing knowledge.'
    },
    {
      icon: Award,
      title: 'Purpose > Perfection',
      description: 'We value intent and impact over flawless execution. It’s okay to be messy if you’re building something meaningful.'
    },
    {
      icon: ShieldCheck,
      title: 'Integrity in Action',
      description: ' We build with honesty, own our failures, and grow through transparency and trust.'
    },
    {
      icon: Volume2,
      title: 'Impact over Noise',
      description: 'We’re not here for likes—we’re here for legacy. Our focus is on solving real problems and creating measurable change.'
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
              Igniting the entrepreneurial spirit in students across India
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-prajvalan-orange/5 via-transparent to-prajvalan-navy/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Prajvalan didn’t begin as a company. It began as a question.<br />
                  “Why is it so hard for someone with an idea to actually build something?”
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Back in school, I had more ideas than notebooks could hold. But what I didn’t have was direction—
                  no mentors, no teammates, no clue how to take even the first step toward building something real. 
                  I scoured the internet, joined forums, looked at platforms, but everything seemed built for people 
                  who already knew the game. 
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Not for beginners. <br />
                  Not for students.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Years later in college, I realized something that both comforted and disturbed me: I wasn’t the only one.
                  I met more people just like me—students with passion, with potential, but no path. Everyone seemed 
                  stuck in the same loop of doubts, lack of access, and no guidance. That’s when it clicked.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  We decided we couldn’t keep waiting for the system to catch up.<br />
                  “If this problem was ours, the solution had to be ours too.”
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  And that’s how Prajvalan was born—not as a startup, but as a spark. 
                  A spark to ignite belief in young people who want to build, solve, and dream. 
                  A spark to challenge the conventional journey of school → college → job → retirement.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  We built this space for those who ask “Why not me?”<br />
                  For those who have the courage to chase their ‘what ifs’.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Today, Prajvalan is a growing community that helps student-led startups not only survive, but thrive. 
                  We’re already incubating multiple startups and mentoring early-stage projects with one goal: 
                  to empower young minds to create lasting impact, no matter where they start from.</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
