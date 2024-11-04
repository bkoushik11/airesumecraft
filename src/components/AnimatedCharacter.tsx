import React, { useEffect, useState } from 'react';
import { Sparkles, Star, Wand2 } from 'lucide-react';

export default function AnimatedCharacter() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIcon, setCurrentIcon] = useState<'wand' | 'sparkles' | 'star'>('wand');

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);
      setPosition({ x, y });
      setIsAnimating(true);
      setCurrentIcon(prev => {
        const icons: ('wand' | 'sparkles' | 'star')[] = ['wand', 'sparkles', 'star'];
        const currentIndex = icons.indexOf(prev);
        return icons[(currentIndex + 1) % icons.length];
      });
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderIcon = () => {
    const props = { className: "h-6 w-6 text-white" };
    switch (currentIcon) {
      case 'wand': return <Wand2 {...props} />;
      case 'sparkles': return <Sparkles {...props} />;
      case 'star': return <Star {...props} />;
    }
  };

  return (
    <div 
      className="fixed z-50 transition-all duration-1000 ease-in-out"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className={`p-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-lg 
        ${isAnimating ? 'animate-bounce' : ''}`}>
        {renderIcon()}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full opacity-50 blur-sm -z-10"></div>
      </div>
    </div>
  );
}