import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Study in Poland', href: '#poland' },
    { name: 'Study in Germany', href: '#germany' },
    { name: 'Study in Netherlands', href: '#netherlands' },
    { name: 'Study in Spain', href: '#spain' },
    { name: 'Study in Italy', href: '#italy' },
    { name: 'Scholarships', href: '#scholarships' }
  ];

  const services = [
    { name: 'University Selection', href: '#services' },
    { name: 'Application Support', href: '#services' },
    { name: 'Visa Processing', href: '#services' },
    { name: 'IELTS Preparation', href: '#services' },
    { name: 'Accommodation', href: '#services' },
    { name: 'Pre-departure Guidance', href: '#services' }
  ];

  const resources = [
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'University Comparison', href: '#compare' },
    { name: 'Cost Calculator', href: '#calculator' },
    { name: 'Scholarship Guide', href: '#guide' }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Stay Updated with Latest Opportunities
              </h3>
              <p className="text-white/80">
                Get the latest scholarship updates, university deadlines, and success stories 
                delivered straight to your inbox.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <input type="checkbox" id="newsletter-consent" className="rounded" />
                <label htmlFor="newsletter-consent">
                  I agree to receive marketing emails and updates from Credenza Education
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white/10 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-xl">Credenza Education</h2>
                <p className="text-sm text-white/70">Your Trusted Bridge to Europe</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering Bangladeshi students to achieve their European education dreams 
              through expert guidance, transparent processes, and comprehensive support.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-white/80">
                  Level 5, House 20, Road 2, Dhanmondi, Dhaka 1205
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-white/80">+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-white/80">info@credenzaeducation.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-white/80">
                  Sun - Thu: 9:00 AM - 7:00 PM
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-medium text-white mb-3">Follow Us:</p>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 p-2">
                  <Youtube className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 p-2">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Study Destinations</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div>
              <p className="text-sm font-medium text-white mb-3">Certifications:</p>
              <div className="space-y-2">
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                  🏆 ICEF Certified Agent
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                  ✅ Government Approved
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/60">
              <p>&copy; 2024 Credenza Education. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="bg-white/10 hover:bg-white/20">
                <Globe className="h-4 w-4 mr-2" />
                English
              </Button>
              <Badge className="bg-secondary text-white border-0">
                🛡️ GDPR Compliant
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;