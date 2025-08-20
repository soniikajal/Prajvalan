
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Startups', path: '/startups' },
    { name: 'Grants', path: '/grants' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Prajvalan Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-heading font-bold text-foreground">Prajvalan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-prajvalan-orange bg-accent'
                    : 'text-muted-foreground hover:text-prajvalan-orange hover:bg-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://linktr.ee/prajvalan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-prajvalan-navy to-prajvalan-orange text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow duration-200"
            >
              Join Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-prajvalan-orange transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-prajvalan-orange bg-accent'
                    : 'text-muted-foreground hover:text-prajvalan-orange hover:bg-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://linktr.ee/prajvalan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full bg-gradient-to-r from-prajvalan-navy to-prajvalan-orange text-white px-6 py-2 rounded-full font-medium text-center block"
            >
              Join Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
