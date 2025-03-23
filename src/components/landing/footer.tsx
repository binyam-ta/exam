"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !email.includes('@')) {
      setSubscribeStatus('error');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubscribeStatus('idle');
      }, 5000);
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ExamPrep AI</h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing exam preparation with AI-powered personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaGithub size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#features" scroll={true}>
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#pricing" scroll={true}>
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#testimonials" scroll={true}>
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#faq" scroll={true}>
                  <a className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Study Guides
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Practice Tests
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Video Tutorials
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Flashcards
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Success Stories
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates, tips, and exclusive offers delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
              
              {subscribeStatus === 'success' && (
                <p className="mt-2 text-green-400 text-sm">
                  Thank you for subscribing!
                </p>
              )}
              
              {subscribeStatus === 'error' && (
                <p className="mt-2 text-red-400 text-sm">
                  Please enter a valid email address.
                </p>
              )}
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ExamPrep AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy">
                <a className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms">
                <a className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </Link>
              <Link href="/cookie">
                <a className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
