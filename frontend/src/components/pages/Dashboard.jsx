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
    axios.get(`${API_BASE}/products/`)
      .then(res => {
        setStats({
          count: res.data.length || 0,
          total: 0
        })
      })
      .catch(err => console.error('Dashboard stats error:', err))
  }, [])

  return (
    <div>
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-xl text-gray-600">Welcome to your ERP control center</p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard title="Total Products" value={stats.count} change={12.5} icon="📦" />
        <StatsCard title="Total Value" value="₹0" change={8.2} icon="₹" />
        <StatsCard title="Orders Today" value="0" change={-3.1} icon="🛒" />
      </div>
    </div>
  )
}