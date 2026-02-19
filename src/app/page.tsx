import Navbar from '@/components/Navbar';
import Dashboard from '@/features/dashboard/Dashboard';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_45%)]" />
      <Navbar />
      <main className="relative px-4 sm:px-6 lg:px-8">
        <Dashboard />
      </main>
    </div>
  );
}
