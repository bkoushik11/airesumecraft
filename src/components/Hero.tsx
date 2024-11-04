import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-mesh opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiLz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Sparkles className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-amber-400 font-medium">AI-Powered Resume Builder</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Create Your{' '}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-300">
                    Dream Resume
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-300 blur-lg opacity-30"></span>
                </span>{' '}
                in Minutes
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Craft professional resumes that stand out with our AI-powered platform. 
                Get more interviews and land your dream job faster.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary group">
                  <span className="flex items-center justify-center">
                    Start Building Now
                    <ChevronRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 rounded-lg border-2 border-teal-300 text-teal-300 hover:bg-teal-300/10 transition group">
                  <span className="flex items-center justify-center">
                    View Templates
                    <ChevronRight className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                  </span>
                </button>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl transform rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Resume Builder Demo" 
                className="rounded-xl shadow-2xl relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl transform -rotate-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}