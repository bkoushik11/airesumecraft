import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Code, FileText } from 'lucide-react';

export default function Logo() {
  return (
    <Link to="/" className="relative group cursor-pointer">
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-rose-600 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
      <div className="relative flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
          <div className="relative bg-white dark:bg-gray-800 p-2 rounded-full">
            <div className="relative w-8 h-8">
              <FileText className="absolute text-indigo-500 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <Code className="absolute text-rose-500 opacity-0 group-hover:opacity-100 transform transition-all duration-300 scale-90" />
              <Briefcase className="absolute text-amber-500 opacity-0 group-hover:opacity-100 transform transition-all duration-300 scale-90 rotate-12" />
            </div>
          </div>
        </div>
        <div className="font-bold text-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-500">
            AIResumeprocraft
          </span>
        </div>
      </div>
    </Link>
  );
}