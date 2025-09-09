import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeader from '@/components/ui/section-header';
import Layout from '@/components/layout/Layout';

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Modern Riverside Residence',
      category: 'Residential',
      location: 'Portland, OR',
      year: '2024',
      description: 'A stunning contemporary home that seamlessly blends with its natural riverside setting, featuring sustainable materials and energy-efficient design.',
      tags: ['Sustainable Design', 'Contemporary', 'Residential'],
      stats: { size: '4,500 sq ft', timeline: '18 months', team: '6 professionals' }
    },
    {
      id: 2,
      title: 'Tech Campus Innovation Hub',
      category: 'Commercial',
      location: 'Seattle, WA',
      year: '2023',
      description: 'A collaborative workspace designed to foster innovation, featuring flexible office spaces, creative zones, and sustainable building practices.',
      tags: ['Commercial', 'Innovation', 'Flexible Spaces'],
      stats: { size: '85,000 sq ft', timeline: '24 months', team: '12 professionals' }
    },
    {
      id: 3,
      title: 'Community Arts Center',
      category: 'Institutional',
      location: 'San Francisco, CA',
      year: '2023',
      description: 'A vibrant cultural hub that brings together performance spaces, galleries, and educational facilities in an architecturally striking building.',
      tags: ['Cultural', 'Community', 'Performance'],
      stats: { size: '35,000 sq ft', timeline: '30 months', team: '8 professionals' }
    },
    {
      id: 4,
      title: 'Sustainable Office Tower',
      category: 'Commercial',
      location: 'Denver, CO',
      year: '2022',
      description: 'A LEED Platinum certified office building that sets new standards for sustainable commercial architecture in the region.',
      tags: ['LEED Platinum', 'Sustainable', 'Office'],
      stats: { size: '120,000 sq ft', timeline: '36 months', team: '15 professionals' }
    },
    {
      id: 5,
      title: 'Mountain Retreat Villa',
      category: 'Residential',
      location: 'Aspen, CO',
      year: '2022',
      description: 'A luxury mountain residence that maximizes views while minimizing environmental impact through thoughtful design and material selection.',
      tags: ['Luxury', 'Mountain', 'Views'],
      stats: { size: '6,800 sq ft', timeline: '20 months', team: '7 professionals' }
    },
    {
      id: 6,
      title: 'Urban Mixed-Use Development',
      category: 'Mixed-Use',
      location: 'Austin, TX',
      year: '2021',
      description: 'A transformative mixed-use development that combines residential, retail, and office spaces to create a vibrant urban community.',
      tags: ['Mixed-Use', 'Urban Planning', 'Community'],
      stats: { size: '200,000 sq ft', timeline: '42 months', team: '20 professionals' }
    }
  ];

  const projectCategories = [
    { name: 'All Projects', count: 150 },
    { name: 'Residential', count: 65 },
    { name: 'Commercial', count: 45 },
    { name: 'Institutional', count: 25 },
    { name: 'Mixed-Use', count: 15 }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-container">
          <div className="min-h-[60vh] flex items-center">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground">
                Our
                <span className="text-gold block">Portfolio</span>
              </h1>
              <p className="text-xl text-hero-foreground/80 leading-relaxed">
                Explore our diverse collection of architectural projects, 
                each one a testament to innovative design and exceptional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <SectionHeader
            subtitle="Our Work"
            title="150+ Successful Projects"
            description="From intimate residential spaces to large-scale commercial developments, we've delivered exceptional results across all project types."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {projectCategories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className={`px-4 py-2 text-sm font-medium cursor-pointer transition-smooth hover:bg-gold hover:text-gold-foreground ${
                  index === 0 ? 'bg-gold text-gold-foreground' : ''
                }`}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="section-padding bg-secondary">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="card-elevated hover:shadow-medium transition-smooth group">
                <div className="aspect-video bg-gradient-to-br from-gold/20 to-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold text-gold-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-smooth"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-gold transition-smooth">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t space-y-2">
                    <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="font-medium">{project.stats.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span className="font-medium">{project.stats.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team:</span>
                        <span className="font-medium">{project.stats.team}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-gold">150+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Projects Completed
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-gold">$2.5B</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Project Value
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-gold">25+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-gold">50+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Awards Won
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Let's discuss how we can bring your architectural vision to life with the same 
              dedication and expertise showcased in our portfolio.
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
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;