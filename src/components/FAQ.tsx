import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the ATS checker work?",
    answer: "Our ATS checker uses advanced AI to analyze your resume against job descriptions, providing detailed feedback on keyword matching, formatting, and overall ATS compatibility."
  },
  {
    question: "Can I customize my CV template?",
    answer: "Yes! Our CV generator offers multiple customizable templates and sections that you can modify to match your professional style and industry standards."
  },
  {
    question: "How personalized are the cover letters?",
    answer: "Our AI generates highly personalized cover letters by analyzing both your resume and the job description, ensuring relevance and proper highlighting of your qualifications."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. All uploads are encrypted, and we never share your personal information with third parties."
  },
  {
    question: "How long does it take to generate a resume?",
    answer: "Our AI typically generates a professional resume within 2-3 minutes, though you can spend additional time customizing it to your preferences."
  },
  {
    question: "Can I download my documents in different formats?",
    answer: "Yes, you can download your resume, CV, and cover letters in multiple formats including PDF, DOCX, and TXT to ensure compatibility with different systems."
  },
  {
    question: "Do you offer resume templates for specific industries?",
    answer: "Yes, we provide industry-specific templates for various sectors including tech, healthcare, finance, education, and more."
  },
  {
    question: "How often can I update my resume?",
    answer: "You can update your resume as often as you like! We recommend keeping it current with your latest experiences and achievements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-500">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-500" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-300 ${
                  openIndex === index ? 'py-4' : 'py-0 h-0'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}