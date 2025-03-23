"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ui/theme-toggle';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src={isScrolled ? "/images/logo.png" : "/images/logo-white.png"} 
              alt="ExamPrep AI Logo" 
              width={150} 
              height={40} 
              className={isScrolled ? '' : 'hidden dark:block'}
            />
            <Image 
              src="/images/logo.png" 
              alt="ExamPrep AI Logo" 
              width={150} 
              height={40} 
              className={isScrolled ? 'dark:hidden' : 'dark:hidden'}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features" 
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400' 
                  : 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400' 
                  : 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Pricing
            </Link>
            <Link 
              href="#testimonials" 
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400' 
                  : 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Testimonials
            </Link>
            <Link 
              href="/blog" 
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400' 
                  : 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle 
              className={isScrolled 
                ? "bg-gray-100 dark:bg-gray-800" 
                : "bg-white/10 dark:bg-gray-800/30"
              } 
            />
            <Button 
              variant="ghost" 
              size="sm" 
              className={`font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400' 
                  : 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              asChild
            >
              <Link href="/login">Log In</Link>
            </Button>
            <Button 
              variant={isScrolled ? "default" : "outline"} 
              size="sm" 
              className={isScrolled 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "border-white text-white hover:bg-white/10 dark:border-white dark:text-white"
              }
              asChild
            >
              <Link href="/register">Sign Up Free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle 
              className={isScrolled 
                ? "bg-gray-100 dark:bg-gray-800" 
                : "bg-white/10 dark:bg-gray-800/30"
              } 
            />
            <button
              className="text-gray-700 dark:text-gray-200"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 py-5 space-y-4">
            <Link 
              href="#features" 
              className="block font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="block font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              href="#testimonials" 
              className="block font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link 
              href="/blog" 
              className="block font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-center"
                asChild
              >
                <Link href="/login" onClick={toggleMenu}>Log In</Link>
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="w-full justify-center bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <Link href="/register" onClick={toggleMenu}>Sign Up Free</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
