
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can join Prajvalan?',
      answer: 'Prajvalan is open to all students (undergraduate, postgraduate, and PhD) with innovative ideas and entrepreneurial aspirations. We welcome students from all disciplines - technology, business, design, science, and humanities.'
    },
    {
      question: 'Do I need a complete business plan to apply?',
      answer: 'Not at all! We welcome students at all stages - from those with just an idea to those with working prototypes. Our mentors will help you develop your business plan and refine your concept.'
    },
    {
      question: 'What kind of funding support do you provide?',
      answer: 'We provide guidance on various funding sources including government grants (BIRAC, Startup India), private investments, and angel funding. While we don\'t directly fund startups, we help you navigate the funding landscape and connect with potential investors.'
    },
    {
      question: 'How does the mentorship program work?',
      answer: 'Each accepted startup is paired with 2-3 mentors based on their industry and needs. Mentors include successful entrepreneurs, industry experts, and alumni. You\'ll have regular one-on-one sessions, group workshops, and access to our mentor network.'
    },
    {
      question: 'Is there any cost to join Prajvalan?',
      answer: 'Prajvalan is completely free for students! We believe financial constraints shouldn\'t limit entrepreneurial aspirations. All our services - mentorship, workspace access, events, and networking - are provided at no cost.'
    },
    {
      question: 'What if my startup doesn\'t work out?',
      answer: 'Failure is part of the entrepreneurial journey! Our community supports learning from setbacks. Many of our successful entrepreneurs had previous ventures that didn\'t work out. We provide career guidance and connections for your next steps.'
    },
    {
      question: 'How much time commitment is required?',
      answer: 'We understand you\'re students first! The program is designed to be flexible. Expect 5-10 hours per week for core activities, with additional optional workshops and events. We work around your academic schedule.'
    },
    {
      question: 'Can I continue after graduation?',
      answer: 'Absolutely! Many of our startups transition from student ventures to full-time companies. We provide alumni support and connections to help you scale beyond graduation. Our network includes hundreds of successful alumni founders.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-prajvalan-dark-navy/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-prajvalan-orange/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-prajvalan-bright-orange/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about joining Prajvalan</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 group"
              style={{
                boxShadow: openIndex === index ? '0 10px 30px rgba(255, 120, 0, 0.2)' : 'none',
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent/50 transition-all duration-200 group-hover:bg-accent/30"
              >
                <span className="text-lg font-heading font-semibold text-foreground group-hover:text-prajvalan-orange transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">
                  {openIndex === index ? (
                    <ChevronUp className="text-prajvalan-orange animate-pulse" size={20} />
                  ) : (
                    <ChevronDown className="text-muted-foreground group-hover:text-prajvalan-orange transition-colors duration-300" size={20} />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-0">
                  <div className="border-t border-prajvalan-orange/20 pt-4">
                    <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-prajvalan-orange/30 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 transform hover:scale-105 transition-transform duration-300">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="https://chat.whatsapp.com/LIHXPUSBEfuH7tSKEWnYZk" target="_blank" rel="noopener noreferrer" className="inline-block">
          <button className="bg-gradient-to-r from-prajvalan-navy to-prajvalan-orange text-white px-8 py-3 rounded-full font-medium hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
