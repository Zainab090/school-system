'use client';

import { useEffect, useState } from 'react';

export default function GatewayConfigModal({ gateway, isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({});
  const [showPasswords, setShowPasswords] = useState({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (gateway && isOpen) {
      const initial = {};
      gateway.fields.forEach((f) => {
        initial[f.key] = '';
      });
      setFormData(initial);
      setShowPasswords({});
      setSaved(false);
    }
  }, [gateway, isOpen]);

  if (!isOpen || !gateway) return null;

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const togglePassword = (key) => {
    setShowPasswords((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000)); // Fake API call
    setSaving(false);
    setSaved(true);
    setTimeout(() => {
      onSave(gateway.id, formData);
      onClose();
    }, 800);
  };

  const getGradientClass = (id) => {
    switch (id) {
      case 'jazzcash': return 'from-red-500 to-red-600';
      case 'easypaisa': return 'from-green-500 to-emerald-600';
      case 'stripe': return 'from-indigo-500 to-purple-600';
      case 'bank': return 'from-blue-600 to-blue-700';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-100 p-6 flex items-start gap-4 z-10">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getGradientClass(gateway.id)} flex items-center justify-center text-white shadow-md flex-shrink-0`}
          >
            <i className={`${gateway.icon} text-lg`} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-extrabold text-gray-900">
              Configure {gateway.name}
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {gateway.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {gateway.fields.map((field) => (
            <div key={field.key}>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                {field.label}
                {field.required && <span className="text-rose-500 ml-0.5">*</span>}
              </label>

              {field.type === 'password' ? (
                <div className="relative">
                  <input
                    type={showPasswords[field.key] ? 'text' : 'password'}
                    value={formData[field.key] || ''}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-4 py-2.5 pr-12 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => togglePassword(field.key)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 hover:text-gray-700"
                  >
                    {showPasswords[field.key] ? 'Hide' : 'Show'}
                  </button>
                </div>
              ) : (
                <input
                  type={field.type}
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
              )}
            </div>
          ))}

          {gateway.docsUrl && (
            <div className="flex items-center gap-2 text-xs bg-blue-50 border border-blue-100 rounded-xl px-3 py-2.5">
              <i className="fa-solid fa-circle-info text-blue-600" />
              <span className="text-blue-700">
                Need help?{' '}
                <a
                  href={gateway.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:text-blue-800"
                >
                  View integration docs
                </a>
              </span>
            </div>
          )}

          <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
            <i className="fa-solid fa-shield-halved text-emerald-500 mt-0.5" />
            <span>
              Credentials are encrypted with AES-256 and stored securely.
            </span>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving || saved}
              className={`flex-1 px-4 py-3 rounded-xl text-white text-sm font-semibold transition-all shadow-lg flex items-center justify-center gap-2 ${
                saved
                  ? 'bg-emerald-600 shadow-emerald-500/25'
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/25 hover:-translate-y-0.5'
              } disabled:cursor-not-allowed`}
            >
              {saving ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin text-xs" />
                  Saving...
                </>
              ) : saved ? (
                <>
                  <i className="fa-solid fa-check text-xs" />
                  Saved
                </>
              ) : (
                <>
                  <i className="fa-solid fa-floppy-disk text-xs" />
                  Save Configuration
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}