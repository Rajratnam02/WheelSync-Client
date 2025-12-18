import React from 'react';
import { FaMotorcycle, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Branding */}
          <div className="space-y-6">
            <div className="flex gap-3 items-center">
              <FaMotorcycle className="text-3xl text-[#14B8A6]" />
              <p className="text-2xl inter-700">Wheel<span className="text-[#14B8A6]">Sync</span></p>
            </div>
            <p className="text-gray-400 inter-400 leading-relaxed">
              Premium vehicle rentals made simple. Explore the city or the open road with our elite fleet of bikes and cars.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#14B8A6] hover:border-[#14B8A6] transition-all duration-300">
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg inter-600 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 inter-400">
              {['Our Fleet', 'How it Works', 'Rent a Bike', 'Rent a Car', 'About Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#14B8A6] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg inter-600 mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 inter-400">
              {['FAQs', 'Privacy Policy', 'Terms & Conditions', 'Rental Agreement', 'Insurance Details'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#14B8A6] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg inter-600 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 inter-400">
              <li className="flex items-start gap-3">
                <IoLocationOutline className="text-[#14B8A6] text-xl shrink-0" />
                <span>Patna, Bihar, India 800001</span>
              </li>
              <li className="flex items-center gap-3">
                <IoCallOutline className="text-[#14B8A6] text-xl shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <IoMailOutline className="text-[#14B8A6] text-xl shrink-0" />
                <span>support@wheelsync.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 inter-400">
          <p>© {currentYear} WheelSync. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;