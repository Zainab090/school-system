'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { REFERRAL_COMMISSION, REFERRAL_EXAMPLES } from '@/data/referral';

export default function Referral() {
  const { openModal } = useModal();
  return (
    <section id="contact" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_0.8fr] gap-5 items-stretch">
        <div className="space-y-2.5 self-center">
          <span className="block text-[9px] font-bold uppercase tracking-wide text-blue-600">Referral program</span>
          <h2 className="text-lg font-extrabold text-navy leading-snug">Schools Refer Karein, Har Mahine Recurring Income Banayein</h2>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Refer schools and earn <strong className="text-navy">{REFERRAL_COMMISSION}%</strong> commission on their active monthly subscription. The more you refer, the more you earn!
          </p>
          <button
            onClick={() => openModal('Create Demo')}
            className="inline-flex items-center gap-1.5 bg-white border border-blue-300 text-navy hover:border-blue-600 text-[10px] font-semibold px-3.5 py-1.5 rounded-full transition-colors"
          >
            <i className="fa-solid fa-circle-play text-blue-600" /> How It Works
          </button>
        </div>

        <div className="soft-card p-4 space-y-3">
          <div>
            <p className="text-3xl font-extrabold text-blue-600 leading-none">
              {REFERRAL_COMMISSION}% <span className="text-base font-bold">Commission</span>
            </p>
            <p className="text-[10px] text-slate-500 mt-1">On active monthly subscription</p>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {REFERRAL_EXAMPLES.map((e) => (
              <div key={e.schools} className="rounded-lg border border-blue-100 bg-blue-50/50 p-2.5 space-y-0.5">
                <p className="text-[10px] font-bold text-blue-600">{e.schools}</p>
                <p className="text-[9px] text-slate-500">{e.revenue}</p>
                <p className="text-[9px] font-bold text-blue-600">&rarr; {e.earn}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const field = 'w-full bg-white border border-slate-200 rounded-md px-2.5 py-1.5 text-[10px] focus:outline-none focus:border-blue-600';

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={onSubmit} className="soft-card p-3.5 space-y-2">
      <h3 className="text-[10px] font-bold text-navy">Work With Us</h3>
      <input required name="name" placeholder="Your Name" aria-label="Your Name" className={field} />
      <input required name="whatsapp" type="tel" placeholder="WhatsApp Contact" aria-label="WhatsApp Contact" className={field} />
      <div className="grid grid-cols-2 gap-2">
        <input name="school" placeholder="School" aria-label="School" className={field} />
        <input name="city" placeholder="City" aria-label="City" className={field} />
      </div>
      <textarea required name="message" rows={2} placeholder="Your Message" aria-label="Your Message" className={field} />
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-semibold py-2 rounded-lg shadow-md shadow-blue-500/25 transition-colors">
        {sent ? '✓ Sent' : 'Submit'}
      </button>
    </form>
  );
}
