import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Code, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50' : 'bg-white/90 backdrop-blur-md border-b border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" data-testid="logo-link">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <Code className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold text-text-primary">FT Solutions</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-text-secondary hover:text-primary transition-colors duration-200 ${
                    location === link.href ? 'text-primary font-semibold' : ''
                  }`}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" data-testid="nav-contact">
                <Button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-200">
                  Contact
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden hamburger flex flex-col space-y-1.5 p-2 ${isMenuOpen ? 'active' : ''}`}
              data-testid="mobile-menu-button"
            >
              <span className="hamburger-line line1 w-6 h-0.5 bg-text-primary"></span>
              <span className="hamburger-line line2 w-6 h-0.5 bg-text-primary"></span>
              <span className="hamburger-line line3 w-6 h-0.5 bg-text-primary"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`menu-overlay fixed top-0 right-0 w-full h-full bg-white z-40 lg:hidden ${isMenuOpen ? 'active' : ''}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl font-semibold text-text-primary hover:text-primary transition-colors duration-200 ${
                location === link.href ? 'text-primary' : ''
              }`}
              onClick={closeMenu}
              data-testid={`mobile-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenu} data-testid="mobile-nav-contact">
            <Button className="bg-primary text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-primary-dark transition-colors duration-200">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
