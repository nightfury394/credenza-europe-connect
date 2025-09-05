import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Quote, 
  MapPin, 
  GraduationCap,
  Calendar,
  ArrowRight,
  Play
} from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Fahim Rahman',
      university: 'Warsaw University of Technology',
      country: 'Poland',
      course: 'Computer Science',
      year: '2023',
      image: '👨‍💻',
      rating: 5,
      story: 'Credenza Education made my dream of studying in Europe a reality. Their guidance throughout the visa process was exceptional, and I\'m now thriving in my Computer Science program in Warsaw.',
      beforeAfter: {
        before: 'CGPA: 3.2, No IELTS, Confused about applications',
        after: 'Full scholarship at top university, Currently interning at Microsoft'
      },
      scholarship: '€8,000/year'
    },
    {
      name: 'Rashida Sultana',
      university: 'Charité - Universitätsmedizin Berlin',
      country: 'Germany',
      course: 'Medicine',
      year: '2022',
      image: '👩‍⚕️',
      rating: 5,
      story: 'The team at Credenza helped me navigate the complex German medical school application process. Without their support, I wouldn\'t be studying at one of Europe\'s top medical universities.',
      beforeAfter: {
        before: 'Medical college student, No German language, Application rejections',
        after: 'Studying at prestigious medical university, Fluent in German'
      },
      scholarship: 'Free tuition + €500/month stipend'
    },
    {
      name: 'Sakib Ahmed',
      university: 'University of Amsterdam',
      country: 'Netherlands',
      course: 'International Business',
      year: '2023',
      image: '👨‍💼',
      rating: 5,
      story: 'From application to settling in Amsterdam, Credenza was with me every step. Their comprehensive support made the entire process smooth and stress-free.',
      beforeAfter: {
        before: 'BBA graduate, Limited budget, No international exposure',
        after: 'MBA at top Dutch university, Part-time job at multinational company'
      },
      scholarship: '€5,000 merit scholarship'
    },
    {
      name: 'Nusrat Jahan',
      university: 'Universitat Politècnica de Catalunya',
      country: 'Spain',
      course: 'Architecture',
      year: '2022',
      image: '👩‍🎨',
      rating: 5,
      story: 'Credenza not only helped me get admission but also guided me through accommodation and initial settlement. Now I\'m pursuing my passion for sustainable architecture in Barcelona.',
      beforeAfter: {
        before: 'Architecture student, No Spanish, Limited portfolio',
        after: 'Award-winning projects, Internship at renowned architecture firm'
      },
      scholarship: '€3,500 academic excellence award'
    }
  ];

  const stats = [
    { number: '500+', label: 'Students Placed' },
    { number: '95%', label: 'Visa Success Rate' },
    { number: '€2.5M+', label: 'Scholarships Secured' },
    { number: '50+', label: 'Partner Universities' }
  ];

  return (
    <section id="success-stories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            🏆 Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Dreams Turned Into Reality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Read inspiring stories from our students who are now pursuing their dreams 
            in top European universities. Your success story could be next!
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-gradient-card border-0">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Stories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stories.map((story, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-card">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-4xl">{story.image}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-primary">{story.name}</h3>
                    <p className="text-muted-foreground">{story.course}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{story.university}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl">{story.country === 'Poland' ? '🇵🇱' : story.country === 'Germany' ? '🇩🇪' : story.country === 'Netherlands' ? '🇳🇱' : '🇪🇸'}</span>
                      <span className="text-sm font-medium text-foreground">{story.country}</span>
                      <Badge variant="outline" className="text-xs">
                        Class of {story.year}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {story.rating}.0 rating
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground italic pl-6 leading-relaxed">
                    {story.story}
                  </p>
                </div>

                {/* Before & After */}
                <div className="bg-background/50 rounded-lg p-4 mb-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2 flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                        Before
                      </h4>
                      <p className="text-sm text-muted-foreground">{story.beforeAfter.before}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2 flex items-center">
                        <GraduationCap className="h-4 w-4 mr-1 text-secondary" />
                        After
                      </h4>
                      <p className="text-sm text-muted-foreground">{story.beforeAfter.after}</p>
                    </div>
                  </div>
                </div>

                {/* Scholarship */}
                <div className="flex items-center justify-between">
                  <Badge className="bg-secondary text-white border-0">
                    💰 {story.scholarship}
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    Read Full Story
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials */}
        <Card className="bg-gradient-primary text-white border-0 mb-12">
          <CardContent className="p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <Play className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Watch Video Testimonials
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Hear directly from our students about their journey from Bangladesh to European universities. 
                Real stories, real experiences, real success.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold"
              >
                Watch All Videos
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-3">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of Bangladeshi students who have successfully started their European education journey with Credenza Education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 px-8 py-3 rounded-full font-semibold"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-3 rounded-full"
                >
                  Schedule Free Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;