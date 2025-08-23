import { Link } from "wouter";
import { Code, Linkedin, Twitter, Github, DribbbleIcon as Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-text-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Code className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold">FT Solutions</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming ideas into digital excellence with innovative web solutions and professional services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200" data-testid="social-linkedin">
                <Linkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200" data-testid="social-twitter">
                <Twitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200" data-testid="social-github">
                <Github className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200" data-testid="social-dribbble">
                <Dribbble className="text-xl" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/services" className="hover:text-primary transition-colors duration-200" data-testid="footer-web-development">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors duration-200" data-testid="footer-portfolio-websites">Portfolio Websites</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors duration-200" data-testid="footer-academic-projects">Academic Projects</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors duration-200" data-testid="footer-ats-resume">ATS Resume Makers</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors duration-200" data-testid="footer-internship">Internship Programs</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors duration-200" data-testid="footer-freelance">Freelance Network</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/about" className="hover:text-primary transition-colors duration-200" data-testid="footer-about">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors duration-200" data-testid="footer-work">Our Work</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors duration-200" data-testid="footer-careers">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors duration-200" data-testid="footer-contact">Contact</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200" data-testid="footer-blog">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200" data-testid="footer-privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                data-testid="newsletter-email"
                required
              />
              <Button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-200"
                data-testid="newsletter-subscribe"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 FT Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-primary transition-colors duration-200" data-testid="footer-terms">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors duration-200" data-testid="footer-privacy-policy">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-200" data-testid="footer-cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
