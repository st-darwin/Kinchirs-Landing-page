import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I know the correct tyre size for my vehicle?",
    answer: "You can find your exact tyre dimensions (such as width, aspect ratio, and rim diameter) printed on the sidewall of your current tyres (e.g., 205/55R16) or check your vehicle’s manual or driver-side door placard."
  },
  {
    question: "Are your tyres brand new and certified for safety?",
    answer: "Yes, 100% of our tyres are brand new, factory-fresh, and sourced directly from certified manufacturers to guarantee optimal tread integrity, grip, and durability."
  },
  {
    question: "How long does product delivery take?",
    answer: "Deliveries within major urban areas are typically fulfilled within 24 to 48 hours. For bulk or specialized tyre orders, our team will provide a precise delivery timeline upon confirmation."
  },
  {
    question: "How do you ensure liquids like grease and oil don't leak during transit?",
    answer: "All lubricants and grease products are shipped in factory-sealed, industrial-grade packaging with protective reinforced casing to guarantee leak-free arrival alongside your tyre orders."
  },
  {
    question: "Do you offer bulk supply for workshops and commercial fleets?",
    answer: "Yes, we specialize in bulk supply of tyres, lubricants, and motor parts for auto mechanics, logistics fleets, and commercial garages with custom pricing tiers."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We support instant bank transfers, card payments, and structured payment schedules for registered business accounts."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section  id='faq'  className="relative bg-gradient-to-b from-white via-sky-50/20 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient glow */}
      <div className=" absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sky-300/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-medium tracking-wide shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-sky-600 font-semibold">Questions</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-normal">
            Everything you need to know about our tyre selection, supply chain, safe delivery guarantee, and ordering process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white/90 border-sky-200/80 shadow-md shadow-sky-500/5'
                    : 'bg-white/60 border-sky-100/70 hover:border-sky-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-sm font-semibold text-slate-800 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen ? 'bg-sky-500 text-white rotate-180' : 'bg-sky-50 text-sky-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-500 leading-relaxed animate-in fade-in duration-200">
                    <div className="pt-2 border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact snippet with phone number */}
        <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Still have questions?</h4>
            <p className="text-xs text-slate-500">Reach out directly to our tyre and supply support desk.</p>
          </div>
          <a
            href="tel:09114742360"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-sky-700 border border-sky-200 text-xs font-semibold hover:bg-sky-50 transition-all cursor-pointer shadow-2xs"
          >
            <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
            <span>09114742360</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;