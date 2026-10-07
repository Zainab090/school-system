'use client';

import Button from '@/components/ui/Button';
import { useModal } from '@/context/ModalContext';
import DashboardMockup from '@/components/hero-mockup/DashboardMockup';

const TRUST_BADGES = [
  { label: 'No credit card required', icon: 'fa-solid fa-credit-card', tone: 'bg-blue-100 text-blue-600' },
  { label: 'Free setup', icon: 'fa-solid fa-circle-check', tone: 'bg-blue-100 text-blue-600' },
  { label: 'Cancel anytime', icon: 'fa-solid fa-circle-check', tone: 'bg-teal-100 text-teal-600' },
];

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100 px-3 py-1.5 rounded-full text-[11px] font-medium text-slate-600">
              <span className="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[8px]">
                <i className="fa-solid fa-shield-halved" />
              </span>
              Trusted by 500+ Schools Across Pakistan
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-[1.1]">
              Simplify School Management with <span className="text-blue-600">DevNixEdu</span>
            </h1>

            <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              A complete school management system to handle admissions, attendance, exams, fees, and parent communication — all in one powerful platform.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button variant="primary" size="lg" icon="fa-solid fa-arrow-right text-xs" onClick={() => openModal('Create Demo')}>
                Create Demo
              </Button>
              <Button variant="secondary" size="lg" onClick={() => openModal('View Demo')} className="pr-2">
                View Demo
                <span className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center">
                  <i className="fa-solid fa-play text-[8px] ml-0.5" />
                </span>
              </Button>
            </div>

            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-[11px] text-slate-500">
              {TRUST_BADGES.map((b) => (
                <li key={b.label} className="flex items-center gap-1.5">
                  <span className={`w-4 h-4 rounded flex items-center justify-center text-[8px] ${b.tone}`}>
                    <i className={b.icon} />
                  </span>
                  {b.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 pb-4">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
