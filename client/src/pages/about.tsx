import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Linkedin, Github } from "lucide-react";

export default function About() {
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "5+", label: "Years Experience" }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      testId: "team-alex"
    },
    {
      name: "Sarah Chen",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6b87b92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      testId: "team-sarah"
    },
    {
      name: "Michael Davis",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      testId: "team-michael"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      testId: "team-emily"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">About FT Solutions</h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Driven by innovation, powered by expertise, dedicated to your success
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Content */}
            <ScrollReveal>
              <div>
                <h3 className="text-3xl font-bold text-text-primary mb-6">Our Story</h3>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  Founded with a vision to democratize digital excellence, FT Solutions has been at the forefront of web development innovation. We believe that every business, regardless of size, deserves access to world-class digital solutions.
                </p>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Our journey began with a simple mission: to bridge the gap between complex technology and practical business needs. Today, we're proud to have helped hundreds of businesses and professionals establish their digital presence.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center" data-testid={`stat-${index}`}>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Company Image */}
            <ScrollReveal delay={200}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Professional business team meeting and collaboration"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  data-testid="company-image"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h3 className="text-3xl font-bold text-text-primary text-center mb-12">Meet Our Team</h3>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <div className="text-center group" data-testid={member.testId}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <h4 className="text-xl font-semibold text-text-primary mb-2">{member.name}</h4>
                  <p className="text-text-secondary mb-2">{member.role}</p>
                  <div className="flex justify-center space-x-3">
                    <Linkedin className="w-5 h-5 text-primary hover:text-primary-dark cursor-pointer" />
                    <Github className="w-5 h-5 text-primary hover:text-primary-dark cursor-pointer" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-text-primary mb-6">Our Values</h3>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="text-center p-6" data-testid="value-innovation">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="text-xl font-semibold text-text-primary mb-2">Innovation</h4>
                <p className="text-text-secondary">We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center p-6" data-testid="value-quality">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="text-xl font-semibold text-text-primary mb-2">Quality</h4>
                <p className="text-text-secondary">Every project is crafted with attention to detail and tested thoroughly to ensure it meets the highest standards.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center p-6" data-testid="value-partnership">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold text-text-primary mb-2">Partnership</h4>
                <p className="text-text-secondary">We build lasting relationships with our clients, working as partners to achieve their long-term success.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Let's discuss how we can help you achieve your digital goals and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" data-testid="about-cta-contact-button">
                  <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Get In Touch
                  </Button>
                </Link>
                <Link href="/careers" data-testid="about-cta-careers-button">
                  <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                    Join Our Team
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
