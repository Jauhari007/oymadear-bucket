import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-600 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-serif font-bold tracking-wide">
            OyMaDear
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:opacity-80 transition-opacity">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:opacity-80 transition-opacity">
              About Us
            </button>
            <button onClick={() => scrollToSection('products')} className="hover:opacity-80 transition-opacity">
              Products
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:opacity-80 transition-opacity">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:opacity-80 transition-opacity">
              Contact
            </button>
          </nav>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-white text-red-600 px-6 py-2 rounded-full hover:bg-red-50 transition-colors font-medium"
          >
            Order via WhatsApp
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-red-700 border-t border-red-500">
          <nav className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left py-2 hover:opacity-80 transition-opacity"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-2 hover:opacity-80 transition-opacity"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="block w-full text-left py-2 hover:opacity-80 transition-opacity"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left py-2 hover:opacity-80 transition-opacity"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left py-2 hover:opacity-80 transition-opacity"
            >
              Contact
            </button>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white text-red-600 px-6 py-2 rounded-full hover:bg-red-50 transition-colors font-medium text-center"
            >
              Order via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
