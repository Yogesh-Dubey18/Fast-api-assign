export default function ProductForm({ onSubmit, formData, setFormData, loading }) {
  return (
    <form onSubmit={onSubmit} className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
      <h3 className="mb-6 text-xl font-bold text-gray-900">➕ Add New Product</h3>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div>
          <label className="block mb-3 text-sm font-semibold text-gray-700">Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block mb-3 text-sm font-semibold text-gray-700">Price (₹)</label>
          <input
            type="number"
            step="0.01"
            placeholder="0.00"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || '' })}
            className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block mb-3 text-sm font-semibold text-gray-700">Quantity</label>
          <input
            type="number"
            min="1"
            placeholder="1"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
            className="w-full px-4 py-3 transition-all border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-4 mt-8 text-lg font-semibold text-white transition-all duration-200 transform shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? '⏳ Adding Product...' : '✅ Add Product'}
      </button>
    </form>
  );
}