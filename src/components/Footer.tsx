import React from "react";
import {
  Facebook,
  X,
  Linkedin,
  Instagram,
  Music2,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#150c2d] text-white relative z-10">
      <div className="max-w-screen-xl mx-auto px-6 pt-10 pb-8">
        {/* Top: Logo & Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight">RMF</h1>
            <p className="text-sm tracking-widest text-gray-400 ml-1">
              TALENTS
            </p>
          </div>
          <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
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
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">About RMF</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Join RMFTalents</a>
              </li>
              <li>
                <a href="#">Client Stories</a>
              </li>
              <li>
                <a href="#">Talent Stories</a>
              </li>
              <li>
                <a href="#">Blogs</a>
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
          <div className="flex flex-col items-end space-y-3">
            {/* Right-aligned title */}
            <h4 className="text-white text-[16px] font-semibold">Follow us</h4>

            {/* Centered icons below text */}
            <div className="flex items-center gap-3">
              {[Facebook, X, Linkedin, Instagram, Music2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
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
