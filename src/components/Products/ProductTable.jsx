export default function ProductTable({ products, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100">
        <h3 className="text-2xl font-bold text-gray-900">📋 Products Inventory</h3>
        <p className="text-gray-600 mt-1">Total: {products.length} items</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-8 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Product</th>
              <th className="px-8 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Price</th>
              <th className="px-8 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Qty</th>
              <th className="px-8 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Total</th>
              <th className="px-8 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-8 py-12 text-center text-gray-500">
                  <div className="text-6xl mb-4">📦</div>
                  No products yet. Add your first product above!
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="font-semibold text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-900">
                    ₹{parseFloat(product.price).toFixed(2)}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.quantity}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-green-600">
                    ₹{(product.price * product.quantity).toFixed(2)}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => onDelete(index)}
                      className="text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-1 rounded-lg transition-all duration-200"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}