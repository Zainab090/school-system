'use client';

import { useScrollTo } from '@/hooks/useScrollTo';

export default function Logo({ variant = 'dark' }) {
  const { scrollToTop } = useScrollTo();
  const text = variant === 'dark' ? 'text-navy' : 'text-white';

  return (
    <button onClick={scrollToTop} className="flex items-center gap-2 text-left" aria-label="DevNixEdu home">
      <i className="fa-solid fa-graduation-cap text-[28px] text-blue-600" />
      <span>
        <span className={`block text-[19px] font-extrabold leading-none tracking-tight ${text}`}>
          DevNix<span className="text-blue-600">Edu</span>
        </span>
        <span className="block text-[8px] font-medium text-slate-500 leading-none mt-1">Smart School Management</span>
      </span>
    </button>
  );
}
