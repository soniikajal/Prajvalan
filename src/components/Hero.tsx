
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-prajvalan-dark-navy to-prajvalan-navy">
      {/* Animated background with parallax */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Prajvalan Event"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-prajvalan-dark-navy/60 to-prajvalan-navy/80"></div>
      </div>

      {/* 3D Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-prajvalan-orange rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate3d(${mousePosition.x * (i * 2)}px, ${mousePosition.y * (i * 2)}px, 0) rotateX(${i * 20}deg)`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content with 3D transforms */}
      <div 
        className="relative z-10 text-center text-foreground max-w-4xl mx-auto px-4"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg) translateZ(50px)`,
        }}
      >
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in transform-gpu">
          <span className="inline-block hover:scale-110 transition-transform duration-300">Igniting</span>{' '}
          <span className="inline-block hover:scale-110 transition-transform duration-300">Student</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange font-display transform hover:scale-105 transition-transform duration-300">
            Innovation
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in opacity-0 animation-delay-200" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Where student ideas transform into thriving startups through mentorship, funding, and community support
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0 animation-delay-400" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <button className="group bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center perspective-1000">
            <span className="transform group-hover:translateZ-4">Explore Opportunities</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 group-hover:translateZ-4 transition-transform" size={20} />
          </button>
          <button className="border-2 border-prajvalan-orange text-prajvalan-orange px-8 py-4 rounded-full font-medium text-lg hover:bg-prajvalan-orange hover:text-white transition-all duration-300 transform hover:scale-105 hover:-rotate-1 hover:shadow-lg hover:shadow-prajvalan-orange/20">
            Join the Movement
          </button>
        </div>
      </div>

      {/* Enhanced 3D floating elements */}
      <div 
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-prajvalan-navy to-prajvalan-orange rounded-full opacity-20 animate-pulse transform-gpu"
        style={{
          transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0) rotateX(${mousePosition.y * 45}deg) rotateY(${mousePosition.x * 45}deg)`,
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-prajvalan-orange to-prajvalan-bright-orange rounded-full opacity-20 animate-pulse transform-gpu" 
        style={{ 
          animationDelay: '1s',
          transform: `translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15}px, 0) rotateX(${mousePosition.y * -30}deg) rotateY(${mousePosition.x * -30}deg)`,
        }}
      />
      <div 
        className="absolute top-1/2 right-20 w-8 h-8 bg-gradient-to-r from-prajvalan-bright-orange to-prajvalan-navy rounded-full opacity-30 animate-bounce transform-gpu"
        style={{
          transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0) rotateZ(${mousePosition.x * 180}deg)`,
        }}
      />

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-prajvalan-orange/20 transform rotate-45 animate-spin-slow"
          style={{
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 30}px, 0) rotate(45deg) rotateX(${mousePosition.y * 20}deg)`,
            animation: 'spin 20s linear infinite',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-prajvalan-bright-orange/30 rounded-full animate-pulse"
          style={{
            transform: `translate3d(${mousePosition.x * -25}px, ${mousePosition.y * -25}px, 0) scale(${1 + mousePosition.x * 0.1})`,
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
