import Dashboard from "@/features/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-4 shadow bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center w-full">FinTrack</h1>
      </header>
      <main className="p-4">
        <Dashboard/>
      </main>
      </div>
  );
}
