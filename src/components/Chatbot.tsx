import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI resume assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I'm here to help you create the perfect resume. What specific aspect would you like assistance with?",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 p-4 bg-gradient-to-r from-blue-500 to-teal-400 
          rounded-full shadow-lg hover:from-blue-600 hover:to-teal-500 
          transition-all duration-300 z-50 group ${isOpen ? 'hidden' : 'animate-bounce'}`}
      >
        <Bot className="h-6 w-6 text-white transform group-hover:rotate-12 transition-transform" />
      </button>

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Resume Assistant
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-96 p-4 overflow-y-auto bg-gradient-to-br from-gray-50 to-white">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-4 ${msg.isBot ? 'text-left' : 'text-right'}`}
              >
                <div className={`inline-block p-3 rounded-lg ${
                  msg.isBot 
                    ? 'bg-gradient-to-br from-blue-50 to-teal-50 text-gray-800' 
                    : 'bg-gradient-to-r from-blue-500 to-teal-400 text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button 
                type="submit"
                className="p-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg
                  hover:from-blue-600 hover:to-teal-500 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}