import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', icon: '📊', label: 'Dashboard' },
  { path: '/products', icon: '📦', label: 'Products' },
  { path: '/orders', icon: '🛒', label: 'Orders' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          ERP PO System
        </h2>
        <p className="text-sm text-gray-500 mt-1">Production Ready</p>
      </div>
      <nav className="mt-8">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 border-l-4 border-transparent ${
              location.pathname === item.path
                ? 'bg-blue-50 border-blue-600 text-blue-700 font-semibold'
                : 'hover:border-blue-200'
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}