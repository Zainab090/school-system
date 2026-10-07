'use client';

import { useState } from 'react';
import { PLANS, PRICING_RATES, STUDENT_OPTIONS, TEACHER_OPTIONS } from '@/data/pricing';
import { useModal } from '@/context/ModalContext';
import SectionHeader from '@/components/ui/SectionHeader';
import CheckList from '@/components/ui/CheckList';

const fmt = (n) => 'Rs. ' + Math.round(n).toLocaleString('en-PK');

export default function Pricing() {
  return (
    <section id="pricing" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Pricing" title="Plans That Fit Your School" subtitle="Affordable pricing designed for Pakistani schools of all sizes." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-4 items-start">
          <Calculator />
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

const field =
  'w-full bg-white border border-slate-200 rounded-md px-2.5 py-1.5 text-xs text-navy focus:outline-none focus:border-blue-600';

function Calculator() {
  const [students, setStudents] = useState(100);
  const [teachers, setTeachers] = useState(10);
  const [name, setName] = useState('My School');
  const [billing, setBilling] = useState('monthly');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const monthly =
      PRICING_RATES.base + Number(students) * PRICING_RATES.perStudent + Number(teachers) * PRICING_RATES.perTeacher;
    setResult(
      billing === 'monthly'
        ? { amount: monthly, label: '/month' }
        : { amount: monthly * 12 * (1 - PRICING_RATES.yearlyDiscount), label: '/year' }
    );
  };

  return (
    <div className="soft-card p-4 space-y-3">
      <h3 className="text-xs font-bold text-navy">Create Your Own Package</h3>

      <div className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-2.5 items-end">
        <label className="text-[10px] text-slate-500 space-y-1 block">
          Students Limit
          <select value={students} onChange={(e) => setStudents(e.target.value)} className={field}>
            {STUDENT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
        <div className="text-[10px] text-slate-500 pb-1.5">
          Base
          <p className="text-xs font-bold text-navy">{fmt(PRICING_RATES.base)}</p>
        </div>

        <label className="text-[10px] text-slate-500 space-y-1 block">
          Teachers Limit
          <select value={teachers} onChange={(e) => setTeachers(e.target.value)} className={field}>
            {TEACHER_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
        <div className="text-[10px] text-slate-500 pb-1.5">
          Extra Student
          <p className="text-xs font-bold text-navy">
            Rs. {PRICING_RATES.perStudent} <span className="text-[8px] font-normal text-slate-400">/student</span>
          </p>
        </div>

        <label className="text-[10px] text-slate-500 space-y-1 block">
          Plan Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={field} />
        </label>
      </div>

      <div className="flex gap-2 text-[10px] font-semibold" role="group" aria-label="Billing period">
        {['monthly', 'yearly'].map((b) => (
          <button
            key={b}
            onClick={() => setBilling(b)}
            aria-pressed={billing === b}
            className={`px-3 py-1 rounded-full capitalize border transition-colors ${
              billing === b ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200'
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-lg shadow-md shadow-blue-500/25 transition-colors">
        Calculate Price
      </button>

      <div aria-live="polite" className="text-xs text-slate-600 min-h-[1.25rem]">
        {result && (
          <p>
            <span className="font-semibold text-navy">{name || 'Custom plan'}:</span>{' '}
            <span className="text-base font-extrabold text-blue-600">{fmt(result.amount)}</span>
            <span className="text-slate-500">{result.label}</span>
          </p>
        )}
      </div>
    </div>
  );
}

function PlanCard({ plan }) {
  const { openModal } = useModal();
  return (
    <div className={`relative p-4 space-y-2 ${plan.popular ? 'soft-card !border-blue-500 !border-[1.5px] mt-3 lg:mt-0 shadow-lg shadow-blue-500/15' : 'soft-card'}`}>
      {plan.popular && (
        <span className="absolute -top-2.5 left-3 right-3 text-center bg-blue-600 text-white text-[8px] font-bold py-0.5 rounded-full">
          Most Popular
        </span>
      )}
      <div className={plan.popular ? 'pt-1' : ''}>
        <h3 className="text-[13px] font-bold text-navy">{plan.name}</h3>
        <p className="text-[8px] text-slate-400">{plan.tagline}</p>
      </div>
      <p>
        <span className="text-base font-extrabold text-navy">{plan.price}</span>
        <span className="text-[10px] text-slate-500">{plan.period}</span>
      </p>
      <p className="text-[9px] text-slate-400">{plan.limit}</p>
      <CheckList items={plan.features} circle className="text-[10px] space-y-1" />
      <button
        onClick={() => openModal('Create Demo')}
        className={`w-full text-[10px] font-semibold py-2 rounded-lg transition-colors ${
          plan.popular
            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25'
            : 'bg-white border border-slate-200 text-blue-600 hover:border-blue-600'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}
