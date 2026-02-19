import React from 'react';

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Personal Finance</p>
          <h1 className="text-2xl font-bold text-white">FinTrack Dashboard</h1>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          Live
        </span>
      </div>
    </header>
  );
}

export default Navbar;
