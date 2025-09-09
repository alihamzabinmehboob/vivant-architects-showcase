import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  PenTool, 
  Home, 
  Building, 
  TreePine, 
  Lightbulb,
  Users,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeader from '@/components/ui/section-header';
import Layout from '@/components/layout/Layout';

const Services = () => {
  const mainServices = [
    {
      icon: Building2,
      title: 'Architectural Design',
      description: 'Comprehensive architectural solutions from concept to completion.',
      features: [
        'Conceptual Design Development',
        'Technical Drawing & Documentation',
        '3D Visualization & Modeling',
        'Building Information Modeling (BIM)',
        'Construction Administration'
      ],
      pricing: 'From $5,000'
    },
    {
      icon: PenTool,
      title: 'Interior Design',
      description: 'Creating beautiful, functional interior spaces that reflect your lifestyle.',
      features: [
        'Space Planning & Layout',
        'Material & Finish Selection',
        'Custom Furniture Design',
        'Lighting Design',
        'Project Coordination'
      ],
      pricing: 'From $3,000'
    },
    {
      icon: TreePine,
      title: 'Landscape Architecture',
      description: 'Harmonizing built environments with natural landscapes.',
      features: [
        'Site Analysis & Planning',
        'Garden & Outdoor Space Design',
        'Sustainable Landscaping',
        'Drainage & Irrigation Planning',
        'Plant Selection & Specification'
      ],
      pricing: 'From $2,500'
    },
    {
      icon: Lightbulb,
      title: 'Design Consultation',
      description: 'Expert guidance for your architectural and design challenges.',
      features: [
        'Design Review & Analysis',
        'Code Compliance Consultation',
        'Feasibility Studies',
        'Design Development Guidance',
        'Construction Documentation Review'
      ],
      pricing: 'From $150/hour'
    }
  ];

  const projectTypes = [
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Custom homes, renovations, and residential developments.',
      examples: ['Single Family Homes', 'Multi-Family Housing', 'Renovations & Additions', 'Luxury Estates']
    },
    {
      icon: Building,
      title: 'Commercial Projects', 
      description: 'Office buildings, retail spaces, and commercial developments.',
      examples: ['Office Buildings', 'Retail Centers', 'Restaurants & Hospitality', 'Mixed-Use Developments']
    },
    {
      icon: Users,
      title: 'Institutional Projects',
      description: 'Educational, healthcare, and community facilities.',
      examples: ['Schools & Universities', 'Healthcare Facilities', 'Community Centers', 'Religious Buildings']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-container">
          <div className="min-h-[60vh] flex items-center">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground">
                Our Professional
                <span className="text-gold block">Services</span>
              </h1>
              <p className="text-xl text-hero-foreground/80 leading-relaxed">
                Comprehensive architectural solutions tailored to your unique needs, 
                from initial concept through final construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <SectionHeader
            subtitle="Our Expertise"
            title="Complete Architectural Solutions"
            description="We offer a full range of architectural services designed to bring your vision to life with precision, creativity, and professional excellence."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-elevated hover:shadow-medium transition-smooth">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-gold font-semibold">{service.pricing}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section-padding bg-secondary">
        <div className="content-container">
          <SectionHeader
            subtitle="Project Types"
            title="Diverse Portfolio Across Sectors"
            description="Our expertise spans residential, commercial, and institutional projects, each approached with the same dedication to excellence."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-gold">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <SectionHeader
            subtitle="Our Process"
            title="From Vision to Reality"
            description="Our proven five-phase approach ensures your project is delivered on time, within budget, and exceeding expectations."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { phase: '01', title: 'Discovery', description: 'Understanding your vision, needs, and project requirements' },
              { phase: '02', title: 'Concept', description: 'Initial design concepts and spatial planning solutions' },
              { phase: '03', title: 'Design', description: 'Detailed design development and technical documentation' },
              { phase: '04', title: 'Planning', description: 'Permit applications and regulatory approvals' },
              { phase: '05', title: 'Construction', description: 'Construction administration and project completion' },
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-gold">{step.phase}</span>
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Contact us today to discuss your architectural needs and receive a customized proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gold hover:bg-gold/90 text-gold-foreground"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;