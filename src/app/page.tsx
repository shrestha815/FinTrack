import Navbar from "@/components/Navbar";
import Dashboard from "@/features/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-gray-900 dark:text-white">
      <Navbar/>
      <main className="p-4">
        <Dashboard/>
      </main>
      </div>
  );
}
