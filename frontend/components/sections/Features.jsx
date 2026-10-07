'use client';

import { useState } from 'react';
import { FEATURES, FEATURES_PER_PAGE } from '@/data/features';
import SectionHeader from '@/components/ui/SectionHeader';
import PagerArrows from '@/components/ui/PagerArrows';
import CheckList from '@/components/ui/CheckList';
import IconTile from '@/components/ui/IconTile';

export default function Features() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(FEATURES.length / FEATURES_PER_PAGE);
  const items = FEATURES.slice(page * FEATURES_PER_PAGE, (page + 1) * FEATURES_PER_PAGE);

  return (
    <section id="features" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Features"
          title="Everything You Need to Run Your School"
          subtitle="Comprehensive tools designed specifically for Pakistani educational institutions."
        >
          <PagerArrows page={page} pages={pages} onChange={setPage} />
        </SectionHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((f) => (
            <article key={f.title} className="soft-card p-4 min-h-[148px] space-y-2">
              <IconTile icon={f.icon} />
              <h3 className="text-[13px] font-bold text-navy">{f.title}</h3>
              <CheckList items={f.points} className="text-[10.5px]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
