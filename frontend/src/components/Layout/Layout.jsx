import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  )
}