'use client';

import { useState } from 'react';
import { NAV_LINKS } from '@/data/navigation';
import { useModal } from '@/context/ModalContext';
import { useScrollTo } from '@/hooks/useScrollTo';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import Button from '@/components/ui/Button';

const SPY_IDS = ['hero', 'features', 'portals', 'pricing', 'testimonials', 'faq', 'contact'];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { openModal } = useModal();
  const { scrollToSection } = useScrollTo();
  const activeId = useScrollSpy(SPY_IDS, 120);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-600" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = activeId === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                aria-current={active ? 'true' : undefined}
                className={`relative py-1.5 whitespace-nowrap transition-colors hover:text-blue-600 ${active ? 'text-blue-600' : ''}`}
              >
                {link.label}
                {active && <span className="absolute left-0 right-0 -bottom-[13px] h-0.5 bg-blue-600 rounded-full" />}
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <button onClick={() => openModal('Login')} className="text-xs font-medium text-slate-700 hover:text-blue-600">
            Login
          </button>
          <Button variant="primary" size="md" onClick={() => openModal('Create Demo')}>
            Create Demo
          </Button>
        </div>

        <button
          onClick={() => setIsMobileOpen((v) => !v)}
          className="md:hidden text-slate-700 p-2"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          <i className={`fa-solid ${isMobileOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileOpen}
        links={NAV_LINKS}
        onLinkClick={handleNavClick}
        onLogin={() => { setIsMobileOpen(false); openModal('Login'); }}
        onDemo={() => { setIsMobileOpen(false); openModal('Create Demo'); }}
      />
    </header>
  );
}
