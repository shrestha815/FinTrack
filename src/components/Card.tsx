import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, action, children, className = '' }) => {
  return (
    <section
      className={`rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.9)] backdrop-blur ${className}`}
    >
      {(title || subtitle || action) && (
        <header className="mb-4 flex items-start justify-between gap-3">
          <div>
            {title && <h2 className="text-base font-semibold text-slate-100">{title}</h2>}
            {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
};

export default Card;
