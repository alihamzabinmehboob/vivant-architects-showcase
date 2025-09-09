import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="content-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo variant="wordmark" className="text-primary-foreground" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Creating exceptional architectural solutions that blend innovation, 
              sustainability, and timeless design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-gold transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary-foreground/80 hover:text-gold transition-smooth">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Architectural Design</li>
              <li className="text-primary-foreground/80">Planning & Consulting</li>
              <li className="text-primary-foreground/80">Interior Design</li>
              <li className="text-primary-foreground/80">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-primary-foreground/80">info@vivantarch.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-primary-foreground/80">
                  123 Design Street<br />
                  Architecture City, AC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>© 2024 Vivant Architectural Consultants. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-gold transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;