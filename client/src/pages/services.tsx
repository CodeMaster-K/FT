import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Code, Briefcase, GraduationCap, FileText, Users, Handshake } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications for small businesses and startups. Modern, responsive, and scalable solutions.",
      gradient: "from-blue-50 to-blue-100",
      color: "text-primary",
      features: ["Responsive Design", "E-commerce Solutions", "Performance Optimization"],
      testId: "service-web-development"
    },
    {
      icon: Briefcase,
      title: "Portfolio Websites",
      description: "Professional portfolios for creatives, professionals, and students to showcase their work effectively.",
      gradient: "from-purple-50 to-purple-100",
      color: "text-purple-600",
      features: ["Personal Branding", "Gallery Systems", "Contact Integration"],
      testId: "service-portfolio"
    },
    {
      icon: GraduationCap,
      title: "Academic Projects",
      description: "Comprehensive academic project development for students and researchers with modern technologies.",
      gradient: "from-green-50 to-green-100",
      color: "text-green-600",
      features: ["Research Platforms", "Data Visualization", "Documentation"],
      testId: "service-academic"
    },
    {
      icon: FileText,
      title: "ATS Resume Makers",
      description: "Professional ATS-friendly resume builders to help candidates stand out in the job market.",
      gradient: "from-orange-50 to-orange-100",
      color: "text-orange-600",
      features: ["ATS Optimization", "Multiple Templates", "Export Options"],
      testId: "service-resume"
    },
    {
      icon: Users,
      title: "Internship Programs",
      description: "Comprehensive internship opportunities for aspiring developers and designers to gain real-world experience.",
      gradient: "from-pink-50 to-pink-100",
      color: "text-pink-600",
      features: ["Mentorship", "Real Projects", "Certification"],
      testId: "service-internship"
    },
    {
      icon: Handshake,
      title: "Freelancer Network",
      description: "Connect with skilled freelancers for your projects or join our network as a freelance professional.",
      gradient: "from-indigo-50 to-indigo-100",
      color: "text-indigo-600",
      features: ["Vetted Professionals", "Project Matching", "Quality Assurance"],
      testId: "service-freelancer"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">Our Services</h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Comprehensive digital solutions tailored to elevate your business and professional presence
              </p>
              <Link href="/contact" data-testid="services-hero-contact-button">
                <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className={`bg-gradient-to-br ${service.gradient} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group`} data-testid={service.testId}>
                  <div className={`${service.color} text-4xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">{service.title}</h3>
                  <p className="text-text-secondary mb-6">{service.description}</p>
                  <ul className="text-sm text-text-secondary space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className={`w-4 h-4 ${service.color} mr-2`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`${service.color} font-semibold hover:opacity-80 transition-opacity duration-200`} data-testid={`${service.testId}-link`}>
                    Learn More →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Let's discuss your project requirements and create a solution that perfectly fits your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" data-testid="services-cta-contact-button">
                  <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/portfolio" data-testid="services-cta-portfolio-button">
                  <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                    View Our Work
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
