import SectionHeader from '@/components/ui/SectionHeader';

const SCREENS = [
  { title: 'Admin Dashboard', variant: 'dashboard' },
  { title: 'Student Records', variant: 'table' },
  { title: 'Reports & Analytics', variant: 'charts' },
];

export default function PlatformPreview() {
  return (
    <section id="preview" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Platform preview" title="Beautiful, Intuitive Interface" subtitle="Designed with simplicity in mind for users of all technical levels." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SCREENS.map((s) => (
            <figure key={s.title} className="soft-card overflow-hidden p-3">
              <MiniScreen variant={s.variant} />
              <figcaption className="flex items-center justify-between pt-3 text-[11px] font-semibold text-navy">
                {s.title}
                <i className="fa-solid fa-arrow-right text-blue-600 text-[10px]" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniScreen({ variant }) {
  return (
    <div className="flex h-36 rounded-md overflow-hidden border border-slate-100 bg-white" aria-hidden="true">
      <div className="w-[14%] bg-[#0b1d4d] p-1.5 space-y-1.5">
        <div className="h-1.5 w-full rounded bg-blue-400" />
        {[...Array(7)].map((_, i) => (
          <div key={i} className={`h-1 w-full rounded ${i === 0 ? 'bg-blue-500' : 'bg-slate-600'}`} />
        ))}
      </div>
      <div className="flex-1 p-2.5 space-y-2 min-w-0">
        {variant === 'dashboard' && (
          <>
            <div className="grid grid-cols-4 gap-1.5">
              {[...Array(4)].map((_, i) => <div key={i} className="h-7 rounded bg-blue-50 border border-blue-100" />)}
            </div>
            <svg viewBox="0 0 200 60" className="w-full h-16">
              <path d="M0,52 L20,44 L40,48 L60,36 L80,40 L100,28 L120,32 L140,18 L160,22 L180,8 L200,4 L200,60 L0,60Z" fill="#2563eb" fillOpacity="0.12" />
              <path d="M0,52 L20,44 L40,48 L60,36 L80,40 L100,28 L120,32 L140,18 L160,22 L180,8 L200,4" fill="none" stroke="#2563eb" strokeWidth="1.8" />
            </svg>
          </>
        )}
        {variant === 'table' && (
          <div className="space-y-1.5">
            <div className="h-1.5 w-1/3 rounded bg-slate-300" />
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-300" />
                <div className="h-1 w-1/4 rounded bg-slate-300" />
                <div className="h-1 w-1/4 rounded bg-slate-200" />
                <div className="h-1 w-1/6 rounded bg-slate-200" />
                <div className="h-1 w-1/12 rounded bg-blue-300 ml-auto" />
              </div>
            ))}
          </div>
        )}
        {variant === 'charts' && (
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="flex items-end gap-1.5 border-b border-slate-200 pb-1">
              {[40, 70, 50, 95, 60, 80].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-blue-500" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full" style={{ background: 'conic-gradient(#2563eb 0 78%, #bfdbfe 78% 100%)' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
