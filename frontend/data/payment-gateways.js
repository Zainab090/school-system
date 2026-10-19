export const PAYMENT_GATEWAYS = [
  {
    id: 'jazzcash',
    name: 'JazzCash',
    description: "Pakistan's leading mobile wallet for fee collection",
    icon: 'fa-solid fa-mobile-screen-button',
    fields: [
      { key: 'merchantId', label: 'Merchant ID', type: 'text', placeholder: 'e.g. MC12345', required: true },
      { key: 'password', label: 'Password', type: 'password', placeholder: '••••••••', required: true },
      { key: 'integritySalt', label: 'Integrity Salt', type: 'password', placeholder: '••••••••', required: true },
    ],
    docsUrl: 'https://sandbox.jazzcash.com.pk',
  },
  {
    id: 'easypaisa',
    name: 'EasyPaisa',
    description: "Telenor's mobile payment gateway for institutions",
    icon: 'fa-solid fa-wallet',
    fields: [
      { key: 'storeId', label: 'Store ID', type: 'text', placeholder: 'e.g. ST98765', required: true },
      { key: 'hashKey', label: 'Hash Key', type: 'password', placeholder: '••••••••', required: true },
      { key: 'email', label: 'Registered Email', type: 'email', placeholder: 'you@school.com', required: true },
    ],
    docsUrl: 'https://easypay.com.pk',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'International card payments (Visa, Mastercard)',
    icon: 'fa-solid fa-credit-card',
    fields: [
      { key: 'publishableKey', label: 'Publishable Key', type: 'text', placeholder: 'pk_live_...', required: true },
      { key: 'secretKey', label: 'Secret Key', type: 'password', placeholder: 'sk_live_...', required: true },
      { key: 'webhookSecret', label: 'Webhook Secret', type: 'password', placeholder: 'whsec_...', required: false },
    ],
    docsUrl: 'https://dashboard.stripe.com/apikeys',
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    description: 'Manual bank account details shown on fee challans',
    icon: 'fa-solid fa-building-columns',
    fields: [
      { key: 'accountTitle', label: 'Account Title', type: 'text', placeholder: 'e.g. DevNixEdu School', required: true },
      { key: 'accountNumber', label: 'Account Number', type: 'text', placeholder: 'e.g. 1234567890', required: true },
      { key: 'iban', label: 'IBAN', type: 'text', placeholder: 'PK36SCBL0000001123456702', required: true },
      { key: 'bankName', label: 'Bank Name', type: 'text', placeholder: 'e.g. HBL, UBL, Meezan', required: true },
    ],
    docsUrl: null,
  },
];