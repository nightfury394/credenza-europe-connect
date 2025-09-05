import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  Phone,
  Mail
} from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudyDropdownOpen, setIsStudyDropdownOpen] = useState(false);

  const studyDestinations = [
    'Poland', 'Germany', 'Netherlands', 'Spain', 'Italy'
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-primary">Credenza Education</h1>
              <p className="text-xs text-muted-foreground">Your Trusted Bridge to Europe</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            
            {/* Study in Europe Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsStudyDropdownOpen(true)}
              onMouseLeave={() => setIsStudyDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Study in Europe</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isStudyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-elegant border border-border py-2">
                  {studyDestinations.map((destination) => (
                    <a
                      key={destination}
                      href={`#${destination.toLowerCase()}`}
                      className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {destination}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#scholarships" className="text-foreground hover:text-primary transition-colors">
              Scholarships
            </a>
            <a href="#success-stories" className="text-foreground hover:text-primary transition-colors">
              Success Stories
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* CTA & Language Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Check Eligibility
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <div>
                <p className="font-medium text-foreground mb-2">Study in Europe</p>
                <div className="pl-4 space-y-2">
                  {studyDestinations.map((destination) => (
                    <a
                      key={destination}
                      href={`#${destination.toLowerCase()}`}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {destination}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#scholarships" className="text-foreground hover:text-primary transition-colors">
                Scholarships
              </a>
              <a href="#success-stories" className="text-foreground hover:text-primary transition-colors">
                Success Stories
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex items-center justify-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span>English</span>
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Check Eligibility
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Bar */}
      <div className="bg-muted py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+880 1XXX-XXXXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@credenzaeducation.com</span>
            </div>
            <div className="text-accent font-medium">
              🏆 500+ Students Successfully Placed in Europe
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;