export const PRICING_RATES = {
  base: 1000,        // Rs. per month
  perStudent: 6.25,  // Rs. per student per month
  perTeacher: 25,    // Rs. per teacher per month (adjust to your real rate)
  yearlyDiscount: 0.2,
};

export const PLANS = [
  {
    name: 'Basic',
    tagline: 'For small schools',
    price: 'Rs. 1,000',
    period: '/month',
    limit: 'Up to 100 students',
    features: ['Student Management', 'Fee Management', 'Attendance Tracking', 'Book Reports', 'Email Support', 'Exam Management', 'PDF documents', 'Parent App', 'Student App', 'Teacher App'],
  },
  {
    name: 'Standard',
    tagline: 'For growing schools',
    price: 'Rs. 2,500',
    period: '/month',
    limit: 'Up to 200 students',
    popular: true,
    features: ['Everything in Basic', 'Exam & Results', 'Parent Communication', 'Priority Support', 'Teacher App', 'Parent App', 'Proper Logins', 'Ledger', 'Sales', 'Income/Expense'],
  },
  {
    name: 'Premium',
    tagline: 'For large schools',
    price: 'Rs. 19,999',
    period: '/year',
    limit: '300+ students',
    features: ['All features', 'Priority Support', 'Ledger', 'Accounting', 'PDF generation', 'Excel data import', 'Custom student package', 'Custom teacher limits', 'Price negotiation', 'Contact number'],
  },
];

export const STUDENT_OPTIONS = [50, 100, 200, 300, 500, 1000, 2000];
export const TEACHER_OPTIONS = [5, 10, 20, 30, 50, 100];
