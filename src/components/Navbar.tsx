import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-900 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium transition">Features</a>
            <a href="#templates" className="text-gray-900 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium transition">Templates</a>
            <a href="#pricing" className="text-gray-900 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium transition">Pricing</a>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            
            <button className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-amber-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
              <span className="relative px-6 py-3 bg-white dark:bg-gray-900 rounded-lg inline-flex items-center text-indigo-500 dark:text-indigo-400 font-medium">
                Get Started
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-900 dark:text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 absolute top-20 left-0 w-full shadow-lg rounded-b-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-gray-900 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400">Features</a>
              <a href="#templates" className="block text-gray-900 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400">Templates</a>
              <a href="#pricing" className="block text-gray-900 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400">Pricing</a>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-amber-500 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-amber-600 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}