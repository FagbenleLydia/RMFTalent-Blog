import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-[72px] h-[45px]">
              <img
                src="/logos/rmflogo.svg"
                alt="RMF Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9">
            <a
              href="#services"
              className="text-gray-500 hover:text-purple-600 transition-colors font-light"
            >
              Services
            </a>
            <a
              href="#packages"
              className="text-gray-500 hover:text-[#AD75FF] transition-colors font-light"
            >
              Product packages
            </a>
            <a
              href="#case-studies"
              className="text-gray-500 hover:text-[#AD75FF] transition-colors font-light"
            >
              Case studies
            </a>
            <a
              href="#about"
              className="text-gray-500 hover:text-[#AD75FF] transition-colors font-light"
            >
              About
            </a>
            <a
              href="#blogs"
              className="text-gray-700 hover:text-[#AD75FF] transition-colors font-light"
            >
              Blogs
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-500 border border-[#211743] rounded-lg hover:bg-gray-50  font-light">
              Join RMFTalent
            </button>
            <button className="min-w-[140px] sm:min-w-[150px] px-2 py-2.5 bg-[#AD75FF] text-white rounded-lg  transition-all transform hover:scale-105 font-light">
              <span className="mr-3">Book a call</span>
              <span>&gt;&gt;</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#packages"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Product packages
              </a>
              <a
                href="#case-studies"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Case studies
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#blogs"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </a>

              {/* Mobile CTAs */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <button className="w-full px-6 py-3 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                  Join RMFTalent
                </button>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all font-medium">
                  <span className="">Book a call</span>
                  <span>&gt;&gt;</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
