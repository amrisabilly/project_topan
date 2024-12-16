export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
          <div className="p-4 text-2xl font-bold text-center border-b border-gray-700">
            Admin Panel
          </div>
          <nav className="flex flex-col p-4">
            <a
              href="/admin"
              className="py-2 px-4 rounded hover:bg-gray-700 transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/admin/users"
              className="py-2 px-4 rounded hover:bg-gray-700 transition-colors"
            >
              Users
            </a>
            <a
              href="/admin/settings"
              className="py-2 px-4 rounded hover:bg-gray-700 transition-colors"
            >
              Settings
            </a>
          </nav>
        </aside>
  
        <main className="flex-1 flex flex-col">
          <header className="bg-white shadow p-4">
            <h1 className="text-xl font-bold">Welcome to Admin Panel</h1>
          </header>
          
          <div className="flex-1 p-6">{children}</div>
          
        </main>
      </div>
    );
  }
  