
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-dreamable-gray/30 rounded-lg overflow-hidden mb-4">
      <button
        className={`flex justify-between items-center w-full p-4 text-left ${isOpen ? 'bg-dreamable-gray/20' : 'bg-dreamable-gray/10'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 text-dreamable-green transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 p-4' : 'max-h-0'}`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
