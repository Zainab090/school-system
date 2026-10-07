import PhoneMockup from './PhoneMockup';

const SIDEBAR = [
  { icon: 'fa-table-cells-large', label: 'Dashboard', active: true },
  { icon: 'fa-user-graduate', label: 'Students' },
  { icon: 'fa-chalkboard-user', label: 'Teachers' },
  { icon: 'fa-calendar-check', label: 'Attendance' },
  { icon: 'fa-receipt', label: 'Fees' },
  { icon: 'fa-file-lines', label: 'Exams' },
  { icon: 'fa-chart-pie', label: 'Reports' },
  { icon: 'fa-comments', label: 'Communication' },
  { icon: 'fa-gear', label: 'Settings' },
];

const STATS = [
  { icon: 'fa-user-graduate', label: 'Total Students', value: '2,456', tone: 'bg-blue-100 text-blue-600' },
  { icon: 'fa-chalkboard-user', label: 'Teachers', value: '156', tone: 'bg-sky-100 text-sky-600' },
  { icon: 'fa-calendar-check', label: 'Attendance', value: '94%', tone: 'bg-teal-100 text-teal-600' },
  { icon: 'fa-wallet', label: 'Fee Collected', value: 'Rs. 12.5M', tone: 'bg-indigo-100 text-indigo-600' },
];

const UPDATES = [
  { c: 'bg-emerald-500', icon: 'fa-user-plus', t: 'New admission request', s: 'Ahsan Ali – Class 6' },
  { c: 'bg-amber-500', icon: 'fa-wallet', t: 'Fee payment received', s: 'Rs. 25,000 – Fatima Khan' },
  { c: 'bg-rose-500', icon: 'fa-envelope', t: 'New message from parent', s: 'Ali Raza – Class 7' },
];

const CHART = [14, 20, 16, 24, 21, 30, 25, 36, 31, 44, 38, 52, 47, 60, 70];
const toPath = () => {
  const w = 200, h = 70;
  return CHART.map((v, i) => `${i === 0 ? 'M' : 'L'}${(i / (CHART.length - 1)) * w},${h - v}`).join(' ');
};

export default function DashboardMockup() {
  const line = toPath();
  return (
    <div className="relative w-full max-w-[640px] mx-auto" aria-hidden="true">
      {/* laptop */}
      <div className="rounded-t-2xl bg-slate-900 p-[5px] shadow-2xl shadow-blue-900/20">
        <div className="flex rounded-t-xl overflow-hidden bg-slate-50 aspect-[16/10]">
          <aside className="w-[22%] bg-[#0b1d4d] p-3 text-white">
            <p className="text-[10px] font-extrabold mb-3 flex items-center gap-1">
              <i className="fa-solid fa-graduation-cap text-blue-400" /> DevNix<span className="text-blue-400">Edu</span>
            </p>
            <ul className="space-y-1.5">
              {SIDEBAR.map((s) => (
                <li
                  key={s.label}
                  className={`flex items-center gap-1.5 rounded px-2 py-1.5 text-[8.5px] ${s.active ? 'bg-blue-600 font-semibold' : 'text-slate-300'}`}
                >
                  <i className={`fa-solid ${s.icon} w-3 text-[8px]`} /> {s.label}
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex-1 p-3 flex flex-col gap-2.5 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-bold text-navy">Dashboard</p>
              <span className="text-[6px] text-slate-400">Admin ▾</span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white rounded-md p-2 shadow-sm border border-slate-100">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] ${s.tone}`}>
                    <i className={`fa-solid ${s.icon}`} />
                  </span>
                  <p className="text-[12px] font-extrabold text-navy mt-1.5 leading-none">{s.value}</p>
                  <p className="text-[7px] text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-2 flex-1 min-h-0">
              <div className="col-span-3 bg-white rounded-md p-2.5 border border-slate-100 flex flex-col">
                <p className="text-[8.5px] font-bold text-navy">Student Growth</p>
                <svg viewBox="0 0 200 80" className="w-full flex-1 min-h-0 mt-1" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gfill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#2563eb" stopOpacity="0.25" />
                      <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${line} L200,80 L0,80 Z`} fill="url(#gfill)" />
                  <path d={line} fill="none" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="col-span-2 bg-white rounded-md p-2.5 border border-slate-100">
                <p className="text-[8.5px] font-bold text-navy mb-2">Live Updates</p>
                <ul className="space-y-2.5">
                  {UPDATES.map((u) => (
                    <li key={u.t} className="flex items-center gap-1">
                      <span className={`w-4 h-4 rounded-full ${u.c} text-white flex items-center justify-center text-[6px] shrink-0`}>
                        <i className={`fa-solid ${u.icon}`} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[7.5px] font-semibold text-navy truncate">{u.t}</span>
                        <span className="block text-[6.5px] text-slate-400 truncate">{u.s}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2.5 -mx-[4%] rounded-b-[999px] bg-gradient-to-b from-slate-300 to-slate-200 shadow-md" />

      <PhoneMockup />
    </div>
  );
}
