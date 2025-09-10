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
      icon: Users,
      title: 'Remote Architect',
      description: 'Licensed architects with extensive US project experience ready to integrate with your team.',
      features: [
        'Design Development & Conceptual Design',
        'Technical Drawing & Construction Documents',
        'Building Code Compliance Review',
        'Project Coordination & Communication',
        'BIM Modeling & 3D Visualization'
      ],
      pricing: '$3,500 - $4,000/month'
    },
    {
      icon: PenTool,
      title: 'CAD Designer',
      description: 'Expert CAD professionals proficient in AutoCAD, Revit, and other industry-standard software.',
      features: [
        'Technical Drawing Production',
        'Revit Modeling & Documentation',
        'Construction Detail Development',
        'Plan Set Coordination',
        'Design Revision Management'
      ],
      pricing: '$2,000 - $2,500/month'
    },
    {
      icon: Building2,
      title: 'Draftsperson',
      description: 'Skilled technical drafters for construction documents and architectural plan development.',
      features: [
        'Construction Document Preparation',
        'Architectural Plan Drafting',
        'Section & Elevation Drawing',
        'Detail Drawing Development',
        'Drawing Set Quality Control'
      ],
      pricing: '$2,000 - $2,800/month'
    },
    {
      icon: TreePine,
      title: 'Interior Designer',
      description: 'Creative interior designers specializing in space planning and material selection.',
      features: [
        'Space Planning & Layout Design',
        'Material & Finish Specification',
        '3D Rendering & Visualization',
        'Furniture Selection & Layout',
        'Interior Design Documentation'
      ],
      pricing: '$2,500 - $3,200/month'
    }
  ];

  const consultationServices = [
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
    },
    {
      icon: Building2,
      title: 'Project Planning',
      description: 'Strategic planning and expert consultation to guide your project from concept through completion.',
      features: [
        'Project Feasibility Analysis',
        'Design Strategy Development',
        'Timeline & Budget Planning',
        'Risk Assessment & Mitigation',
        'Team Coordination Planning'
      ],
      pricing: 'From $200/hour'
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
                Staff Augmentation &
                <span className="text-gold block">Consultation Services</span>
              </h1>
              <p className="text-xl text-hero-foreground/80 leading-relaxed">
                Scale your architectural firm with remote talent or get expert consultation 
                for your most challenging projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <SectionHeader
            subtitle="Staff Augmentation"
            title="Remote Architectural Professionals"
            description="Scale your team with vetted remote professionals. All rates include full-time commitment, project management tools access, and ongoing support."
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

      {/* Consultation Services */}
      <section className="section-padding bg-secondary">
        <div className="content-container">
          <SectionHeader
            subtitle="Consultation Services"
            title="Expert Architectural Guidance"
            description="Get professional consultation for complex design challenges, code compliance issues, and project planning needs."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultationServices.map((service, index) => {
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
            title="How We Get You Started"
            description="Simple 3-step process to get qualified remote architectural talent integrated with your team within 2 weeks."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { phase: '01', title: 'Consultation', description: 'Discuss your needs, project requirements, and team structure' },
              { phase: '02', title: 'Matching', description: 'We match you with pre-vetted professionals based on your specific needs' },
              { phase: '03', title: 'Integration', description: 'Seamless onboarding and integration with your existing workflows' },
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
              Ready to Scale Your Team?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Get matched with qualified remote architectural professionals within 2 weeks. No long-term contracts required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gold hover:bg-gold/90 text-gold-foreground"
              >
                <Link to="/contact">Hire Remote Staff</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/projects">View Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;