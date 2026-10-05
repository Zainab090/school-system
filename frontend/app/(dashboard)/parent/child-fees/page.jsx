'use client';

import { useEffect, useState } from 'react';
import ChildSwitcher from '@/components/parent/ChildSwitcher';
import useSelectedChild from '@/components/parent/useSelectedChild';
import { parentService } from '@/services/parentService';

const STATUS_STYLE = {
  paid: 'bg-green-100 text-green-800',
  partial: 'bg-amber-100 text-amber-800',
  unpaid: 'bg-red-100 text-red-800',
  pending: 'bg-amber-100 text-amber-800',
  overdue: 'bg-red-100 text-red-800',
};

const money = (n) => Number(n || 0).toLocaleString();

export default function ChildFeesPage() {
  const { childList, selectedId, select, loading, error } = useSelectedChild();
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    if (!selectedId) return;
    let cancelled = false;
    setData(null);
    setFetchError('');
    parentService
      .getFees(selectedId)
      .then((d) => !cancelled && setData(d))
      .catch((e) => !cancelled && setFetchError(e.message));
    return () => {
      cancelled = true;
    };
  }, [selectedId]);

  if (loading) return <p className="p-6 text-slate-500">Loading...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <h1 className="text-2xl font-semibold text-navy">Fees</h1>
      <ChildSwitcher childList={childList} selectedId={selectedId} onChange={select} />

      {fetchError && <p className="text-red-600">{fetchError}</p>}
      {!data && !fetchError && <p className="text-slate-500">Loading fees...</p>}

      {data && (
        <>
          <div className="grid grid-cols-3 gap-3">
            {[
              ['Total', data.totals.total],
              ['Paid', data.totals.paid],
              ['Due', data.totals.due],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 p-3">
                <p className="text-xl font-semibold text-navy">{money(value)}</p>
                <p className="text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </div>

          {data.fees.length === 0 ? (
            <p className="text-slate-600">No fee records for this child yet.</p>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-2 font-medium">Fee / Month</th>
                    <th className="px-4 py-2 font-medium">Amount</th>
                    <th className="px-4 py-2 font-medium">Due date</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.fees.map((f) => (
                    <tr key={f._id} className="border-t border-slate-200">
                      <td className="px-4 py-2">{f.title || f.month}</td>
                      <td className="px-4 py-2">{money(f.amount)}</td>
                      <td className="px-4 py-2">
                        {f.dueDate ? new Date(f.dueDate).toLocaleDateString() : '-'}
                      </td>
                      <td className="px-4 py-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            STATUS_STYLE[f.status] || STATUS_STYLE.unpaid
                          }`}
                        >
                          {f.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
