export default function Topbar() {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm h-16 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">Welcome back, Admin!</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">Today: {new Date().toLocaleDateString()}</span>
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
          YD
        </div>
      </div>
    </div>
  )
}