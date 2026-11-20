import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { LANDING_FAQS } from './landingData';

export function LandingFaq() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
            HVAC Questions from Lawrenceville Homeowners
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Straightforward answers regarding cooling failure symptoms, maintenance timelines, and local dispatch.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {LANDING_FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition shadow-2xs hover:border-sky-300"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 pr-4 text-base font-bold text-navy-950 sm:text-lg">
                    <HelpCircle className="h-5 w-5 shrink-0 text-sky-600" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6 text-sm leading-relaxed text-slate-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
