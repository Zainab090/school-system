'use client';

export default function PagerArrows({ page, pages, onChange, alwaysShow = true }) {
  if (!alwaysShow && pages <= 1) return null;
  const btn =
    'w-9 h-9 rounded-full bg-blue-50 text-slate-700 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 disabled:opacity-60 disabled:cursor-default disabled:hover:bg-blue-50 disabled:hover:text-slate-700 transition-colors';
  return (
    <div className="flex gap-2 shrink-0">
      <button className={btn} aria-label="Previous" disabled={page === 0} onClick={() => onChange(page - 1)}>
        <i className="fa-solid fa-chevron-left text-[10px]" />
      </button>
      <button className={btn} aria-label="Next" disabled={page >= pages - 1} onClick={() => onChange(page + 1)}>
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </button>
    </div>
  );
}
