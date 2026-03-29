export default function ProductTable({ products, onDelete }) {
  return (
    <div className="mt-6 overflow-hidden bg-white border border-gray-100 shadow-lg rounded-2xl">
      <div className="px-8 py-6 border-b border-gray-100">
        <h3 className="text-2xl font-bold">📋 Products Inventory</h3>
        <p className="mt-1 text-gray-600">Total: {products.length} items</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-8 py-12 text-center text-gray-500">
                  <div className="mb-4 text-6xl">📦</div>
                  No products yet.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>₹{product.price.toFixed(2)}</td>
                  <td>{product.quantity}</td>
                  <td>₹{(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => onDelete(product.id)}
                      className="text-red-600 hover:text-red-800"
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