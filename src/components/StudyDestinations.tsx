import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  DollarSign, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  GraduationCap,
  Building2
} from 'lucide-react';

const StudyDestinations = () => {
  const destinations = [
    {
      country: 'Poland',
      flag: '🇵🇱',
      highlight: 'Most Popular',
      tuitionRange: '€2,000 - €4,000',
      livingCost: '€400 - €800',
      duration: '3-4 Years',
      universities: '150+',
      topCities: ['Warsaw', 'Krakow', 'Gdansk'],
      popularCourses: ['Engineering', 'Medicine', 'IT', 'Business'],
      benefits: ['Low tuition fees', 'EU degree recognition', 'Work opportunities'],
      color: 'from-red-500 to-pink-500'
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      highlight: 'Free Education',
      tuitionRange: '€0 - €1,500',
      livingCost: '€700 - €1,200',
      duration: '3-4 Years',
      universities: '200+',
      topCities: ['Berlin', 'Munich', 'Hamburg'],
      popularCourses: ['Engineering', 'Computer Science', 'Research'],
      benefits: ['Free public education', 'Strong economy', 'Research opportunities'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      country: 'Netherlands',
      flag: '🇳🇱',
      highlight: 'English Programs',
      tuitionRange: '€8,000 - €15,000',
      livingCost: '€800 - €1,400',
      duration: '3-4 Years',
      universities: '50+',
      topCities: ['Amsterdam', 'Rotterdam', 'The Hague'],
      popularCourses: ['Business', 'International Relations', 'Technology'],
      benefits: ['English-taught programs', 'Multicultural environment', 'Innovation hub'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      country: 'Spain',
      flag: '🇪🇸',
      highlight: 'Warm Climate',
      tuitionRange: '€750 - €2,500',
      livingCost: '€600 - €1,000',
      duration: '4 Years',
      universities: '80+',
      topCities: ['Madrid', 'Barcelona', 'Valencia'],
      popularCourses: ['Medicine', 'Arts', 'Languages', 'Tourism'],
      benefits: ['Low cost of living', 'Rich culture', 'Mediterranean lifestyle'],
      color: 'from-red-600 to-yellow-500'
    },
    {
      country: 'Italy',
      flag: '🇮🇹',
      highlight: 'Rich Heritage',
      tuitionRange: '€900 - €4,000',
      livingCost: '€700 - €1,200',
      duration: '3-5 Years',
      universities: '90+',
      topCities: ['Rome', 'Milan', 'Florence'],
      popularCourses: ['Art & Design', 'Architecture', 'Fashion', 'Culinary'],
      benefits: ['Cultural richness', 'Fashion & design hub', 'Historical significance'],
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section id="study-destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            🎓 Study Destinations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Choose Your European Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover world-class education opportunities across Europe. Each destination offers unique advantages 
            for Bangladeshi students seeking quality education and bright career prospects.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{destination.flag}</span>
                    <CardTitle className="text-xl text-primary">{destination.country}</CardTitle>
                  </div>
                  <Badge className={`bg-gradient-to-r ${destination.color} text-white border-0`}>
                    {destination.highlight}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Info Grid */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-background/50 rounded-lg">
                  <div className="text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Tuition/Year</p>
                    <p className="font-medium text-sm">{destination.tuitionRange}</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-5 w-5 text-secondary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Living Cost</p>
                    <p className="font-medium text-sm">{destination.livingCost}</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-accent mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-medium text-sm">{destination.duration}</p>
                  </div>
                  <div className="text-center">
                    <Building2 className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Universities</p>
                    <p className="font-medium text-sm">{destination.universities}</p>
                  </div>
                </div>

                {/* Top Cities */}
                <div>
                  <p className="font-medium text-foreground mb-2">Top Study Cities:</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.topCities.map((city, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {city}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Popular Courses */}
                <div>
                  <p className="font-medium text-foreground mb-2">Popular Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.popularCourses.map((course, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <p className="font-medium text-foreground mb-2">Key Benefits:</p>
                  <ul className="space-y-1">
                    {destination.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 text-accent flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full group bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Explore {destination.country}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-primary text-white border-0">
            <CardContent className="p-8">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-3">
                Not Sure Which Country is Right for You?
              </h3>
              <p className="text-white/90 mb-6">
                Our expert counselors will help you choose the perfect destination based on your 
                academic background, career goals, and budget.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold"
              >
                Get Personalized Recommendation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;