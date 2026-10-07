'use client';

import { useState } from 'react';
import { FAQS } from '@/data/faqs';
import { useModal } from '@/context/ModalContext';
import SectionHeader from '@/components/ui/SectionHeader';

const ASSURANCES = [
  { label: 'No credit card required', icon: 'fa-solid fa-credit-card', tone: 'bg-blue-100 text-blue-600' },
  { label: 'Free setup', icon: 'fa-solid fa-circle-check', tone: 'bg-teal-100 text-teal-600' },
  { label: 'Cancel anytime', icon: 'fa-solid fa-circle-check', tone: 'bg-emerald-100 text-emerald-600' },
];

function CapIllustration() {
  return (
    <svg viewBox="0 0 160 130" className="w-36 h-auto shrink-0 hidden sm:block" aria-hidden="true">
      <defs>
        <linearGradient id="capTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#60a5fa" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="capBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#93c5fd" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <ellipse cx="80" cy="120" rx="52" ry="7" fill="#bfdbfe" opacity=".6" />
      <path d="M40 62v26c0 9 17 18 40 18s40-9 40-18V62L80 76z" fill="url(#capBase)" />
      <path d="M80 18L10 46l70 28 70-28z" fill="url(#capTop)" />
      <path d="M80 18L10 46l70 28z" fill="#fff" opacity=".18" />
      <circle cx="80" cy="46" r="4" fill="#1e3a8a" />
      <path d="M80 46l52 14v34" fill="none" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />
      <rect x="127" y="90" width="10" height="22" rx="4" fill="#1d4ed8" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { openModal } = useModal();

  return (
    <section id="faq" className="py-6 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-6 items-start">
        <div>
          <SectionHeader badge="FAQ" title="Frequently Asked Questions" className="mb-3" />
          <div className="space-y-1.5">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.q} className="soft-card !rounded-lg">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-3 py-2 text-left text-[10.5px] font-medium text-navy"
                  >
                    {faq.q}
                    <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-plus'} text-[9px] text-slate-500`} />
                  </button>
                  {isOpen && <p className="px-3 pb-2.5 text-[10.5px] text-slate-500 leading-relaxed">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="cta-glow rounded-2xl border border-blue-100 p-6 flex items-center justify-between gap-4 lg:mt-5">
          <div className="space-y-3">
            <p className="text-[11px] font-extrabold uppercase text-navy">
              <span className="text-blue-600">Ready to transform</span> your school?
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed max-w-xs">
              Join 500+ schools across Pakistan who have already modernized their operations with DevNixEdu.
            </p>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => openModal('Create Demo')} className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold px-4 py-2 rounded-full shadow-md shadow-blue-500/30 transition-colors">
                Create Demo <i className="fa-solid fa-arrow-right ml-1 text-[9px]" />
              </button>
              <button onClick={() => openModal('View Demo')} className="bg-white border border-blue-200 text-navy text-[11px] font-semibold px-4 py-2 rounded-full hover:border-blue-600 transition-colors">
                Schedule a Call
              </button>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[9px] text-slate-500">
              {ASSURANCES.map((a) => (
                <li key={a.label} className="flex items-center gap-1">
                  <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[7px] ${a.tone}`}>
                    <i className={a.icon} />
                  </span>
                  {a.label}
                </li>
              ))}
            </ul>
          </div>
          <CapIllustration />
        </div>
      </div>
    </section>
  );
}
