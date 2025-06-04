
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-prajvalan-dark-navy via-background to-prajvalan-navy border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-prajvalan-navy to-prajvalan-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-heading font-bold text-foreground">Prajvalan</span>
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Empowering entrepreneurs to transform ideas into impactful ventures. Join our community of innovators and changemakers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-prajvalan-orange transition-colors transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-prajvalan-orange transition-colors transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-prajvalan-orange transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-prajvalan-orange transition-colors transform hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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

          {/* Programs */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-prajvalan-orange transition-colors">
                  Incubation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-prajvalan-orange transition-colors">
                  Acceleration
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-prajvalan-orange transition-colors">
                  Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-prajvalan-orange transition-colors">
                  Funding Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-prajvalan-orange transition-colors">
                  Workshops
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} className="text-prajvalan-orange" />
                <span>hello@prajvalan.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} className="text-prajvalan-orange" />
                <span>+91 99999 88888</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={16} className="text-prajvalan-orange mt-1" />
                <span>Bangalore, Karnataka<br />India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Prajvalan. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-prajvalan-orange text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-prajvalan-orange text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-prajvalan-orange text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
