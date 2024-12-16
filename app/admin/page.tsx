export default function AdminPage() {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Welcome to the admin dashboard! Here you can manage your application.</p>
        
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-red-600 text-white rounded shadow">
            <h3 className="text-lg font-bold">Total Users</h3>
            <p className="text-2xl">1,234</p>
          </div>
          <div className="p-4 bg-red-600 text-white rounded shadow">
            <h3 className="text-lg font-bold">Active Sessions</h3>
            <p className="text-2xl">567</p>
          </div>
          <div className="p-4 bg-red-600 text-white rounded shadow">
            <h3 className="text-lg font-bold">Revenue</h3>
            <p className="text-2xl">$12,345</p>
          </div>
        </div>
      </div>
    );
  }
  