import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Globe, 
  Award,
  CheckCircle2,
  Play
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Students Placed' },
    { icon: Globe, value: '5', label: 'European Countries' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Star, value: '4.9/5', label: 'Student Rating' }
  ];

  const keyFeatures = [
    'Free eligibility assessment',
    'University application support',
    'Visa guidance & processing',
    'Scholarship assistance',
    'Pre-departure orientation'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="European University Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Trusted by 500+ Students</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Trusted 
              <span className="text-accent"> Bridge </span>
              to Europe
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              From CGPA to Campus – admissions, visas, and scholarships made simple.
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <div className="grid sm:grid-cols-2 gap-3">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full shadow-elegant group"
              >
                Check Your Eligibility
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 text-white/80">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium text-white">👨‍🎓</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-semibold text-white">Join 500+ successful students</span>
                  <br />
                  who chose Credenza Education
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="lg:flex lg:justify-end">
            <Card className="bg-white/95 backdrop-blur-md border-0 shadow-elegant max-w-md w-full">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Why Choose Credenza?
                  </h3>
                  <p className="text-muted-foreground">
                    Your success is our commitment
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-3">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gradient-card rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Free Consultation</p>
                      <p className="text-sm text-muted-foreground">Get personalized guidance today</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Action */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;