import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const linkGroups: FooterLinkGroup[] = [
    {
      title: "Platform",
      links: [
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Testimonials", href: "/#testimonials" },
        { label: "FAQ", href: "/#faq" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Study Tips", href: "/resources/study-tips" },
        { label: "Exam Guides", href: "/resources/exam-guides" },
        { label: "Success Stories", href: "/resources/success-stories" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/#contact" },
        { label: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Accessibility", href: "/accessibility" }
      ]
    }
  ];
  
  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook className="h-6 w-6" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter className="h-6 w-6" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram className="h-6 w-6" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaLinkedin className="h-6 w-6" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaYoutube className="h-6 w-6" />, href: "https://youtube.com", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <div className="relative h-10 w-10 mr-3">
                  <Image 
                    src="/images/logo.png" 
                    alt="AMM Exam Prep Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold">AMM Exam Prep</span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Empowering students to achieve their academic goals through AI-powered exam preparation.
            </p>
            
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Link Groups */}
          {linkGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400">
                Get the latest news, study tips, and exclusive offers
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            &copy; {currentYear} AMM Exam Prep. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 md:mt-0">
            Designed and developed with ❤️ for students worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
