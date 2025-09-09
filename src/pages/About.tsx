import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from '@/components/ui/section-header';
import Layout from '@/components/layout/Layout';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional design solutions that exceed client expectations and industry standards.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients, contractors, and stakeholders to ensure seamless project execution.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Integrating environmentally responsible practices into every aspect of our design process.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Driven by our love for architecture and commitment to creating spaces that inspire and endure.'
    }
  ];

  const team = [
    {
      name: 'Abdul Qayum',
      role: 'Senior Partner',
      experience: 'Senior Architect',
      specialization: 'Architectural Design & Project Leadership'
    },
    {
      name: 'Samrina',
      role: 'Senior Partner',
      experience: 'Interior Design Consultant', 
      specialization: 'Interior Design & Space Planning'
    },
    {
      name: 'Ali Hamza',
      role: 'Associate Partner',
      experience: 'Project Management Specialist',
      specialization: 'Overseas Project Management, Budgeting & Technical'
    },
    {
      name: 'Mussa Kashif',
      role: 'Associate Partner',
      experience: 'Marketing Director',
      specialization: 'Business Development & Marketing Strategy'
    }
  ];

  const milestones = [
    { year: '1999', event: 'Vivant Architectural Consultants founded' },
    { year: '2005', event: 'First major commercial project completed' },
    { year: '2010', event: 'Expansion to sustainable design practices' },
    { year: '2015', event: 'International Architecture Award received' },
    { year: '2020', event: 'Digital transformation and BIM implementation' },
    { year: '2024', event: '150+ successful projects milestone reached' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-container">
          <div className="min-h-[60vh] flex items-center">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground">
                About
                <span className="text-gold block">Vivant</span>
              </h1>
              <p className="text-xl text-hero-foreground/80 leading-relaxed">
                For over 25 years, we've been creating architectural masterpieces that blend 
                innovation, sustainability, and timeless design excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader
                subtitle="Our Story"
                title="Building Dreams Since 1999"
                description="What started as a small architectural practice has grown into a renowned consultancy known for innovative design solutions and exceptional client service."
                alignment="left"
              />
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Founded in 1999 by a group of passionate architects, Vivant Architectural 
                  Consultants began with a simple mission: to create spaces that not only 
                  function beautifully but also enhance the lives of those who inhabit them.
                </p>
                <p>
                  Over the decades, we've evolved our practice to embrace cutting-edge 
                  technologies, sustainable design principles, and collaborative approaches 
                  that put our clients at the center of everything we do.
                </p>
                <p>
                  Today, we're proud to have completed over 150 projects across residential, 
                  commercial, and institutional sectors, each one a testament to our 
                  commitment to architectural excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-primary/20 rounded-2xl" />
              <div className="absolute inset-4 bg-gradient-to-tr from-primary/10 to-gold/10 rounded-xl" />
              <div className="absolute inset-8 bg-gradient-to-br from-gold/5 to-primary/5 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary">
        <div className="content-container">
          <SectionHeader
            subtitle="Our Values"
            title="Principles That Guide Us"
            description="These core values shape every decision we make and every project we undertake."
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="card-elevated text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <SectionHeader
            subtitle="Our Team"
            title="Expert Professionals"
            description="Meet the talented individuals who bring creativity, expertise, and passion to every project."
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-elevated text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-gold/20 to-primary/20 rounded-full mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-gold font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {member.specialization}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-secondary">
        <div className="content-container">
          <SectionHeader
            subtitle="Our Journey"
            title="Key Milestones"
            description="A look back at the important moments that have shaped Vivant Architectural Consultants."
          />
          
          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gold/30" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="card-elevated p-6 space-y-2">
                      <div className="text-2xl font-bold text-gold">{milestone.year}</div>
                      <div className="text-sm text-muted-foreground">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-gold rounded-full border-4 border-background" />
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Journey
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Let's work together to create something extraordinary. 
              Experience the Vivant difference on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gold hover:bg-gold/90 text-gold-foreground"
              >
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;