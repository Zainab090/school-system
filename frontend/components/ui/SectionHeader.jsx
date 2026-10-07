export default function SectionHeader({ badge, title, subtitle, children, className = 'mb-6' }) {
  return (
    <div className={`flex items-end justify-between gap-6 ${className}`}>
      <div className="space-y-1">
        {badge && <span className="block text-[11px] font-bold uppercase tracking-wide text-blue-600">{badge}</span>}
        <h2 className="text-2xl sm:text-[1.75rem] font-extrabold tracking-tight text-navy leading-tight">{title}</h2>
        {subtitle && <p className="text-xs sm:text-[13px] text-slate-500">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
