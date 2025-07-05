import React from 'react';
import { motion } from 'framer-motion';
import { Home, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';   // ← add

const Footer: React.FC = () => {
  const date = new Date();
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/homesphere_interior/profilecard/?igsh=NWlqdzBvdzl4ZTRt', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/message/YHZPUJVJDLFNJ1', label: 'WhatsApp' }, // ← add
  ];

  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                className="h-8 w-8 rounded-full text-[#D4AF37]"
                src="/assets/homeSphere.jpg"
                alt="Home Sphere"
              />
              <span className="text-xl font-bold text-[#D4AF37]">Home Sphere</span>
            </div>

            <p className="text-gray-300 mb-6 max-w-md">
              Creating exceptional interior spaces that reflect your unique style and enhance
              your lifestyle. From concept to completion, we bring your vision to life.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-gray-300">No.30/39A KK.Nagar Chennai - 600078</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-gray-300">9345921521</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-gray-300">contact@homesphereinterior.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {date.getFullYear()} Home Sphere. All rights reserved. Crafted with passion for
            exceptional design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
