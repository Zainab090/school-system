'use client';

import { useState } from 'react';
import { PAYMENT_GATEWAYS } from '@/data/payment-gateways';
import GatewayCard from '@/components/payment/GatewayCard';
import GatewayConfigModal from '@/components/payment/GatewayConfigModal';
import ConfirmModal from '@/components/payment/ConfirmModal';

export default function PaymentGatewaysPage() {
  const [enabledMap, setEnabledMap] = useState({
    jazzcash: true,
    easypaisa: false,
    stripe: false,
    bank: true,
  });

  const [credentials, setCredentials] = useState({
    jazzcash: { merchantId: 'MC12345', password: '••••••••', integritySalt: '••••••••' },
    bank: { accountTitle: 'DevNixEdu School', accountNumber: '1234567890', iban: 'PK36SCBL...', bankName: 'HBL' },
  });

  const [activeGateway, setActiveGateway] = useState(null);
  const [confirmDisable, setConfirmDisable] = useState(null);

  const handleConfigure = (gateway) => {
    setActiveGateway(gateway);
  };

  const handleSaveConfig = (gatewayId, formData) => {
    setCredentials((prev) => ({ ...prev, [gatewayId]: formData }));
    setEnabledMap((prev) => ({ ...prev, [gatewayId]: true }));
  };

  const handleToggle = (gateway, enable) => {
    if (!enable) {
      setConfirmDisable(gateway);
    } else {
      setEnabledMap((prev) => ({ ...prev, [gateway.id]: true }));
    }
  };

  const confirmDisableGateway = () => {
    if (confirmDisable) {
      setEnabledMap((prev) => ({ ...prev, [confirmDisable.id]: false }));
      setConfirmDisable(null);
    }
  };

  const activeCount = Object.values(enabledMap).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <span>Settings</span>
            <i className="fa-solid fa-chevron-right text-[8px]" />
            <span className="text-blue-600">Payment Gateways</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Payment Gateways
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Configure gateways to accept fee payments from parents online.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-xl text-xs font-bold text-blue-700">
              <i className="fa-solid fa-circle-check" />
              {activeCount} of {PAYMENT_GATEWAYS.length} active
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-shield-halved" />
          </div>
          <div className="text-sm">
            <h3 className="font-bold text-gray-900 mb-0.5">
              Secure Credential Storage
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              All gateway credentials are encrypted end-to-end with AES-256.
              Only users with <span className="font-semibold">Admin</span> role
              can view or edit these settings. Changes take effect immediately.
            </p>
          </div>
        </div>

        {/* Gateway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PAYMENT_GATEWAYS.map((gateway) => (
            <GatewayCard
              key={gateway.id}
              gateway={gateway}
              enabled={enabledMap[gateway.id]}
              onConfigure={handleConfigure}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* Help Footer */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">
              <i className="fa-solid fa-headset" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">
                Need help with integration?
              </h3>
              <p className="text-xs text-gray-500">
                Our team can configure gateways for you in under 24 hours.
              </p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition">
            <i className="fa-solid fa-envelope text-blue-600" />
            Contact Support
          </button>
        </div>

      </div>

      {/* Modals */}
      <GatewayConfigModal
        gateway={activeGateway}
        isOpen={!!activeGateway}
        onClose={() => setActiveGateway(null)}
        onSave={handleSaveConfig}
      />

      <ConfirmModal
        isOpen={!!confirmDisable}
        title="Disable this gateway?"
        message={
          confirmDisable
            ? `Parents will no longer be able to pay via ${confirmDisable.name}. Existing configurations will be preserved.`
            : ''
        }
        confirmText="Disable"
        onConfirm={confirmDisableGateway}
        onCancel={() => setConfirmDisable(null)}
      />
    </div>
  );
}