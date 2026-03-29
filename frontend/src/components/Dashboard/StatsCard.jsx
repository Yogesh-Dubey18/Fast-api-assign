export default function StatsCard({ title, value, change, icon }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</p>
          <p className="mt-2 text-4xl font-bold text-gray-900">{value}</p>
          <p className={`mt-1 text-sm font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last week
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  )
}