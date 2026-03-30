import { useEffect, useState } from 'react'
import axios from 'axios'

const API_BASE = 'https://erp-backend-fgkh.onrender.com'

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${API_BASE}/products/`)
      setOrders(res.data.products || [])
      setTotalValue(res.data.total || 0)
    } catch (err) {
      console.error('Failed to fetch orders:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-4 text-3xl font-bold">Orders</h1>
        <p className="text-gray-600">Track all created purchase entries in one place.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
        <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl">
          <p className="text-sm font-medium text-gray-500">Total Orders</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{orders.length}</p>
        </div>
        <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl">
          <p className="text-sm font-medium text-gray-500">Total Value</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">Rs {totalValue.toFixed(2)}</p>
        </div>
        <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl">
          <p className="text-sm font-medium text-gray-500">Status</p>
          <p className="mt-2 text-3xl font-bold text-green-600">{loading ? 'Loading' : 'Live'}</p>
        </div>
      </div>

      <div className="overflow-hidden bg-white border border-gray-100 shadow-lg rounded-2xl">
        <div className="px-8 py-6 border-b border-gray-100">
          <h3 className="text-2xl font-bold">Order List</h3>
          <p className="mt-1 text-gray-600">Every saved product entry appears here as an order row.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold tracking-wide text-left text-gray-700 uppercase">Product</th>
                <th className="px-6 py-3 text-sm font-semibold tracking-wide text-left text-gray-700 uppercase">Quantity</th>
                <th className="px-6 py-3 text-sm font-semibold tracking-wide text-left text-gray-700 uppercase">Unit Price</th>
                <th className="px-6 py-3 text-sm font-semibold tracking-wide text-left text-gray-700 uppercase">Order Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-6 py-10 text-center text-gray-500">Loading orders...</td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-10 text-center text-gray-500">No orders found yet.</td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 text-gray-900">{order.name}</td>
                    <td className="px-6 py-4 text-gray-700">{order.quantity}</td>
                    <td className="px-6 py-4 text-gray-700">Rs {Number(order.price).toFixed(2)}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Rs {(Number(order.price) * Number(order.quantity)).toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
