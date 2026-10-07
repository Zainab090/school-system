'use client';

import { useState } from 'react';
import { TESTIMONIALS, TESTIMONIALS_PER_PAGE } from '@/data/testimonials';
import SectionHeader from '@/components/ui/SectionHeader';
import StarRating from '@/components/ui/StarRating';
import PagerArrows from '@/components/ui/PagerArrows';
import Avatar from '@/components/ui/Avatar';

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(TESTIMONIALS.length / TESTIMONIALS_PER_PAGE);
  const items = TESTIMONIALS.slice(page * TESTIMONIALS_PER_PAGE, (page + 1) * TESTIMONIALS_PER_PAGE);

  return (
    <section id="testimonials" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Testimonials" title="What School Leaders Say" subtitle="Trusted by hundreds of schools across Pakistan">
          <PagerArrows page={page} pages={pages} onChange={setPage} />
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <article key={t.name} className="soft-card p-4 flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <Avatar name={t.name} photo={t.photo} index={i} size={38} />
                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-navy leading-tight">{t.name}</h3>
                  {t.school && <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{t.school}</p>}
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <StarRating className="text-amber-400 text-[11px] gap-0.5" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
