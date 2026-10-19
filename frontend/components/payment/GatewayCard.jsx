'use client';

import GatewayStatusBadge from './GatewayStatusBadge';

// 🎨 Color mapping function taake Tailwind ka dynamic class issue khatam ho
const getGradientClass = (id) => {
  switch (id) {
    case 'jazzcash': return 'from-red-500 to-red-600';
    case 'easypaisa': return 'from-green-500 to-emerald-600';
    case 'stripe': return 'from-indigo-500 to-purple-600';
    case 'bank': return 'from-blue-600 to-blue-700';
    default: return 'from-gray-500 to-gray-600';
  }
};

export default function GatewayCard({ gateway, enabled, onConfigure, onToggle }) {
  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm hover:shadow-lg transition-all group ${
        enabled ? 'border-blue-200 shadow-blue-500/10' : 'border-gray-200'
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getGradientClass(gateway.id)} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}
            >
              <i className={`${gateway.icon} text-lg`} />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">{gateway.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5 max-w-xs">
                {gateway.description}
              </p>
            </div>
          </div>
          <GatewayStatusBadge enabled={enabled} />
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        {enabled ? (
          <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
            <i className="fa-solid fa-circle-check text-emerald-500" />
            <span>Gateway is configured and accepting payments</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
            <i className="fa-solid fa-circle-info text-gray-400" />
            <span>Add credentials to start accepting payments</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onConfigure(gateway)}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <i className={`fa-solid ${enabled ? 'fa-pen-to-square' : 'fa-gear'} text-xs`} />
            {enabled ? 'Edit Config' : 'Configure'}
          </button>

          {enabled && (
            <button
              onClick={() => onToggle(gateway, false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 text-sm font-semibold transition-all"
              title="Disable gateway"
            >
              <i className="fa-solid fa-power-off text-xs" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}