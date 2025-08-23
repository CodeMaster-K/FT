import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-bounce-gentle"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
                Transforming Ideas Into{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
                Empowering businesses and professionals with cutting-edge web solutions, portfolios, and digital experiences that drive success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/services" data-testid="hero-services-button">
                  <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Explore Our Services
                  </Button>
                </Link>
                <Link href="/portfolio" data-testid="hero-portfolio-button">
                  <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional software development team collaborating"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
            <ChevronDown className="w-4 h-4 text-text-secondary mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Our Solutions</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to elevate your business and professional presence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group" data-testid="service-web-development">
                <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  💻
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Web Development</h3>
                <p className="text-text-secondary mb-6">
                  Custom web applications for small businesses and startups. Modern, responsive, and scalable solutions.
                </p>
                <Link href="/services" className="text-primary font-semibold hover:text-primary-dark" data-testid="service-web-development-link">
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>

            {/* Portfolio Websites */}
            <ScrollReveal delay={200}>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group" data-testid="service-portfolio">
                <div className="text-purple-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  💼
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Portfolio Websites</h3>
                <p className="text-text-secondary mb-6">
                  Professional portfolios for creatives, professionals, and students to showcase their work effectively.
                </p>
                <Link href="/services" className="text-purple-600 font-semibold hover:text-purple-700" data-testid="service-portfolio-link">
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>

            {/* Academic Projects */}
            <ScrollReveal delay={300}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group" data-testid="service-academic">
                <div className="text-green-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Academic Projects</h3>
                <p className="text-text-secondary mb-6">
                  Comprehensive academic project development for students and researchers with modern technologies.
                </p>
                <Link href="/services" className="text-green-600 font-semibold hover:text-green-700" data-testid="service-academic-link">
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" data-testid="view-all-services-button">
              <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
