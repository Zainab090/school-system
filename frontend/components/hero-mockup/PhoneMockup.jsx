const MENU = [
  { icon: 'fa-solid fa-table-cells-large', label: 'Dashboard', c: 'bg-blue-500' },
  { icon: 'fa-solid fa-calendar-check', label: 'Attendance', c: 'bg-sky-500' },
  { icon: 'fa-solid fa-file-lines', label: 'Exams', c: 'bg-emerald-500' },
  { icon: 'fa-solid fa-wallet', label: 'Fees', c: 'bg-amber-500' },
  { icon: 'fa-solid fa-bell', label: 'Alerts', c: 'bg-orange-500' },
];

export default function PhoneMockup() {
  return (
    <div className="absolute left-[-2%] bottom-[-5%] w-[17%] min-w-[104px] aspect-[9/18.5] bg-white rounded-[18px] border-[3px] border-slate-900 shadow-2xl shadow-blue-900/25 overflow-hidden hidden sm:flex flex-col">
      <div className="mx-auto mt-1 h-1 w-8 rounded-full bg-slate-900" />
      <div className="px-2 pt-2 text-center">
        <div className="mx-auto w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">
          <i className="fa-solid fa-graduation-cap" />
        </div>
        <p className="mt-1 text-[7px] font-bold text-navy">Welcome Back</p>
      </div>
      <ul className="px-2 mt-2 space-y-1.5">
        {MENU.map((m) => (
          <li key={m.label} className="flex items-center gap-1.5 text-[7px] font-semibold text-navy bg-slate-50 rounded-md px-1.5 py-1">
            <span className={`w-3.5 h-3.5 rounded-full ${m.c} text-white flex items-center justify-center text-[6px]`}>
              <i className={m.icon} />
            </span>
            {m.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
