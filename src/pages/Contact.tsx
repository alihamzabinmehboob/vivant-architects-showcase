import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import SectionHeader from '@/components/ui/section-header';
import Layout from '@/components/layout/Layout';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@vivantarch.com',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Design Street, Architecture City, AC 12345',
      subtitle: 'Visit by appointment'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
      subtitle: 'Weekend consultations available'
    }
  ];

  const projectTypes = [
    'Residential Design',
    'Commercial Architecture',
    'Interior Design',
    'Landscape Architecture',
    'Design Consultation',
    'Other'
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $150,000',
    '$150,000 - $500,000',
    '$500,000 - $1,000,000',
    'Over $1,000,000',
    'Prefer not to say'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-container">
          <div className="min-h-[60vh] flex items-center">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground">
                Let's Start
                <span className="text-gold block">Your Project</span>
              </h1>
              <p className="text-xl text-hero-foreground/80 leading-relaxed">
                Ready to transform your vision into reality? Get in touch with our team 
                for a consultation and let's discuss your architectural needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type</Label>
                        <select
                          id="projectType"
                          className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                          value={formData.projectType}
                          onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <select
                          id="budget"
                          className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Desired Timeline</Label>
                        <Input
                          id="timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          placeholder="e.g., 6-12 months"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-gold hover:bg-gold/90 text-gold-foreground"
                    >
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <SectionHeader
                subtitle="Get in Touch"
                title="Contact Information"
                description="Multiple ways to reach us for your convenience."
                alignment="left"
              />
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="card-elevated">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-gold" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-sm">{info.title}</h4>
                            <p className="text-sm text-foreground">{info.content}</p>
                            <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Consultation CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="text-lg font-semibold">Need immediate assistance?</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Schedule a free 15-minute consultation call with our team.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Schedule Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary">
        <div className="content-container">
          <SectionHeader
            subtitle="Visit Us"
            title="Our Office Location"
            description="Located in the heart of the design district, our office is easily accessible and features our latest design showcases."
          />
          
          <div className="mt-12">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-gold/20 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-gold mx-auto" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm text-muted-foreground">
                  123 Design Street, Architecture City, AC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="content-container">
          <SectionHeader
            subtitle="FAQ"
            title="Common Questions"
            description="Quick answers to frequently asked questions about our services and process."
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What's included in the initial consultation?",
                answer: "Our initial consultation includes project assessment, preliminary design concepts, timeline discussion, and cost estimation."
              },
              {
                question: "How long does a typical project take?",
                answer: "Timeline varies by project scope, typically ranging from 3-6 months for residential to 12-24 months for commercial projects."
              },
              {
                question: "Do you handle permits and approvals?",
                answer: "Yes, we manage all permit applications and regulatory approvals as part of our comprehensive service offering."
              },
              {
                question: "What's your design process like?",
                answer: "Our process includes discovery, concept development, design refinement, documentation, and construction administration phases."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6 space-y-2">
                  <h4 className="font-semibold text-gold">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;