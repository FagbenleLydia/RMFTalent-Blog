import React from "react";
import { SiTiktok, SiX, SiInstagram } from "react-icons/si";
import { useLocation, Link } from "react-router-dom";

import { Instagram, Phone, MapPin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const phoneNumber = "+2349039846793";
  const location = useLocation();
  const currentPath = location.pathname;

  const handleBookCall = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
    window.open(whatsappUrl, "_blank");
  };

  const socialLinks = [
    { Icon: SiX, href: "https://x.com/rmftalents?s=21" },
    {
      Icon: SiTiktok,
      href: "https://www.tiktok.com/@rmf_talents?_t=ZM-8wP5JdyfqUQ&_r=1",
    },
    {
      Icon: SiInstagram,
      href: "https://www.instagram.com/rmf_talents?igsh=dWJqYmVseHBmM293",
    },
  ];

  const linkStyle = (path: string) =>
    currentPath === path
      ? "text-white font-semibold"
      : "text-gray-300 hover:text-white transition";

  return (
    <footer className="bg-[#211743] text-white relative z-10">
      <div className="max-w-screen-xl mx-auto px-6 pt-10 pb-8">
        {/* Top: Logo & Button */}
        <div className="flex justify-between items-center mb-8">
          <div className="mt-2">
            <img
              src="/logos/rmflogo1.png"
              alt="RMF Logo"
              className="w-[72px] h-[45px]"
            />
          </div>
          <button
            onClick={handleBookCall}
            className="bg-white text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Book a call
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-white mb-10" />

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/home" className={linkStyle("/home")}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/home/services"
                  className={linkStyle("/home/services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/home/case-studies"
                  className={linkStyle("/home/case-studies")}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/home/about" className={linkStyle("/home/about")}>
                  About RMF
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/home/JoinRmf" className={linkStyle("/home/JoinRmf")}>
                  Join RMFTalents
                </Link>
              </li>
              <li>
                <Link to="/home/about" className={linkStyle("/home/about")}>
                  Client Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/home/services"
                  className={linkStyle("/home/services")}
                >
                  Talent Stories
                </Link>
              </li>
              <li>
                <Link to="/home/blogs" className={linkStyle("/home/blogs")}>
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                +234 816 805 1751
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                Lagos, Nigeria
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                informftalent@gmail.com
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow us</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition"
                >
                  <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2021 All Rights Reserved</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
