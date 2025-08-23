import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { GraduationCap, Laptop, Briefcase, Check, ArrowRight } from "lucide-react";

export default function Careers() {
  const opportunities = [
    {
      icon: GraduationCap,
      title: "Internship Program",
      duration: "3-6 month programs",
      description: "Hands-on experience with real projects, mentorship from senior developers, and potential for full-time positions.",
      skills: ["Frontend Development", "Backend Development", "UI/UX Design"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      testId: "opportunity-internship"
    },
    {
      icon: Laptop,
      title: "Freelance Network",
      duration: "Project-based work",
      description: "Join our network of skilled freelancers and work on exciting projects with competitive compensation and flexible schedules.",
      skills: ["Web Development", "Mobile Apps", "Digital Marketing"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      testId: "opportunity-freelance"
    },
    {
      icon: Briefcase,
      title: "Full-time Positions",
      duration: "Career opportunities",
      description: "Build your career with us in a collaborative environment with continuous learning opportunities and competitive benefits.",
      skills: ["Senior Developer", "DevOps Engineer", "Product Manager"],
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      testId: "opportunity-fulltime"
    }
  ];

  const benefits = [
    "Flexible working arrangements",
    "Continuous learning and development",
    "Work on cutting-edge technologies",
    "Competitive compensation packages",
    "Collaborative and inclusive culture",
    "Mentorship from industry experts"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">Join Our Team</h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Grow your career with us through internships, freelance opportunities, and full-time positions
              </p>
              <Link href="/contact" data-testid="careers-hero-contact-button">
                <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Apply Now
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Opportunities Available</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Find the perfect role that matches your skills and career goals
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Opportunities List */}
            <div className="space-y-6">
              {opportunities.map((opportunity, index) => (
                <ScrollReveal key={opportunity.title} delay={index * 100}>
                  <Card className="hover:shadow-xl transition-shadow duration-300" data-testid={opportunity.testId}>
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${opportunity.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                          <opportunity.icon className={`${opportunity.color} text-xl`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-text-primary">{opportunity.title}</CardTitle>
                          <p className="text-text-secondary">{opportunity.duration}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary mb-4">{opportunity.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {opportunity.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className={`${opportunity.color} font-semibold hover:opacity-80 transition-opacity duration-200`}
                        data-testid={`${opportunity.testId}-link`}
                      >
                        Learn More →
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Benefits & Culture */}
            <ScrollReveal delay={300}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Student portfolio showcase and collaborative workspace"
                  className="rounded-2xl shadow-2xl w-full h-auto mb-8"
                  data-testid="careers-workspace-image"
                />

                <h3 className="text-3xl font-bold text-text-primary mb-6">Why Choose FT Solutions?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-center space-x-3" data-testid={`benefit-${index}`}>
                      <Check className="text-primary text-xl flex-shrink-0" />
                      <span className="text-lg text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Application Process</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Simple steps to join our team
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", description: "Submit your application through our contact form" },
              { step: "2", title: "Review", description: "We review your application and portfolio" },
              { step: "3", title: "Interview", description: "Technical and cultural fit interview" },
              { step: "4", title: "Welcome", description: "Join our team and start your journey" }
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 100}>
                <div className="text-center" data-testid={`process-step-${item.step}`}>
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-text-secondary">{item.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Take the next step in your career and join a team that values growth, innovation, and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" data-testid="careers-cta-apply-button">
                  <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center space-x-2">
                    <span>Apply Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about" data-testid="careers-cta-about-button">
                  <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                    Learn About Us
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
