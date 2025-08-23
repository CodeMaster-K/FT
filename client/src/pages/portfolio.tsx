import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Modern Retail Platform",
      description: "A comprehensive e-commerce solution with advanced inventory management and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "E-commerce",
      tech: "React, Node.js, Stripe",
      categoryColor: "bg-blue-100 text-blue-800",
      testId: "project-ecommerce"
    },
    {
      title: "Creative Portfolio",
      description: "Stunning portfolio website for a digital artist with interactive galleries and smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Portfolio",
      tech: "Vue.js, GSAP, Netlify",
      categoryColor: "bg-purple-100 text-purple-800",
      testId: "project-portfolio"
    },
    {
      title: "Research Platform",
      description: "Collaborative research platform with data visualization and publication management system.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Academic",
      tech: "Django, Chart.js, AWS",
      categoryColor: "bg-green-100 text-green-800",
      testId: "project-research"
    },
    {
      title: "ATS Resume Builder",
      description: "AI-powered resume builder with ATS optimization and multiple professional templates.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Tools",
      tech: "React, Python, OpenAI",
      categoryColor: "bg-orange-100 text-orange-800",
      testId: "project-resume"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time business intelligence dashboard with advanced reporting and data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Analytics",
      tech: "Angular, D3.js, Firebase",
      categoryColor: "bg-indigo-100 text-indigo-800",
      testId: "project-analytics"
    },
    {
      title: "App Landing Page",
      description: "Converting landing page for a productivity mobile app with interactive prototypes.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Mobile",
      tech: "Next.js, Framer Motion",
      categoryColor: "bg-pink-100 text-pink-800",
      testId: "project-mobile"
    },
    {
      title: "Learning Platform",
      description: "Comprehensive LMS with course management, progress tracking, and interactive content.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Education",
      tech: "Laravel, Vue.js, MySQL",
      categoryColor: "bg-cyan-100 text-cyan-800",
      testId: "project-learning"
    },
    {
      title: "Tech Startup Site",
      description: "Modern startup website with investor portal, team showcase, and product demonstrations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Startup",
      tech: "Gatsby, GraphQL, Contentful",
      categoryColor: "bg-red-100 text-red-800",
      testId: "project-startup"
    },
    {
      title: "Healthcare Portal",
      description: "Secure patient management system with appointment scheduling and telemedicine features.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Healthcare",
      tech: "HIPAA, React, Node.js",
      categoryColor: "bg-teal-100 text-teal-800",
      testId: "project-healthcare"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">Our Portfolio</h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Showcasing our latest projects and success stories across various industries
              </p>
              <Link href="/contact" data-testid="portfolio-hero-contact-button">
                <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 100}>
                <div className="project-card bg-white rounded-2xl overflow-hidden shadow-lg" data-testid={project.testId}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <Badge className={`${project.categoryColor} text-xs font-semibold px-2.5 py-0.5 rounded-full`}>
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                    <p className="text-text-secondary text-sm mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">{project.tech}</span>
                      <ExternalLink className="w-4 h-4 text-primary hover:text-primary-dark cursor-pointer" data-testid={`${project.testId}-link`} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <ScrollReveal>
              <Link href="/contact" data-testid="portfolio-view-all-button">
                <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Ready to Join Our Success Stories?</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Let's create something amazing together. Contact us to discuss your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" data-testid="portfolio-cta-contact-button">
                  <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/services" data-testid="portfolio-cta-services-button">
                  <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
