import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+2349039846793"; // Your WhatsApp number

  const handleBookCall = () => {
    // Create WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
    // Open in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Now wrapped with Link */}
          <Link to="/home" className="flex items-center space-x-2">
            <div className="w-[72px] h-[45px]">
              <img
                src="/logos/rmflogo.svg"
                alt="RMF Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Updated links */}
          <nav className="hidden lg:flex items-center space-x-9">
            <Link
              to="/home/services"
              className="text-gray-500 hover:text-purple-600 transition-colors font-light"
            >
              Services
            </Link>
            <Link
              to="/home/packages"
              className="text-gray-500 hover:text-[#AD75FF] transition-colors font-light"
            >
              Product packages
            </Link>
            <Link
              to="/home/case-studies"
              className="text-gray-500 hover:text-[#AD75FF] transition-colors font-light"
            >
              Case studies
            </Link>
            <Link
              to="/home/about"
              className="text-gray-500 hover:text-[#AD75FF] transition-colors font-light"
            >
              About
            </Link>
            <Link
              to="/home/blogs"
              className="text-gray-700 hover:text-[#AD75FF] transition-colors font-light"
            >
              Blogs
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/home#contact-form"
              className="px-4 py-2 text-gray-500 border border-[#211743] rounded-lg hover:bg-gray-50 font-light"
            >
              Join RMFTalent
            </Link>

            <button
              onClick={handleBookCall}
              className="min-w-[140px] sm:min-w-[150px] px-2 py-2.5 bg-[#AD75FF] text-white rounded-lg transition-all transform hover:scale-105 font-light"
            >
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

        {/* Mobile Menu - Updated links */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/home/services"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/home/packages"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Product packages
              </Link>
              <Link
                to="/home/case-studies"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Case studies
              </Link>
              <Link
                to="/home/about"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/home/blogs"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>

              {/* Mobile CTAs */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link
                  to="/home#contact-form"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full px-6 py-3 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium text-center"
                >
                  Join RMFTalent
                </Link>

                <button
                  onClick={() => {
                    handleBookCall();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all font-medium"
                >
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
