import { PORTALS } from '@/data/portals';
import SectionHeader from '@/components/ui/SectionHeader';
import CheckList from '@/components/ui/CheckList';
import IconTile from '@/components/ui/IconTile';

export default function Portals() {
  return (
    <section id="portals" className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Portals" title="Dedicated Portals for Everyone" subtitle="Separate portals for admins, teachers, students, parents and more." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {PORTALS.map((p) => (
            <article key={p.title} className="soft-card p-3.5 space-y-2">
              <IconTile icon={p.icon} className="text-[22px]" />
              <h3 className="text-[11px] font-bold text-navy leading-tight">{p.title}</h3>
              <CheckList items={p.points} className="text-[9.5px] space-y-1" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
