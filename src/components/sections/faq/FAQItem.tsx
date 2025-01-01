import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <h3 className="text-lg font-semibold text-white group-hover:text-white/90">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-white/60 group-hover:text-white/90" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-white/90" />
        )}
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}