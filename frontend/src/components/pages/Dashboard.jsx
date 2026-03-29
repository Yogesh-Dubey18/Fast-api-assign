import { useState, useEffect } from 'react'
import axios from 'axios'
import StatsCard from '../Dashboard/StatsCard'

const API_BASE = 'https://erp-backend-mn9k.onrender.com';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    count: 0,
    total: 0
  })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${API_BASE}/products/`)
      setStats({
        count: res.data.products.length,
        total: res.data.total || 0
      })
    } catch (err) {
      console.error('Dashboard stats error:', err)
    }
  }

  return (
    <div>
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-xl text-gray-600">Welcome to your ERP control center</p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Total Products"
          value={stats.count}
          change={12.5}
          icon="📦"
        />
        <StatsCard
          title="Total Inventory Value"
          value={`₹${stats.total.toFixed(2)}`}
          change={8.2}
          icon="💰"
        />
        <StatsCard
          title="Orders Today"
          value="0"
          change={-3.1}
          icon="🛒"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">📈 Recent Activity</h3>
            <p className="text-gray-500">Activity feed coming soon...</p>
          </div>
        </div>
        <div>
          <div className="p-8 text-white shadow-xl bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold">🚀 Quick Actions</h3>
            <a href="/products" className="block w-full p-4 mb-4 font-semibold text-center transition-all bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30">
              ➕ Add Product
            </a>
            <a href="#" className="block w-full p-4 font-semibold text-center transition-all bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30">
              📋 View Orders
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}