import { useState, useEffect } from 'react'
import axios from 'axios'
import StatsCard from '../Dashboard/StatsCard'

const API_BASE = 'https://erp-backend-fgkh.onrender.com'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    count: 0,
    total: 0
  })

  useEffect(() => {
    axios.get(`${API_BASE}/`)
      .then(res => {
        setStats({
          count: res.data.count || 0,
          total: 0
        })
      })
      .catch(err => console.error('Dashboard stats error:', err))
  }, [])

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard Overview</h1>
        <p className="text-xl text-gray-600">Welcome to your ERP control center</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <StatsCard
          title="Total Products"
          value={stats.count}
          change={12.5}
          icon="📦"
        />
        <StatsCard
          title="Total Value"
          value="₹0"
          change={8.2}
          icon="₹"
        />
        <StatsCard
          title="Orders Today"
          value="0"
          change={-3.1}
          icon="🛒"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Recent Activity</h3>
            <p className="text-gray-500">Activity feed coming soon...</p>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🚀 Quick Actions</h3>
            <a href="/products" className="block w-full bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center font-semibold hover:bg-white/30 transition-all mb-4">
              ➕ Add Product
            </a>
            <a href="#" className="block w-full bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center font-semibold hover:bg-white/30 transition-all">
              📋 View Orders
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}