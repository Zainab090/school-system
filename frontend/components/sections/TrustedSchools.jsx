import { SCHOOLS } from '@/data/schools';
import StarRating from '@/components/ui/StarRating';

function Emblem({ icon }) {
  return (
    <span className="relative inline-flex w-9 h-10 items-center justify-center shrink-0">
      <svg viewBox="0 0 36 40" className="absolute inset-0 w-full h-full" fill="none" stroke="#0B1B3F" strokeWidth="2.2" strokeLinejoin="round">
        <path d="M18 2l14 5v12c0 9-6 15-14 19C10 34 4 28 4 19V7z" fill="#fff" />
      </svg>
      <i className={`${icon} relative text-[13px] text-navy`} />
    </span>
  );
}

export default function TrustedSchools() {
  return (
    <section id="schools" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="text-xs font-bold text-navy">Trusted by leading schools across Pakistan</h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
          {SCHOOLS.map((school) => {
            const [first, ...rest] = school.name.split(' ');
            return (
              <li key={school.name} className="flex items-center gap-2.5">
                <Emblem icon={school.icon} />
                <span className="text-[13px] font-medium leading-tight text-left text-slate-600">
                  {first}
                  <br />
                  {rest.join(' ')}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-center gap-3">
          <StarRating className="text-amber-400 text-base gap-1" />
          <span className="text-[10px] text-slate-500">Rated 4.9/5 by school admins</span>
        </div>
      </div>
    </section>
  );
}
