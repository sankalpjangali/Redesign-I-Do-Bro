import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Solutions', href: '#solutions' },
    { name: 'Impact Stories', href: '#impact' },
    { name: 'Partner with Us', href: '#contact' },
    { name: 'Resources', href: '#resources' },
    { name: 'Careers', href: '#careers' }
  ];

  const solutionLinks = [
    { name: 'Citizenship Programs', href: '#citizenship' },
    { name: 'Entrepreneurship Support', href: '#entrepreneurship' },
    { name: 'Partnership Opportunities', href: '#partnership' },
    { name: 'RISE Values Framework', href: '#rise' },
    { name: 'PECO-SYSTEM Approach', href: '#peco-system' }
  ];

  const resourceLinks = [
    { name: 'Impact Reports', href: '#', icon: Download },
    { name: 'Company Brochure', href: '#', icon: Download },
    { name: 'Media Toolkit', href: '#', icon: Download },
    { name: 'Blog & News', href: '#', icon: ExternalLink },
    { name: 'Newsletter Archive', href: '#', icon: ExternalLink }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">idobro</div>
              <div className="text-gray-400 mb-4">Multiply your Impact</div>
              <p className="text-gray-300 leading-relaxed">
                Idobro's end-to-end approach seeks to overcome systemic barriers, 
                provide market-based solutions and forge alliances driven by shared values.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-6">Our Solutions</h4>
            <ul className="space-y-3">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {resourceLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      {link.name}
                      <IconComponent className="h-4 w-4 ml-2" />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <h5 className="font-semibold text-white">Contact</h5>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <a href="mailto:info@idobro.com" className="hover:text-white transition-colors">
                  info@idobro.com
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>+91 22-28513880</span>
              </div>
              <div className="flex items-start text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                <span>Mumbai, India (HQ)<br />Global presence in 7 countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400">7</div>
              <div className="text-gray-400 text-sm">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">250K+</div>
              <div className="text-gray-400 text-sm">Students Impacted</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">5K+</div>
              <div className="text-gray-400 text-sm">Entrepreneurs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400">1M+</div>
              <div className="text-gray-400 text-sm">Lives Reached</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Idobro. All rights reserved. | Partner for Purpose, Profit and Peace
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
