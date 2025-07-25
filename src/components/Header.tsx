import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+2349039846793";
  const { pathname } = useLocation();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  const handleBookCall = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <header className="bg-[#FAFAFA] backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <div className="w-[72px] h-[45px]">
              <img
                src="/logos/rmflogo.svg"
                alt="RMF Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden text-[14px] lg:flex items-center space-x-9">
            <Link
              to="/home/services"
              className={`transition-colors font-light ${
                isActive("/home/services")
                  ? "text-[#AD75FF] font-medium"
                  : "text-[#211743] hover:text-[#AD75FF]"
              }`}
            >
              Services
            </Link>
            <Link
              to="/home/packages"
              className={`transition-colors font-light ${
                isActive("/home/packages")
                  ? "text-[#AD75FF] font-medium"
                  : "text-[#211743] hover:text-[#AD75FF]"
              }`}
            >
              Product packages
            </Link>
            <Link
              to="/home/case-studies"
              className={`transition-colors font-light ${
                isActive("/home/case-studies")
                  ? "text-[#AD75FF] font-medium"
                  : "text-[#211743] hover:text-[#AD75FF]"
              }`}
            >
              Case studies
            </Link>
            <Link
              to="/home/about"
              className={`transition-colors font-light ${
                isActive("/home/about")
                  ? "text-[#AD75FF] font-medium"
                  : "text-[#211743] hover:text-[#AD75FF]"
              }`}
            >
              About
            </Link>

            {/* 🔁 Replaced "Blogs" with external link */}
            <a
              href="https://blog.rmftalents.com/"
              className="transition-colors font-light text-[#211743] hover:text-[#AD75FF]"
            >
              Blogs
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden text-[14px] lg:flex items-center space-x-4">
            <Link
              to="/home/JoinRmf"
              className={`px-4 py-2 border rounded-lg font-light transition-colors ${
                isActive("/home/JoinRmf")
                  ? "text-[#AD75FF] border-[#211743] bg-purple-50"
                  : "text-[#211743] border-[#211743] hover:bg-gray-100"
              }`}
            >
              Join RMFTalent
            </Link>

            <button
              onClick={handleBookCall}
              className="min-w-[140px] sm:min-w-[150px] px-2 py-2.5 bg-[#AD75FF] text-white rounded-lg transition-all transform hover:scale-105 font-light"
            >
              <span className="mr-3">Book a call</span>
              <span className="mt-1">&gt;&gt;</span>
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
              <Link
                to="/home/services"
                className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                  isActive("/home/services")
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/home/packages"
                className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                  isActive("/home/packages")
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Product packages
              </Link>
              <Link
                to="/home/case-studies"
                className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                  isActive("/home/case-studies")
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Case studies
              </Link>
              <Link
                to="/home/about"
                className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                  isActive("/home/about")
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              {/* 🔁 Replaced Blog link with external a tag */}
              <a
                href="https://blog.rmftalents.com/"
                className="py-2 px-4 rounded-lg font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              >
                Blogs
              </a>

              <Link
                to="/home/JoinRmf"
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                  isActive("/home/JoinRmf")
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                Join RMFTalent
              </Link>

              {/* Book call */}
              <button
                onClick={() => {
                  handleBookCall();
                  setIsMenuOpen(false);
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all font-medium"
              >
                <span>Book a call</span>
                <span>&gt;&gt;</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
