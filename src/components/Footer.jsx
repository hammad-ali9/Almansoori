import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Dental Care', path: '/services/dental' },
    { name: 'Hydrafacial', path: '/services/hydrafacial' },
    { name: 'Laser Treatment', path: '/services/laser' },
    { name: 'Dermatology', path: '/services/peeling' },
    { name: 'RF Treatment', path: '/services/rf' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com/almansoorimedical', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-heading text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      {/* Main Footer Content */}
      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Top Section - Newsletter CTA */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 border border-white rounded-full"></div>
              <div className="absolute bottom-0 left-1/4 w-48 h-48 border border-white rounded-full"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-primary text-3xl md:text-4xl text-white mb-4">
                  Stay Updated with Our Latest News
                </h3>
                <p className="text-white/80">
                  Subscribe to our newsletter for health tips, special offers, and clinic updates.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-heading px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          {/* Middle Section - Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <img src="/images/logo_gradient.svg" alt="Almansoori" className="h-12" />
                <span className="font-primary text-2xl text-white group-hover:text-gray-300 transition-colors">almansoori</span>
              </Link>
              <p className="text-white/70 leading-relaxed mb-6">
                Your trusted partner in comprehensive medical and dental care. Creating confident smiles since 1997.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 bg-white/10 hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                    >
                      <Icon className="text-white group-hover:text-heading transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-primary text-xl text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-white/50 group-hover:bg-white rounded-full transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-primary text-xl text-white mb-6">Our Services</h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-white/50 group-hover:bg-white rounded-full transition-colors"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-primary text-xl text-white mb-6">Contact Us</h4>
              <ul className="space-y-5">
                <li>
                  <a href="tel:+97332221676" className="flex items-start gap-4 text-white/70 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <FaPhone className="text-white group-hover:text-heading transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Call Us</p>
                      <p className="font-medium">+973 3222 1676</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4 text-white/70">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Visit Us</p>
                      <p className="font-medium">Riffa, Kingdom of Bahrain</p>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="mailto:info@almansoori.bh" className="flex items-start gap-4 text-white/70 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <FaEnvelope className="text-white group-hover:text-heading transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Email Us</p>
                      <p className="font-medium">info@almansoori.bh</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4 text-white/70">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Working Hours</p>
                      <p className="font-medium">Sat - Thu: 9AM - 9PM</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/50 text-sm text-center md:text-left">
                © 2025 Almansoori Medical. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-white/50 hover:text-white text-sm transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
