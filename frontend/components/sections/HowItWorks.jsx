import { STEPS } from '@/data/steps';
import SectionHeader from '@/components/ui/SectionHeader';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="How it works" title="Get Started in 4 Easy Steps" subtitle="Implement DevNixEdu in your school within days, not months." className="mb-4" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <ol className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className={`space-y-1.5 px-4 first:pl-0 ${i > 0 ? 'sm:border-l border-slate-100' : ''}`}>
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 flex items-center justify-center text-base">
                  <i className={s.icon} />
                </span>
                <h3 className="text-xs font-bold text-navy pt-1">{s.title}</h3>
                <p className="text-[10.5px] text-slate-500 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>

          <div className="lg:col-span-4 flex justify-center" aria-hidden="true">
            <div className="relative w-full max-w-[290px]">
              <div className="rounded-t-lg border-[5px] border-slate-800 bg-gradient-to-br from-white to-blue-50 aspect-[16/10] p-4 flex flex-col justify-center gap-2">
                <p className="text-[13px] font-extrabold leading-tight text-navy">
                  Better Education
                  <br />
                  Through Technology
                </p>
                <span className="self-start bg-blue-600 text-white text-[8px] font-semibold px-2.5 py-1 rounded-full">Get Started</span>
              </div>
              <div className="h-2 bg-gradient-to-b from-slate-300 to-slate-200 rounded-b-xl -mx-2 shadow" />
              <div className="absolute -right-4 bottom-1 w-12 h-24 rounded-xl border-[3px] border-slate-800 bg-white shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
