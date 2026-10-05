'use client';

import { useEffect, useState } from 'react';
import ChildSwitcher from '@/components/parent/ChildSwitcher';
import ChildSummaryCard from '@/components/parent/ChildSummaryCard';
import useSelectedChild from '@/components/parent/useSelectedChild';
import { parentService } from '@/services/parentService';

export default function ParentDashboardPage() {
  const { childList, selectedId, select, loading, error } = useSelectedChild();
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (!selectedId) return;
    let cancelled = false; // ignore stale responses when switching quickly
    setSummary(null);
    parentService
      .getSummary(selectedId)
      .then((data) => !cancelled && setSummary(data))
      .catch(() => !cancelled && setSummary(null));
    return () => {
      cancelled = true;
    };
  }, [selectedId]);

  const child = childList.find((c) => c._id === selectedId);

  if (loading) return <p className="p-6 text-slate-500">Loading...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;
  if (!child) {
    return (
      <p className="p-6 text-slate-600">
        No children are linked to your account yet. Please contact your school.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-2xl font-semibold text-navy">Parent Dashboard</h1>
      <ChildSwitcher childList={childList} selectedId={selectedId} onChange={select} />
      <ChildSummaryCard child={child} summary={summary} />
    </div>
  );
}
