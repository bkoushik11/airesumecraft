import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedCharacter from './components/AnimatedCharacter';
import Chatbot from './components/Chatbot';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ATSChecker from './pages/ATSChecker';
import CVGenerator from './pages/CVGenerator';
import CoverLetterCreator from './pages/CoverLetterCreator';
import EngineerSvg from './components/EngineerSvg';
import { 
  FileText, 
  CheckCircle, 
  FileCheck, 
  PenTool,
} from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "AI Resume Builder",
      description: "Create professional resumes with our intelligent builder that adapts to your experience.",
      color: "from-indigo-500 to-rose-500",
      textColor: "text-indigo-500",
      link: "/resume-builder"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "ATS Checker",
      description: "Ensure your resume passes Applicant Tracking Systems with our advanced analysis.",
      color: "from-rose-500 to-amber-500",
      textColor: "text-rose-500",
      link: "/ats-checker"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "CV Generator",
      description: "Generate comprehensive CVs tailored to your academic and professional background.",
      color: "from-amber-500 to-indigo-500",
      textColor: "text-amber-500",
      link: "/cv-generator"
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Cover Letter Creation",
      description: "Craft compelling cover letters that match your resume and target role.",
      color: "from-rose-500 to-indigo-500",
      textColor: "text-rose-500",
      link: "/cover-letter"
    }
  ];

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <EngineerSvg />
              <AnimatedCharacter />
              <Chatbot />

              {/* Features Grid */}
              <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="features">
                <div className="max-w-7xl mx-auto px-4">
                  <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-500">
                    Craft Your Perfect Resume with AI
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                    Our AI-powered platform helps you create professional resumes, ace interviews, and land your dream job.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                      <Link 
                        key={index}
                        to={feature.link}
                        className="group relative p-6 rounded-xl transition-all duration-300 bg-white dark:bg-gray-800 hover:shadow-xl transform hover:scale-105"
                      >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${feature.color} rounded-xl transition-opacity duration-300`}></div>
                        
                        <div className="relative z-10">
                          <div className={`mb-4 ${feature.textColor}`}>{feature.icon}</div>
                          <h3 className={`text-xl font-semibold mb-2 group-hover:${feature.textColor} dark:text-white`}>
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/ats-checker" element={<ATSChecker />} />
          <Route path="/cv-generator" element={<CVGenerator />} />
          <Route path="/cover-letter" element={<CoverLetterCreator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;