import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add this new effect to scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dreamable-darker/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="relative h-10 w-10">
              <img 
                src="/lovable-uploads/1177f6c4-ce25-4504-ade3-9f5a6eacb755.png" 
                alt="Dreamable Logo" 
                className="h-full w-full"
              />
            </div>
            <span className="ml-2 text-xl font-bold">Dreamable</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-dreamable-green transition-colors">Home</Link>
            <Link to="/services" className="text-white hover:text-dreamable-green transition-colors">Services</Link>
            <Link to="/portfolio" className="text-white hover:text-dreamable-green transition-colors">Portfolio</Link>
            <Link to="/about" className="text-white hover:text-dreamable-green transition-colors">About</Link>
            <Link to="/contact" className="text-white hover:text-dreamable-green transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Button>
              <Link to="/contact" className="text-black">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3 bg-dreamable-darker/95 backdrop-blur-md rounded-b-lg border-t border-dreamable-gray/20 mt-2">
            <Link 
              to="/" 
              className="block py-2 px-4 text-white hover:text-dreamable-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block py-2 px-4 text-white hover:text-dreamable-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="block py-2 px-4 text-white hover:text-dreamable-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 text-white hover:text-dreamable-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-4 text-white hover:text-dreamable-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 pb-2">
              <Button className="w-full bg-dreamable-green hover:bg-dreamable-darkgreen">
                <Link 
                  to="/contact"
                  className="text-black font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
