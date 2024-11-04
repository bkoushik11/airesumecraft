import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-4">AIResumeprocraft</h4>
            <p className="text-sm">Empowering careers through intelligent resume crafting technology.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-indigo-400 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resume-builder" className="hover:text-indigo-400 transition">Resume Builder</Link></li>
              <li><Link to="/ats-checker" className="hover:text-indigo-400 transition">ATS Checker</Link></li>
              <li><Link to="/cv-generator" className="hover:text-indigo-400 transition">CV Generator</Link></li>
              <li><Link to="/cover-letter" className="hover:text-indigo-400 transition">Cover Letters</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-indigo-400 transition">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-400 transition">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-indigo-400 transition">Cookie Policy</Link></li>
              <li><Link to="/gdpr" className="hover:text-indigo-400 transition">GDPR Compliance</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} AIResumeprocraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}