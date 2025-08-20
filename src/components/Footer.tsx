
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-prajvalan-dark-navy via-background to-prajvalan-navy border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Prajvalan Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-heading font-bold text-foreground">Prajvalan</span>
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Empowering entrepreneurs to transform ideas into impactful ventures. Join our community of innovators and changemakers.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/prajvalan/posts/?feedView=all" className="text-muted-foreground hover:text-prajvalan-orange transition-colors transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/praj.valan/" className="text-muted-foreground hover:text-prajvalan-orange transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@prajvalan_official" className="text-muted-foreground hover:text-prajvalan-orange transition-colors transform hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-heading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-prajvalan-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/startups" className="text-muted-foreground hover:text-prajvalan-orange transition-colors">
                  Startups
                </Link>
              </li>
              <li>
                <Link to="/grants" className="text-muted-foreground hover:text-prajvalan-orange transition-colors">
                  Grants
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-muted-foreground hover:text-prajvalan-orange transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-prajvalan-orange transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} className="text-prajvalan-orange" />
                <span>prajvalan.co@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} className="text-prajvalan-orange" />
                <span>+91 99999 88888</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={16} className="text-prajvalan-orange mt-1" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2024 Prajvalan. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <a href="https://www.termsfeed.com/live/402267b1-d788-4989-8548-5b9ccd1517b2" className="text-muted-foreground hover:text-prajvalan-orange text-sm transition-colors">
              Privacy Policy
            </a>
            
            <a href="https://www.freeprivacypolicy.com/live/e9771de4-61a0-4651-9179-22f048352fc1" className="text-muted-foreground hover:text-prajvalan-orange text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
