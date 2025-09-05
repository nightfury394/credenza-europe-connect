import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Star, 
  Crown, 
  Shield,
  ArrowRight,
  Phone,
  MessageCircle
} from 'lucide-react';

const PricingSection = () => {
  const packages = [
    {
      name: 'Basic',
      subtitle: 'Admission Support',
      price: '৳60,000',
      originalPrice: '৳75,000',
      popular: false,
      icon: Shield,
      color: 'from-slate-500 to-slate-600',
      features: [
        'University selection guidance',
        'Application form assistance',
        'Document preparation support',
        'Admission essay review',
        'Email support',
        '3 university applications'
      ],
      notIncluded: [
        'Visa processing',
        'Interview preparation',
        'Accommodation support',
        'Airport pickup'
      ]
    },
    {
      name: 'Standard',
      subtitle: 'Admission + Visa',
      price: '৳120,000',
      originalPrice: '৳150,000',
      popular: true,
      icon: Star,
      color: 'from-primary to-secondary',
      features: [
        'Everything in Basic package',
        'Complete visa processing',
        'Visa interview preparation',
        'Embassy appointment booking',
        'Document translation',
        'Phone & WhatsApp support',
        '5 university applications',
        'Scholarship application support'
      ],
      notIncluded: [
        'Accommodation support',
        'Airport pickup',
        'Post-arrival assistance'
      ]
    },
    {
      name: 'Premium',
      subtitle: 'Complete Journey',
      price: '৳200,000',
      originalPrice: '৳250,000',
      popular: false,
      icon: Crown,
      color: 'from-accent to-orange-500',
      features: [
        'Everything in Standard package',
        'Accommodation arrangement',
        'Airport pickup coordination',
        'Pre-departure orientation',
        'Bank account opening guidance',
        'Part-time job assistance',
        'First month support',
        'Priority customer service',
        'Unlimited university applications'
      ],
      notIncluded: []
    }
  ];

  const addOns = [
    { service: 'IELTS/TOEFL Preparation', price: '৳15,000' },
    { service: 'Scholarship Essay Writing', price: '৳8,000' },
    { service: 'Mock Interview Sessions', price: '৳5,000' },
    { service: 'Travel Insurance', price: '৳3,000' }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            💰 Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Choose Your Success Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Clear, upfront pricing with no hidden fees. Pay only for the services you need, 
            with flexible payment options available.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-elegant transition-all duration-300 border-2 ${
                pkg.popular 
                  ? 'border-primary shadow-card scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white border-0 px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${pkg.color} mb-4 mx-auto`}>
                  <pkg.icon className="h-8 w-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl text-primary">{pkg.name}</CardTitle>
                <p className="text-muted-foreground">{pkg.subtitle}</p>
                
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-sm text-secondary font-medium mt-1">
                    Save {parseInt(pkg.originalPrice.replace('৳', '').replace(',', '')) - parseInt(pkg.price.replace('৳', '').replace(',', ''))} BDT
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">✅ What's Included:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Included */}
                {pkg.notIncluded.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">❌ Not Included:</h4>
                    <ul className="space-y-2">
                      {pkg.notIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                            <div className="w-3 h-3 border border-muted-foreground/50 rounded-full"></div>
                          </div>
                          <span className="text-muted-foreground/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Button 
                  className={`w-full group ${
                    pkg.popular 
                      ? 'bg-gradient-primary hover:opacity-90' 
                      : 'bg-secondary hover:bg-secondary/90'
                  } transition-opacity`}
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Contact Options */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary mb-2">
                Additional Services
              </CardTitle>
              <p className="text-muted-foreground">
                Enhance your journey with our optional add-on services
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {addOns.map((addon, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                    <span className="font-medium text-foreground">{addon.service}</span>
                    <span className="font-bold text-primary">{addon.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-3xl mx-auto bg-gradient-primary text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3">
                🎯 Ready to Start Your European Journey?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Book a free consultation to discuss your goals and get a personalized package recommendation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold"
                >
                  Book Free Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full"
                >
                  Download Package Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-6 py-3">
            <Shield className="h-5 w-5 text-secondary" />
            <span className="font-medium text-secondary">100% Money Back Guarantee</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            If you're not satisfied with our service, get your money back within 30 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;