import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="content-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="transition-smooth hover:opacity-80">
            <Logo variant="wordmark" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-smooth hover:text-gold",
                  location.pathname === item.href
                    ? "text-gold"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-2 text-base font-medium transition-smooth hover:text-gold hover:bg-secondary/50 rounded-md",
                    location.pathname === item.href
                      ? "text-gold bg-secondary/30"
                      : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;