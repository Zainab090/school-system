'use client';

const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/30',
  secondary: 'bg-white hover:bg-slate-50 text-navy border border-blue-200 shadow-sm',
  outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  ghost: 'text-slate-700 hover:text-blue-600',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-xs',
  lg: 'px-6 py-3 text-sm',
};

export default function Button({ variant = 'primary', size = 'md', children, className = '', icon, iconPosition = 'right', ...props }) {
  return (
    <button
      className={`font-semibold rounded-full transition-colors inline-flex items-center justify-center gap-2 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <i className={icon} />}
      {children}
      {icon && iconPosition === 'right' && <i className={icon} />}
    </button>
  );
}
