'use client';

import Logo from './Logo';
import { useScrollTo } from '@/hooks/useScrollTo';

const QUICK_LINKS = [
  { label: 'Features', id: 'features' },
  { label: 'Modules', id: 'portals' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Blog' },
  { label: 'Careers' },
];
const SUPPORT = ['Help Center', 'Documentation', 'Video Tutorials', 'System Status', 'Privacy Policy', 'Terms of Service'];
const CONTACT = [
  { icon: 'fa-solid fa-location-dot', text: 'Lahore, Pakistan' },
  { icon: 'fa-solid fa-phone', text: '+92 319 8018471' },
  { icon: 'fa-solid fa-envelope', text: 'support@devnixedu.com' },
];
const SOCIALS = [
  { icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
  { icon: 'fa-brands fa-x-twitter', label: 'X' },
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { icon: 'fa-brands fa-youtube', label: 'YouTube' },
];

export default function Footer() {
  const { scrollToSection } = useScrollTo();

  return (
    <footer className="pt-6 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1.2fr_1fr] gap-y-8">
        <div className="space-y-3 col-span-2 md:col-span-1 pr-4">
          <Logo />
          <p className="text-[10px] text-slate-500 max-w-[11rem]">Modern education management for better tomorrow.</p>
          <div className="flex gap-4 text-navy text-xs">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="hover:text-blue-600 transition-colors">
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <Column title="Quick Links">
          {QUICK_LINKS.map((l) => (
            <li key={l.label}>
              <button onClick={() => l.id && scrollToSection(l.id)} className="hover:text-blue-600 transition-colors text-left">
                {l.label}
              </button>
            </li>
          ))}
        </Column>

        <Column title="Support">
          {SUPPORT.map((s) => (
            <li key={s}>
              <a href="#" className="hover:text-blue-600 transition-colors">{s}</a>
            </li>
          ))}
        </Column>

        <Column title="Contact">
          {CONTACT.map((c) => (
            <li key={c.text} className="flex items-center gap-2">
              <i className={`${c.icon} text-navy text-[9px] w-3`} />
              <span>{c.text}</span>
            </li>
          ))}
        </Column>

        <div className="col-span-2 md:col-span-1 md:text-right text-[8px] text-slate-500 space-y-1 md:pt-1">
          <p>&copy; {new Date().getFullYear()} DevNixEdu. All rights reserved.</p>
          <p>
            Made with <i className="fa-solid fa-heart text-red-500" /> by <strong className="text-navy">DevNix Pro</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Column({ title, children }) {
  return (
    <div className="md:border-l md:border-slate-100 md:pl-6">
      <h4 className="text-[10px] font-bold text-navy mb-2.5">{title}</h4>
      <ul className="space-y-1.5 text-[10px] text-slate-500">{children}</ul>
    </div>
  );
}
