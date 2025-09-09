import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Compass, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from '@/components/ui/section-header';
import Layout from '@/components/layout/Layout';

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: 'Architectural Design',
      description: 'Innovative design solutions that blend functionality with aesthetic excellence for residential and commercial projects.',
    },
    {
      icon: Compass,
      title: 'Planning & Consulting',
      description: 'Strategic planning and expert consultation to guide your project from concept through completion.',
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Comprehensive project oversight ensuring timely delivery, quality control, and seamless coordination.',
    },
    {
      icon: Award,
      title: 'Sustainable Solutions',
      description: 'Environmentally conscious design approaches that reduce impact while maximizing efficiency and beauty.',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '25+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Awards Won' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hero/90 to-hero opacity-95" />
        <div className="content-container relative">
          <div className="min-h-[90vh] flex items-center">
            <div className="max-w-4xl space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-tight">
                  Crafting Spaces That
                  <span className="text-gold block">Inspire Living</span>
                </h1>
                <p className="text-xl md:text-2xl text-hero-foreground/80 max-w-2xl leading-relaxed">
                  Award-winning architectural consultants creating exceptional spaces 
                  that blend innovation, sustainability, and timeless design.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold"
                >
                  <Link to="/projects">
                    View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10"
                >
                  <Link to="/contact">Get Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <SectionHeader
            subtitle="Our Services"
            title="Comprehensive Architectural Solutions"
            description="From initial concept to final completion, we provide end-to-end architectural services tailored to your unique vision and requirements."
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-elevated hover:shadow-medium transition-smooth">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secondary">
        <div className="content-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gold">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader
                subtitle="About Vivant"
                title="Design Excellence Since 1999"
                description="With over two decades of experience, Vivant Architectural Consultants has established itself as a leader in innovative, sustainable design solutions."
                alignment="left"
              />
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Award-winning designs recognized by international architectural bodies
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Sustainable practices that minimize environmental impact
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Collaborative approach ensuring client vision comes to life
                  </p>
                </div>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-primary/20 rounded-2xl" />
              <div className="absolute inset-4 bg-gradient-to-tr from-primary/10 to-gold/10 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Let's discuss how we can bring your architectural dreams to life 
              with our expertise and innovative approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gold hover:bg-gold/90 text-gold-foreground"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;